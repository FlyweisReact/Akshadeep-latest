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
                  <img
                    src={
                      "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png"
                    }
                    alt=""
                  />
                  <p>US Dollar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="down_Div">
            <div className="Index-Upper-Form">
              <div class="button-container">
                <button autoFocus style={{fontSize : '12px'}}>Sell US Dollar</button>
                <button style={{fontSize : '12px'}}>Buy US Dollar</button>
                <button style={{fontSize : '12px'}}>Transfer US Dollar</button>
              </div>

              <form>
                <div className="form-cont" style={{marginTop : '0'}}>
                  <div className="form-part-1">
                    <div className="two-cont">
                      <div>
                        <label>Currency you have </label>
                        <select>
                          <option>Indian Rupee</option>
                        </select>
                      </div>

                      <div>
                        <label>Currency you want</label>
                        <select>
                          <option>US Dollar</option>
                        </select>
                      </div>
                    </div>

                    <div className="two-cont mt-3">
                      <div style={{ width: "100%" }}>
                        <select>
                          <option>Forex Card</option>
                        </select>
                      </div>
                    </div>
                    <div className="two-cont mt-3">
                      <div>
                        <input type="number" placeholder="Forex Amount" />
                      </div>
                      <div>
                        <input type="number" placeholder="INR Amount" />
                      </div>
                    </div>
                    <p className="rate">Rate 82.80</p>
                    <div className="two-cont">
                      <div className="two-section">
                        <button>ZERO</button>
                        <p>Commission</p>
                      </div>
                      <div className="two-section">
                        <p className="add">Request Better Rate</p>
                      </div>
                    </div>
                    <p className="rate mb-3" style={{ textAlign: "center" }}>
                      {" "}
                      Total Amount: <strong>0.00 INR </strong>{" "}
                    </p>
                  </div>
                  <button className="ord-btn">Book this order</button>
                </div>
              </form>
            </div>

            <div className="buttons">
            <button>Request Call Back</button>
            <button>Set Rate Alert</button>
            </div>

          </div>
        </div>

        <div className="right_container">
            <p className="head">Live US Dollar Exchange Rates</p>

            <div className="box mb-3">
                <p>Best USD Buying Rate <strong>82.98</strong></p>

                <button>Buy USD</button>
            </div>
            <div className="box mb-3">
                <p>Best USD Buying Rate <strong>82.98</strong></p>

                <button>Buy USD</button>
            </div>
            <div className="box">
                <p>Best USD Buying Rate <strong>82.98</strong></p>

                <button>Buy USD</button>
            </div>

            <p className="head">Live US Dollar Exchange Rates</p>
        </div>
      </div>
    </>
  );
};

export default CurrencyConvertor;
