import React from "react";
import Slider from "./slider";
import Navbar from "./navbar";
import BottomCont from "./bottom_cont";
import Footer from "./footer"

const Main3 = ()=>{
    return (
        <>
      <Navbar />
      <div className="main-cont">
        <div className="left-cont">
          <form className="form-1">
            <div className="form-cont">
                <h3>Foreign Demand Draft</h3>
              <div className="form-part-1">
                <div className="row-1">
                  <div className="col-1">
                    <label className="lab">Selected City</label>
                    <input type="text" />
                  </div>
                  <div className="col-2">
                    <label className="lab">Selected City</label>
                    <input type="text" />
                  </div>
                </div>
                <br />
                <div className="row-1 sp-row-1">
                    <label className="lab">Email</label>
                    <input type="text" placeholder="Enter your email" />
                </div>
                <br />
                <div className="row-1">
                            <div className="col-1">
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
                            <div className="col-1">
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
                <br />
                <div className="row-1 sp-row-1">
                    <select className="ip ip-1" id="timezone" name="timezone" required>
                        <option value="">Preferred Branch in India</option>
                        <option value="EST">Kolkata</option>
                        <option value="CST">Delhi</option>
                        <option value="PST">Bangalore</option>
                        <option value="PST">Chennai</option>
                        <option value="PST">Ranchi</option>
                        <option value="PST">Chandigarh</option>
                    </select>
                </div>
                <br />
                <br />
              </div>
              <button className="ord-btn">Apply Now</button>
            </div>
          </form>
        </div>
        <div className="right-cont">
          <Slider />
        </div>
      </div>
      <BottomCont />
      <Footer />
    </>
    )
}

export default Main3;