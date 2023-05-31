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
                <button autoFocus>Sell US Dollar</button>
                <button>Buy US Dollar</button>
                <button>Transfer US Dollar</button>
              </div>

              <form>
                <div className="form-cont">
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

                    <div className="two-cont">
                      <div>
                        <label>Currency you have </label>
                        <select>
                          <option>Indian Rupee</option>
                        </select>
                      </div>
                    </div>
                    <p className="rate">Rate 82.80</p>
                    <div className="two-cont">
                      <div>
                        <label>Enter Forex Amount</label>
                        <input type="number" placeholder="Forex Amount" />
                      </div>
                      <div>
                        <label>Enter INR Amount</label>
                        <input type="number" placeholder="INR Amount" />
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
                    <p
                      className="rate"
                      style={{ margin: "0", marginTop: "10px" }}
                    >
                      {" "}
                      TOTAL
                    </p>
                    <p
                      className="rate"
                      style={{
                        margin: "0",
                        fontSize: "21px",
                        paddingLeft: "20px",
                      }}
                    >
                      <i className="fa-solid fa-indian-rupee-sign"></i> 0.00
                    </p>
                  </div>
                  <button className="ord-btn">Book this order</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="right_container"></div>
      </div>
    </>
  );
};

export default CurrencyConvertor;
