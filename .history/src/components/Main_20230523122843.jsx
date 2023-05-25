import React from "react";
import Navbar from "./navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "./slider";
import BottomCont from "./bottom_cont";
import Footer from "./footer"
import img from "../Images/a-7.png";
import img4 from "../Images/a-57.png";
import img5 from "../Images/a-58.png";

function Main() {
  return (
    <>
      <Navbar />
      <
      
      <div className="main-cont">
        <div className="left-cont">
          <div class="button-container">
            <button className="button">Button 1</button>
            <button className="button">Button 2</button>
            <button className="button">Button 3</button>
          </div>
          <form className="form-1">
            <div className="form-cont">
              <div className="form-part-1">
                <div className="row-1">
                <div className="col-1">
                  <label>Select City</label>
                  <select className="ip" id="timezone" name="timezone" required>
                    <option value=""></option>
                    <option value="EST">Germany</option>
                    <option value="CST">Brazil</option>
                    <option value="PST">USA</option>
                    <option value="PST">UK</option>
                    <option value="PST">France</option>
                    <option value="PST">Russia</option>
                  </select>
                  </div>
                  <div className="col-2">
                    <label>Select City</label>
                  <select className="ip" id="timezone" name="timezone" required>
                    <option value=""></option>
                    <option value="EST">Bangalore</option>
                    <option value="CST">Delhi</option>
                    <option value="PST">Chennai</option>
                    <option value="PST">Mumbai</option>
                    <option value="PST">Kolkata</option>
                    <option value="PST">Russia</option>
                  </select>
                  </div>
                </div>
                <br />
                <div className="row-1">
                  <label className="lab" style={{paddingLeft:"10px"}}>Rate 82.0</label>
                </div>
                <br />
                <div className="row-1">
                  <div className="col-1">
                    <label className="lab">Enter Forex Amount</label>
                    <input type="text" />
                  </div>
                  <div className="col-2">
                    <label className="lab">Enter INR Amount</label>
                    <input type="text" />
                  </div>
                </div>
                <br />
                <div className="row-1">
                  <div className="col-1">
                    <small className="small-txt">Zero Commision</small>
                  </div>
                  <div className="col-2">
                    <small className="small-txt-2">
                      + <spam>Add Product</spam>
                    </small>
                  </div>
                </div>
                <br />
                <div className="row-1">
                  <label className="lab">Total</label>
                </div>
                <div className="row-1">
                  <label className="lab">0.00</label>
                </div>
              </div>
              <button className="ord-btn">Book this order</button>
            </div>
          </form>
        </div>
        <div className="right-cont">
          <Slider />
        </div>
      </div>



      <div className="main-mid-cont">
        <img src={img4} alt="" />
      </div>
      <div className="main-mid-2-cont">
        <img src={img5} alt="" />
      </div>
      <div className="main-2-cont">
        <div className="main-2-left">
          <img src={img} alt="" />
        </div>
        <div className="main-2-right">
          <h2>
            Stay top on your <spam className="sp">Forex Exchange</spam>
          </h2>
          <p>Check your forex rates and learn way to use them</p>
          <div className="main-2-r-btn">
            <button className="main-2l-btn">Learn More</button>
            <button className="main-2r-btn">Learn More</button>
          </div>
        </div>
      </div>
      <div className="main-3-cont">
        <div className="main-3-left">
          <h2>
            Stay top on your <spam className="sp">Forex Exchange</spam>
          </h2>
          <p>Check your forex rates and learn way to use them</p>
          <div className="main-2-r-btn">
            <button className="main-2l-btn">Learn More</button>
            <button className="main-2r-btn">Learn More</button>
          </div>
        </div>
        <div className="main-3-right">
          <img src={img} alt="" />
        </div>
      </div>
      <BottomCont />
      <Footer />
    </>
  );
}

export default Main;
