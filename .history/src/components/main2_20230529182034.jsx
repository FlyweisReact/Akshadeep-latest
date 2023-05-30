/** @format */

import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import img from "../Images/Vector 1.png";
import img2 from "../Images/i-1.png";
import img3 from "../Images/a-12.png";
import img4 from "../Images/a-11.png";
import img5 from "../Images/a-10.png";
import Header from "./Layout/Header";

const Main2 = () => {
  return (
    <>
      <div className="continer_Div">
        <div className="header_Div">
          <Header />
        </div>
      </div>
      <Header />
      <div className="currency_Container">
        <div className="Form_Container">
          <div className="two_btns">
            <button className="btn-fst">Buy Ipsom Card & Currency</button>
            <button className="btn-2nd">Sell Foreign Currency Notes</button>
          </div>

          <div className="form-part-2">
            <div className="row1">
              <div className="col1">
                <select className="ip" id="timezone" name="timezone" required>
                  <option>Select City</option>
                  <option value="EST">Germany</option>
                  <option value="CST">Brazil</option>
                  <option value="PST">USA</option>
                  <option value="PST">UK</option>
                  <option value="PST">France</option>
                  <option value="PST">Russia</option>
                </select>
              </div>
            </div>
            <div className="row1">
              <div className="col1">
                <label>Currency you have</label>
                <select className="ip" id="timezone" name="timezone" required>
                  <option value="">Indian Rupee</option>
                  <option value="EST">Germany</option>
                  <option value="CST">Brazil</option>
                  <option value="PST">USA</option>
                  <option value="PST">UK</option>
                  <option value="PST">France</option>
                  <option value="PST">Russia</option>
                </select>
              </div>
              <div className="col1">
                <label>Currency you want</label>
                <select className="ip" id="timezone" name="timezone" required>
                  <option value="">US Dollar</option>
                  <option value="EST">Germany</option>
                  <option value="CST">Brazil</option>
                  <option value="PST">USA</option>
                  <option value="PST">UK</option>
                  <option value="PST">France</option>
                  <option value="PST">Russia</option>
                </select>
              </div>
            </div>
            <div className="row1">
              <div className="col1">
                <input placeholder="Forex Card" type="text" />
              </div>
              <div className="col1">
                <input placeholder="Forex Amount" type="text" />
              </div>
            </div>
            <div className="row1">
              <div className="col1"></div>
              <div className="col1">
                <div className="col1-item">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <img src={img} alt="" />
                    <p>Rate=82.87</p>
                  </div>
                  <div>
                    <p className="div-a">Request Better Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row1">
              <div className="col1">
                <input placeholder="INR Amount" type="text" />
              </div>
              <div className="col1">
                <div>
                  <p className="div-a" style={{ color: "#FFD500" }}>
                    + AddProduct
                  </p>
                </div>
              </div>
            </div>
            <div className="row1">
              <div className="col1 col1-alt">
                <div className="col1-indiv">
                  <p>ZERO</p>
                </div>
                <p>Commission</p>
              </div>
            </div>
            <div className="row1">
              <div className="col1 col1-alt-2">
                <h6>Total Amount</h6>
                <div className="img-r-cont">
                  <img src={img2} alt="" />
                  <p>0.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="main2-bot-cont">
            <button>BOOK THIS ORDER</button>
          </div>
        </div>
      </div>

      <div className="convertor_three_component">
        <div>
          <img src={img3} alt="" />
          <button>Request Call Back</button>
        </div>
        <div>
          <img src={img4} alt="" />
          <button>Request Call Back</button>
        </div>
        <div>
          <img src={img5} alt="" />
          <button>Request Call Back</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Main2;
