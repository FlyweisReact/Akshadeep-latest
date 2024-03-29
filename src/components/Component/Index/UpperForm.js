/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getPurpose, remittance_order } from "../../../Respository/Repo";

const UpperForm = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [forexAmount, setForexAmt] = useState(0);
  const [selectcity, setSelectCity] = useState("");
  const [selectcurrency, setSelectCurrency] = useState("");
  const [innerAmt, setInnerAmt] = useState("");

  // new fields
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [purposeArr, setPurposeArr] = useState([]);
  const [purpose, setPurpose] = useState("");

  const getCities = async () => {
    const url = "https://akashdeep12.vercel.app/selectcity/cities";
    try {
      const res = await axios.get(url);
      setCity(res?.data?.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const getCurrencies = async () => {
    const url = "https://akashdeep12.vercel.app/currency/currencies";
    try {
      const res = await axios.get(url);
      setCurrency(res?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getConvertRate = async (amt) => {
    setForexAmt(amt);
    const url = `https://akashdeep12.vercel.app/betterRate/convertRate/${selectcurrency}/${amt}`;
    try {
      const res = await axios.get(url);
      setInnerAmt(res?.data?.inrAmount);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCities();
    getCurrencies();
    getPurpose(setPurposeArr);
  }, []);

  const payload = {
    selectCity: selectedCity,
    currency: selectedCurrency,
    forexAmount,
    purpose
  };

  const submit_handler = (e) => {
    e.preventDefault();
    remittance_order(payload , navigate);
  };

  const cityHandler = (i) => {
    const obj = JSON.parse(i);
    setSelectCity(obj?.selectcity);
    setSelectedCity(obj?._id);
  };

  const currencyHandler = (i) => {
    const obj = JSON.parse(i);
    setSelectedCurrency(obj?._id);
    setSelectCurrency(obj?.addcurrency);
  };
  return (
    <>
      <div className="Index-Upper-Form">
        <div class="button-container">
          <button autoFocus>BUY</button>
          <button>RELOAD</button>
          <button>UNLOAD</button>
        </div>

        <form onSubmit={submit_handler}>
          <div className="form-cont">
            <div className="form-part-1">
              <div className="two-cont">
                <div>
                  <label>Select City</label>
                  <select
                    required
                    onChange={(e) => cityHandler(e.target.value)}
                  >
                    <option>Select City</option>
                    {city?.map((ele, i) => (
                      <option key={`City${i}`} value={JSON.stringify(ele)}>
                        {ele?.selectcity}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label>Select Currency</label>
                  <select
                    required
                    onChange={(e) => currencyHandler(e.target.value)}
                  >
                    <option>Select Currency</option>
                    {currency?.map((ele) => (
                      <option id={ele?._id} value={JSON.stringify(ele)}>
                        {ele?.addcurrency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="two-cont" style={{ display: "block" }}>
                <div className="mb-3" style={{ width: "100%" }}>
                  <label>Purpose</label>
                  <select onChange={(e) => setPurpose(e.target.value)} required>
                    <option value="">Select</option>
                    {purposeArr?.map((ele, i) => (
                      <option key={i} value={ele._id}>
                        {ele?.desc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <p className="rate">Rate 82.80</p>
              <div className="two-cont">
                <div>
                  <label>Enter Forex Amount</label>
                  <input
                    type="number"
                    placeholder="Forex Amount"
                    required
                    onChange={(e) => getConvertRate(e.target.value)}
                  />
                </div>
                <div>
                  <label>Converted INR Amount</label>
                  <input type="number" placeholder={innerAmt} />
                </div>
              </div>

              <div className="two-cont">
                <div className="two-section">
                  <button>ZERO</button>
                  <p>Commission</p>
                </div>
                <div className="two-section">
                  <i className="fa-solid fa-plus"></i>{" "}
                  <p className="add">Add Product</p>
                </div>
              </div>
              <p className="rate" style={{ margin: "0", marginTop: "10px" }}>
                {" "}
                TOTAL
              </p>
              <p
                className="rate"
                style={{ margin: "0", fontSize: "21px", paddingLeft: "20px" }}
              >
                <i className="fa-solid fa-indian-rupee-sign"></i>
                {innerAmt}
              </p>
            </div>
            <button className="ord-btn" type="submit">
              Book this order
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpperForm;
