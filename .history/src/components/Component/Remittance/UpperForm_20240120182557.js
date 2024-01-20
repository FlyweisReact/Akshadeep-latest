/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  all_currencies,
  fetchCountryStates,
  getCountries,
  get_all_cities,
  get_all_countries,
  transfer_money,
} from "../../../Respository/Repo";

const UpperForm = () => {
  const navigate = useNavigate();
  const [currencyt, setCurrencyt] = useState([]);
  const fixedCountry = currencyt?.filter((i) => i.addcurrency === "INR");
  const [cities, setCity] = useState([]);
  const [options, setOptions] = useState([]);
  const [tranferFrom, setTransferFrom] = useState("");
  const [transferTo, setTransferTo] = useState("");

  const [purposeArr, setPurposeArr] = useState([]);
  const INRCurrencyName = fixedCountry?.[0]?._id;
  const Baseurl = `https://akashdeep-backend.vercel.app/`;
  const [purpose, setPurpose] = useState({});
  const purposeObj = purpose;
  const purposeName = purposeObj?.purpose;
  const [countries, setCountries] = useState([]);

  // Converation Rate
  const [recievingCurrencyName, setReceivingCurrency] = useState({});
  const [recievingAmount, setReceivingAmt] = useState("");
  const [inrAmt, setInrAmt] = useState(0);
  let debounceTimeout;


  const getOptions = async () => {
    const url = "https://akashdeep12.vercel.app/BestDescribe";
    try {
      const res = await axios.get(url);
      setOptions(res?.data);
    } catch {}
  };

  const getPurpose = async () => {
    try {
      const response = await axios.get(
        `https://akashdeep-backend.vercel.app/purposee`
      );
      setPurposeArr(response.data.msg);
    } catch {}
  };

  const payload = {
    tranferFrom,
    transferTo,
    purpose: purposeName,
    recievingCurrencyName,
    INRCurrencyName,
    recievingAmount,
  };

  const isTrue = purposeObj?.desc === "Education Abroad" ? true : false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    transfer_money(payload, navigate, "/Transaction-Details", isTrue);
  };

  const getCurrencies = async () => {
    all_currencies(setCurrencyt);
  };

  useEffect(() => {
    getOptions();
    getCurrencies();
    getPurpose();
  }, []);

  const getConvertRate = async () => {
    const url = `${Baseurl}betterRate/convertRate/${recievingCurrencyName}/${recievingAmount}`;
    try {
      const res = await axios.get(url);
      setInrAmt(res?.data?.inrAmount);
    } catch {}
  };

  useEffect(() => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      if (recievingAmount && recievingCurrencyName) {
        getConvertRate();
      }
    }, 500);
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [recievingAmount, recievingCurrencyName]);

  // Countries

  useEffect(() => {
    get_all_countries(setCountries);
  }, []);

  // ----
  const [other_countries, setOtherCountries] = useState([]);
  const [chosenCountry, setChosenCountry] = useState([]);
  useEffect(() => {
    getCountries(setOtherCountries);
  }, []);

  useEffect(() => {
    if (other_countries?.length > 0) {
      setChosenCountry(
        other_countries?.filter((i) => i.selectcity === "India")
      );
    }
  }, [other_countries]);

  const fetchCities = () => {
    fetchCountryStates({
      setResponse: setCity,
      id: chosenCountry?.[0]?._id,
    });
  };

  useEffect(() => {
    if (chosenCountry?.length > 0) {
      fetchCities();
    }
  }, [chosenCountry]);

  return (
    <div className="Index-Upper-Form">
      <form onSubmit={handleSubmit}>
        <div className="form-cont" style={{ paddingBottom: "50px" }}>
          <div className="form-part-1">
            <div className="two-cont" style={{ display: "block" }}>
              <div style={{ width: "100%" }} className="mb-3">
                <label>Transfer From</label>
                <select
                  required
                  onChange={(e) => setTransferFrom(e.target.value)}
                >
                  <option>Select City</option>
                  {cities?.map((ele, i) => (
                    <option value={ele?._id} key={i}>
                      {ele?.selectcity}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3" style={{ width: "100%" }}>
                <label>Transfer To</label>
                <select required onChange={(e) => setTransferTo(e.target.value)}>
                  <option>
                    Please select the option that best describes you
                  </option>
                  {countries?.map((ele, i) => (
                    <option value={ele?._id} key={i}>
                      {ele?.selectcity}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="two-cont" style={{ display: "block" }}>
              <div className="mb-3" style={{ width: "100%" }}>
                <label>Purpose</label>
                <select
                  onChange={(e) => setPurpose(JSON.parse(e.target.value))}
                  required
                >
                  <option value="">Select</option>
                  {purposeArr?.map((ele, i) => (
                    <option key={i} value={JSON.stringify(ele)}>
                      {ele?.desc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="two-cont mb-3">
              <div>
                <select
                  onChange={(e) => {
                    setReceivingCurrency(e.target.value);
                  }}
                  required
                >
                  <option value="">Receiving Currency</option>
                  {currencyt?.map((ele, i) => (
                    <option
                      style={{ color: "#00000" }}
                      value={ele?.addcurrency}
                      key={i}
                    >
                      {ele?.addcurrency}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select>
                  <option>INR</option>
                </select>
              </div>
            </div>
            <div className="two-cont mb-3">
              <div>
                <input
                  type="number"
                  min={0}
                  placeholder="Recieving Amount"
                  onChange={(e) => setReceivingAmt(e.target.value)}
                  required
                />
              </div>
              <div>
                <input type="number" value={inrAmt} />
              </div>
            </div>
          </div>
          <button className="ord-btn" type="submit">
            Book Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpperForm;
