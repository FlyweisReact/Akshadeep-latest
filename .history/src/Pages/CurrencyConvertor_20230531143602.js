/** @format */

import React from "react";
import Header from "../components/Layout/Header";
import img from "../Images/i.png";
import img1 from "../Images/32.png";
import img2 from "../Images/33.png";
import img7 from "../Images/h3_before.png";
import img8 from "../Images/image.png";
import Footer from "../components/footer";

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
          There are multiple ways to convert USD to INR in India. The
          traditional approach of doing so involved going to banks. You stand in
          the queue and wait for your turn. This was not only time consuming but
          pretty frustrating and even after all the effort, you end up paying a
          high cost. The second way was to search for a money changer where the
          first check is whether they have the desired USD or not.
        </p>
        <p className="desc">
          The smarter, faster and most economical way which is now being used by
          millions is using the online forex marketplace Loren ipsum. We only
          deal with RBI authorized money changers, and hence you can trust us
          completely. Be smart to book the live rates from the comfort of your
          home with Loren ipsum and get more money for your USD exchange.
        </p>
      </div>

      <div className="exch-below-cont">
        <div className="faltu">
          <img src={img7} alt="" />
          <h3>USD to INR chart/ Historical USD to INR Rates</h3>
        </div>


        <div className="exch-below-cont-1">
          <div className="exch-below-cont-1-left">
            <h4>US Dollar IBR Rate</h4>
          </div>
          <div className="exch-below-cont-1-right">
            <p>
              1 USD = 82.84 INR Interbank/ mid-market Rate at: 17-02-2023 16:42:
              17
            </p>
          </div>
        </div>

        <div className="exch-box">
          <div className="exch-box-cont">
            <div className="ii">30 Days</div>
            <div className="ia">7 days</div>
            <div className="ia">Today</div>
          </div>
          <img src={img8} alt="" style={{ width: "100%" }} />
        </div>
                        

     
        <div className="exch-below-cont-2">
          <div className="exch-below-cont-2-left">
            <table>
              <tr>
                <th>US Dollar(USD)</th>
                <th>Indian Rupee(INR)</th>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
            </table>
          </div>
          <div className="exch-below-cont-2-right">
            <table>
              <tr>
                <th>US Dollar(USD)</th>
                <th>Indian Rupee(INR)</th>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="exch-below-cont-3">
        <div>
          <h4>1 US Dollar To Indian Rupee Stats</h4>
          <table>
            <tr>
              <th></th>
              <th>Last 30 Days</th>
              <th>Last 90 Days</th>
            </tr>
            <tr>
              <td>High</td>
              <td>82.25</td>
              <td>82.925</td>
            </tr>
            <tr>
              <td>High</td>
              <td>82.25</td>
              <td>82.925</td>
            </tr>
            <tr>
              <td>High</td>
              <td>82.25</td>
              <td>82.925</td>
            </tr>
            <tr>
              <td>High</td>
              <td>82.25</td>
              <td>82.925</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="exch-below-cont-5">
        <div className="extra-comp">
          <div className="exch-grid">
            <div className="exch-grid-item">
              <a href="/">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="/">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="/">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="/">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="/">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="/">Convert NZD to INR</a>
            </div>
          </div>
        </div>
      </div>

      <div className="exch-below-cont-4">
        <h3>Currency Information</h3>
        <div className="exch-below-cont-4-cont">
          <div className="exch-below-cont-4-l">
            <div className="faltu">
              <img src={img7} alt="" />
              <h3>USD-US Dollar</h3>
            </div>
            <p>
              Lorem Ipsum is a dummy text showing the place for some real text
              check below to get more details and other facts about the
              currency.
            </p>
            <a href="/">More info</a>
          </div>
          <div className="exch-below-cont-4-r">
            <div className="faltu">
              <img src={img7} alt="" />
              <h3>USD-US Dollar</h3>
            </div>
            <p>
              Lorem Ipsum is a dummy text showing the place for some real text
              check below to get more details and other facts about the
              currency.
            </p>
            <a href="/">More info</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CurrencyConvertor;
