/** @format */

import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const UpperForm = () => {

  const navigate = useNavigate();

  const [city, setCity] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [forexAmount, setForexAmt] = useState(0);
  const [selectcity, setSelectCity] = useState("");
  const [selectcurrency, setSelectCurrency] = useState("");
  const [innerAmt, setInnerAmt] = useState("");

  const [option, setOption] = useState("1");

  const handleClick = ()=>{
    if(option === "1") navigate("/Transaction-Details-3");
    else if(option === "2") navigate("/Transaction-Details-3");
    else navigate("/Transaction-Details-4");
  }

  const getCities = async()=>{
    const url = "https://akashdeep12.vercel.app/selectcity/cities";
    try{
      const res = await axios.get(url);
      setCity(res?.data?.data);
    }catch(err){
      console.log(err.message);
    }
  }
  const getCurrencies = async()=>{
    const url = "https://akashdeep12.vercel.app/currency/currencies";
    try{
      const res= await axios.get(url);
      console.log(res?.data);
      setCurrency(res?.data);
    }catch(err){
      console.log(err.message);
    }
  }

  const getConvertRate = async(amt)=>{
    console.log(selectcurrency);
    setForexAmt(amt);
    const url = `https://akashdeep12.vercel.app/betterRate/convertRate/${selectcurrency}/${amt}`;
    console.log(url);
    try{
      const res = await axios.get(url);
      console.log(res?.data?.inrAmount);
      setInnerAmt(res?.data?.inrAmount);
    }catch(err){
      console.log(err.message);
    }
  }

  const handleConvert = (e)=>{
    setForexAmt(e.target.value);
    console.log(currency);
    getConvertRate();
  }

  const handleBook = async(e)=>{
    e.preventDefault();
    const url = "https://akashdeep12.vercel.app/bookthisorder/bookthisorder";
    try{
      const res = await axios.post(url,{
        selectcity, selectcurrency, forexAmount
      })
      console.log(res?.data);
      alert("Order booked");
    }catch(err){
      console.log(err.message);
    }
  }

  useEffect(()=>{
    getCities();
    getCurrencies();
  },[])
  console.log(innerAmt);
  return (
    <>
      <div className="Index-Upper-Form">
        <div class="button-container">
          <button autoFocus onClick={()=>setOption("1")}>BUY</button>
          <button onClick={()=>setOption("2")}>RELOAD</button>
          <button onClick={()=>setOption("3")}>UNLOAD</button>
        </div>

        <form>
          <div className="form-cont">
            <div className="form-part-1">
              <div className="two-cont">
                <div>
                  <label>Select City</label>
                  <select onChange={(e)=>setSelectCity(e.target.value)}>
                    <option>Select City</option>
                    {
                      city?.map((ele,i)=>(
                        <option value={ele?.selectcity}>{ele?.selectcity}</option>
                      ))
                    }
                  </select>
                </div>

                <div>
                  <label>Select Currency</label>
                  <select onChange={(e)=>setSelectCurrency(e.target.value)}>
                    <option>Select Currency</option>
                    {
                      currency?.map((ele,i)=>(
                        <option value={ele?.addcurrency}>{ele?.addcurrency}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <p className="rate">Rate 82.80</p>
              <div className="two-cont">
                <div>
                  <label>Enter Forex Amount</label>
                  <input type="number" placeholder="Forex Amount" 
                    onChange={(e)=>getConvertRate(e.target.value)}
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
                <i className="fa-solid fa-indian-rupee-sign"></i>{innerAmt}
              </p>
            </div>
            <button className="ord-btn" onClick={handleClick}>Book this order</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpperForm;
