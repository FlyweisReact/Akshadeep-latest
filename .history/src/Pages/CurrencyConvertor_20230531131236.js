/** @format */

import React from "react";
import Header from "../components/Layout/Header";
import img from "../Images/i.png";
import img1 from "../Images/32.png";

const CurrencyConvertor = () => {
  return (
    <>
      <Header />

      <div className="Currency_Convertor">
        <div className="left_container">
          <p className="Head">USD to INR Currency Converter with Live Rate</p>

          <div className="upper">
            <p className="head">USD-INR Currency Converter</p>
            <p className="sub_head">1 USD = 82.40 INR</p>
            <p className="desc">
              Interbank/ mid-market Rate at: 17-02-2023 16:42:17
            </p>
            <div className="two_Div">

              <div className="item">
                <input type="number" placeholder="Enter USD Amount" />
                <div className="two">
                  <img src={img} alt="" />
                  <p>US Dollar</p>
                </div>
              </div>

              <img src={img1} alt="" className="convertorImg" />
              <div className="item">
                <input type="number" placeholder="Enter INR Amount" />
                <div className="two">
                  <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png'} alt="" />
                  <p>US Dollar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="down_Div">
            <Upp
          </div>
        </div>

        <div className="right_container"></div>
      </div>
    </>
  );
};

export default CurrencyConvertor;
