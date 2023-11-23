/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { all_currencies } from "../../../Respository/Repo";

const UpperForm = () => {
  const navigate = useNavigate();
  const [cities, setCity] = useState([]);
  const [options, setOptions] = useState([]);
  const [monthlyImport_Export, setMonthlyImp_Exp] = useState("");
  const [tranferFrom, setTransferFrom] = useState("");
  const [transferTo, setTransferTo] = useState("");
  const [purposeName, setPurpose] = useState("");
  const [recievingCurrencyName, setReceivingCurrency] = useState({});
  const [INRCurrencyName, setINRCurrency] = useState("");
  const [recievingAmount, setReceivingAmt] = useState("");
  const [purposeArr, setPurposeArr] = useState([]);

  const Baseurl = `https://akashdeep-backend.vercel.app/`;

  const getCities = async () => {
    const url = "https://akashdeep12.vercel.app/selectcity/cities";
    try {
      const res = await axios.get(url);
      setCity(res?.data?.data);
    } catch {}
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${Baseurl}wireTransferr`, {
        tranferFrom,
        transferTo,
        purpose: purposeName,
        recievingCurrencyName,
        INRCurrencyName,
        recievingAmount,
      });
      if (monthlyImport_Export === "S1107") {
        navigate("/cash-free");
      } else navigate(`/Transaction-Details/${res?.data?._id}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  const [currencyt, setCurrencyt] = useState([]);

  const getCurrencies = async () => {
    all_currencies(setCurrencyt);
  };

  useEffect(() => {
    getCities();
    getOptions();
    getCurrencies();
    getPurpose();
  }, []);

  const [inrAmt, setInrAmt] = useState("0");
  const [forexAmt, setForexAmt] = useState("0");

  const getConvertRate = async (amt) => {
    if (amt === "") amt = 0;
    setForexAmt(amt);
    setReceivingAmt(amt);
    const url = `${Baseurl}betterRate/convertRate/${recievingCurrencyName}/${amt}`;
    try {
      const res = await axios.get(url);
      setInrAmt(res?.data?.inrAmount);
    } catch {}
  };

  return (
    <div className="Index-Upper-Form">
      <form onSubmit={handleSubmit}>
        <div className="form-cont" style={{ paddingBottom: "50px" }}>
          <div className="form-part-1">
            <div className="two-cont" style={{ display: "block" }}>
              <div style={{ width: "100%" }} className="mb-3">
                <label>Transfer From</label>
                <select onChange={(e) => setTransferFrom(e.target.value)}>
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
                <select onChange={(e) => setTransferTo(e.target.value)}>
                  <option>
                    Please select the option that best describes you
                  </option>
                  {cities?.map((ele, i) => (
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
                <select onChange={(e) => setPurpose(e.target.value)}>
                  <option value="">Select</option>
                  {purposeArr?.map((ele, i) => (
                    <option key={i} value={ele?.purpose}>
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
                <select onClick={(e) => setINRCurrency(e.target.value)}>
                  <option value="INR">INR Currency</option>

                  {currencyt?.map((ele, i) => (
                    <option
                      style={{ color: "#00000" }}
                      value={ele?._id}
                      key={i}
                    >
                      {ele?.addcurrency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="two-cont mb-3">
              <div>
                <input
                  type="text"
                  placeholder="Recieving Amount"
                  onChange={(e) => getConvertRate(e.target.value)}
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
