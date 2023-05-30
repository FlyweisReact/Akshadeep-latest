/** @format */

import React from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import img3 from "../Images/button_after.png";
import img4 from "../Images/button_after -1.png";
import img5 from "../Images/button_after -2.png";
import img6 from "../Images/section.png";
import img7 from "../Images/h3_before.png";
import img8 from "../Images/image.png";
import img9 from "../Images/span.png";
import img10 from "../Images/a.png";
import img11 from "../Images/a-1.png";
import img12 from "../Images/a-2.png";
import img13 from "../Images/a-3.png";
import img14 from "../Images/a-4.png";
import img15 from "../Images/a-5.png";
import img16 from "../Images/a-6.png";
import Footer from "./footer";

const Exchange = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="exch-cont">
      <div className="upper_two_sec">
          <h2 className="exch-title">
            Live US Dollar Exchange Rate (USD/INR) Today <br /> in{" "}
            <spam>India</spam>
          </h2>
        <button >See Full Rate Card</button>

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
                onClick={() => navigate("/Transaction-Details")}
              >
                BOOK THIS ORDER
              </button>
            </div>


            <div className="btn-box">
              <button style={{ backgroundColor: "#FFD500" }}>BUY FOREX</button>
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




      <div className="body-mid-cont">
        <img className="body-mid-cont-img" src={img6} alt="" />
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
        <div className="faltu" style={{ margin: "2%" }}>
          <img src={img7} alt="" />
          <h3>Popular USD to INR Conversion Rate</h3>
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
            <a href="">More info</a>
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
            <a href="">More info</a>
          </div>
        </div>
      </div>
      <div className="exch-below-cont-5">
        <div className="extra-comp">
          <div className="exch-grid">
            <div className="exch-grid-item">
              <a href="">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="">Convert NZD to INR</a>
            </div>
          </div>
        </div>
      </div>
      <div className="exch-below-cont-6">
        <div className="exch-below-cont-6-1">
          <h4>US Dollars Rates In Other Cities</h4>
          <img src={img9} alt="" />
        </div>
        <div className="form-group-2">
          <select className="ip" id="timezone" name="timezone" required>
            <option value="">Select City</option>
            <option value="EST">Mumbai</option>
            <option value="CST">Delhi</option>
            <option value="PST">Ghaziabad</option>
            <option value="PST">Pune</option>
            <option value="PST">Chennai</option>
            <option value="PST">Banglore</option>
          </select>
        </div>
        <div className="exch-below-6-last">
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
          <img src={img13} alt="" />
          <img src={img14} alt="" />
          <img src={img15} alt="" />
          <img src={img16} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Exchange;
