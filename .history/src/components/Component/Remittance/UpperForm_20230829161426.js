/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { all_currencies } from "../../../Respository/Repo";

const UpperForm = () => {
  const navigate = useNavigate();
  const [cities, setCity] = useState([]);
  const [options, setOptions] = useState([]);
  const [mobile, setMobile] = useState("");
  const [monthlyImport_Export, setMonthlyImp_Exp] = useState("");
  const [tranferFrom, setTransferFrom] = useState("");
  const [transferTo, setTransferTo] = useState("");
  const [purposeName, setPurpose] = useState("");
  const [recievingCurrencyName, setReceivingCurrency] = useState("");
  const [INRCurrencyName, setINRCurrency] = useState("");
  const [recievingAmount, setReceivingAmt] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://akashdeep12.vercel.app/wireTransferr";
    try {
      const res = await axios.post(url, {
        tranferFrom,
        transferTo,
        purposeName,
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
  }, []);

  const [inrAmt, setInrAmt] = useState("0");
  const [forexAmt, setForexAmt] = useState("0");

  const getConvertRate = async (amt) => {
    if (amt === "") amt = 0;
    setForexAmt(amt);
    setReceivingAmt(amt);
    const url = `https://akashdeep12.vercel.app/betterRate/convertRate/${recievingCurrencyName}/${amt}`;
    try {
      const res = await axios.get(url);
      setInrAmt(res?.data?.inrAmount);
    } catch
  };

  const purposes = [
    {
      description: "Education Abroad",
      code: "S1107",
    },
    {
      description: "GIC payment to canada",
      code: "S0305",
    },
    {
      description: "Travel For Education",
      code: "S0305",
    },
    {
      description: "Maintenance for close relative abroad",
      code: "S1301",
    },
    {
      description: "Gift",
      code: "S1302",
    },
    {
      description: "Donation to Charitable or religious organization",
      code: "S1303",
    },
    {
      description: "Travel For Medical Treatment Abroad",
      code: "S0304",
    },
    {
      description: "Private Visit to any foreign country",
      code: "S0306",
    },
    {
      description:
        "Business travel, attending business conferences or specialized training abroad",
      code: "S0301",
    },
    {
      description: "Emigration Abroad",
      code: "S1307",
    },
    {
      description: "Employment Abroad",
      code: "S1307",
    },
    {
      description: "Legal Services",
      code: "S1004",
    },
    {
      description: "Postal and Courier Service",
      code: "S0224",
    },
    {
      description: "Travel For Pilgrimage",
      code: "S0303",
    },
    {
      description: "Refund of Non Trade Inward remittance",
      code: "S1502",
    },
    {
      description: "Purchase of Medicines and goods for personal use",
      code: "S1109",
    },
    {
      description: "Subscription, Payment for newspaper/ magazines",
      code: "S1108",
    },
  ];

  return (
    <div className="Index-Upper-Form">
      <form>
        <div className="form-cont" style={{ paddingBottom: "50px" }}>
          <div className="form-part-1">
            <div className="two-cont" style={{ display: "block" }}>
              <div style={{ width: "100%" }} className="mb-3">
                <label>Transfer From</label>
                <select onChange={(e) => setTransferFrom(e.target.value)}>
                  <option>Select City</option>
                  {cities?.map((ele, i) => (
                    <option value={ele?._id}>{ele?.selectcity}</option>
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
                    <option value={ele?._id}>{ele?.selectcity}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="two-cont" style={{ display: "block" }}>
              <div className="mb-3" style={{ width: "100%" }}>
                <label>Purpose</label>
                <select onChange={(e) => setPurpose(e.target.value)}>
                  <option value="">Select</option>
                  {purposes?.map((ele, i) => (
                    <option key={i} value={ele?.code}>
                      {ele?.description}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="two-cont mb-3">
              <div>
                <select onChange={(e) => setReceivingCurrency(e.target.value)}>
                  <option value="">Receiving Currency</option>
                  {currencyt?.map((ele, i) => (
                    <option
                      style={{ color: "#00000" }}
                      value={ele?.addcurrency}
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
                      value={ele?.addcurrency}
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
                <input
                  type="number"
                  placeholder={inrAmt}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button className="ord-btn" onClick={handleSubmit}>
            Book Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpperForm;
