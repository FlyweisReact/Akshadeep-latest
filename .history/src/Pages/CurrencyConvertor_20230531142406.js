/** @format */

import React from "react";
import Header from "../components/Layout/Header";
import img from "../Images/i.png";
import img1 from "../Images/32.png";
import img2 from "../Images/33.png";

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
                <button autoFocus style={{ fontSize: "12px" }}>
                  Sell US Dollar
                </button>
                <button style={{ fontSize: "12px" }}>Buy US Dollar</button>
                <button style={{ fontSize: "12px" }}>Transfer US Dollar</button>
              </div>

              <form>
                <div className="form-cont" style={{ marginTop: "0" }}>
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
            <p>
              Best USD Buying Rate <strong>82.98</strong>
            </p>

            <button>Buy USD</button>
          </div>
          <div className="box mb-3">
            <p>
              Best USD Buying Rate <strong>82.98</strong>
            </p>

            <button>Buy USD</button>
          </div>
          <div className="box">
            <p>
              Best USD Buying Rate <strong>82.98</strong>
            </p>

            <button>Buy USD</button>
          </div>

          <p
            className="head"
            style={{ color: "#0170C1", textDecoration: "underline" }}
          >
            View All Foreign Currency Exchange Rates
          </p>
        </div>
      </div>

      <div className="Currency_Convertor_Banner">
        <p className="head">
          Convert USD to INR Online as per Today’s Conversion Rate
        </p>

        <div className="main">
          <div>
            <img src={img2} alt="" />
          </div>
          <p>
            Our online currency converter is showing you the value of 1 US
            Dollar in Indian Rupees according to the current foreign exchange
            rate'of INR 82.84. Today i.e.Friday 17/02/2023 , for 1 US Dollar you
            get 82.84 Indian Rupees. Change in USD to INR rate from previous day
            is +0.1%. Moreover, we have also added the table of the most popular
            USD to INR conversions and historical charts for current, weekly and
            monthly USD to INR rates.
          </p>
        </div>

        <p className="desc mb-3">
        There are multiple ways to convert USD to INR in India. The traditional approach of doing so involved going to banks. You stand in the queue and wait for your turn. This was not only time consuming but pretty frustrating and even after all the effort, you end up paying a high cost. The second way was to search for a money changer where the first check is whether they have the desired USD or not.
        </p>
        <p className="desc">
        The smarter, faster and most economical way which is now being used by millions is using the online forex marketplace Loren ipsum. We only deal with RBI authorized money changers, and hence you can trust us completely. Be smart to book the live rates from the comfort of your home with Loren ipsum and get more money for your USD exchange. 
        </p>
      </div>


      <div className="exch-cont">
        <div className="upper_two_sec">
          <h2 className="exch-title">
            Live US Dollar Exchange Rate (USD/INR) Today <br /> in{" "}
            <spam>India</spam>
          </h2>
          <button>See Full Rate Card</button>
        </div>
        <div className="exch-left-cont">
          <div className="outer-cont">
            <div className="top-box">
              <div className="top-part-1">
                <div className="top-left">
                  <div class="input-row">
                    <input type="text" placeholder="US Dollar" />
                    <input type="text" placeholder="Forex Card" />
                    <input type="text" placeholder="Forex Amount" />
                    <input type="text" placeholder="INR Amount" />
                  </div>
                  <small>
                    1 USD=82.84 INR Interbank/mid-market Rate at: 17-02-2023
                  </small>
                </div>
                <div className="top-right">
                  <p>ADD PRODUCT</p>
                </div>
              </div>
              <h3 className="exch-mid-txt">Request Better Rate</h3>

              <div className="exch-mid-cont">
                <div className="exch-mid-cont-l">
                  <div className="inside-comp">
                    <div className="comp-1">
                      <p>ZERO</p>
                    </div>
                    <div className="comp-2">
                      <p>Commission</p>
                    </div>
                  </div>
                </div>
                <div className="exch-mid-cont-r">
                  <p>
                    Total Amount : <spam>00</spam>
                  </p>
                </div>
              </div>

              <button
                className="top-box-btn"
                onClick={() => navigate("/Transaction-Details-2")}
              >
                BOOK THIS ORDER
              </button>
            </div>

            <div className="btn-box">
              <button autoFocus>BUY FOREX</button>
              <button>SELL FOREX</button>
              <button>MONEY TRANSFER</button>
              <button>FOREX CARD</button>
              <button>TRAVEL INS.</button>
            </div>

            <div className="out-btn-box">
              <div className="btn-img">
                <img src={img3} alt="" />
                <button className="bt-img">REQUEST CALLBACK</button>
              </div>

              <div className="btn-img">
                <img src={img4} alt="" />
                <button className="bt-img">SET A RATE ALERT</button>
              </div>

              <div className="btn-img">
                <img src={img5} alt="" />
                <button className="bt-img">BETTER RATE REQUEST</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyConvertor;
