import React from 'react';
import Slider from "./slider";
import Navbar from "./navbar";
import BottomCont from "./bottom_cont";
import Footer from "./footer"
import img3 from "../Images/a-12.png";
import img4 from "../Images/a-11.png";
import img5 from "../Images/a-10.png";
import img6 from "../Images/a-57.png";
import img7 from "../Images/a-58.png";


const Main5 = ()=>{
    return (
        <>
          <Navbar />
          <div className="main-cont">
        <div className="left-cont">
          <form className="form-1">
            <div className="form-cont">
                <h3>Foreign Demand Draft</h3>
              <div className="form-part-1">
              <div className="row-1 sp-row-1">
                    <label className="lab">Select the city you are Located in</label>
                    <select className="ip-2" id="timezone" name="timezone" required>
                        <option value=""></option>
                        <option value="EST">Germany</option>
                        <option value="CST">Brazil</option>
                        <option value="PST">USA</option>
                        <option value="PST">UK</option>
                        <option value="PST">France</option>
                        <option value="PST">Russia</option>
                    </select>
                </div>
                <div className="row-1 sp-row-1">
                    <label className="lab">Please select the option that best describe you</label>
                    <select className="ip-2" id="timezone" name="timezone" required>
                        <option value=""></option>
                        <option value="EST">Germany</option>
                        <option value="CST">Brazil</option>
                        <option value="PST">USA</option>
                        <option value="PST">UK</option>
                        <option value="PST">France</option>
                        <option value="PST">Russia</option>
                    </select>
                </div>
                <br />
                <div className="row-1">
                            <div className="col-1">
                                <input type="text" placeholder="input" />
                            </div>
                            <div className="col-1">
                                <input type="text" placeholder="input" />
                            </div>
                        </div>
                <br />
                <div className="row-1 sp-row-1">
                    <label className="lab">Monthly Import/ Export Volume</label>
                    <select className="ip-2" id="timezone" name="timezone" required>
                        <option value="">Select Volume</option>
                        <option value="EST">Germany</option>
                        <option value="CST">Brazil</option>
                        <option value="PST">USA</option>
                        <option value="PST">UK</option>
                        <option value="PST">France</option>
                        <option value="PST">Russia</option>
                    </select>
                </div>
                <br />
                <br />
              </div>
              <button className="ord-btn">Sign Up</button>
            </div>
          </form>
        </div>
        <div className="right-cont">
          <Slider />
        </div>
      </div>
      <div className="main-mid-cont">
                <img src={img6} alt="" />
            </div>
            <div className="main-mid-2-cont">
                <img src={img7} alt="" />
            </div>
      <div className="main2-cont-2">
            <div className="main2-cont-2-1">
                <img src={img3} />
                <button>Request Call Back</button>
            </div>
            <div className="main2-cont-2-1">
                <img src={img4} />
                <button>Request Call Back</button>
            </div>
            <div className="main2-cont-2-1">
                <img src={img5} />
                <button>Request Call Back</button>
            </div>
        </div>
      <BottomCont />
      <Footer />
        </>
    )
}

export default Main5;