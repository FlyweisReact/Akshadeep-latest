import React from 'react';
import Navbar from "./navbar";
import BottomCont from "./bottom_cont";
import Footer from "./footer";
import img from "../Images/Vector 1.png";
import img2 from "../Images/i-1.png";
import img3 from "../Images/a-12.png";
import img4 from "../Images/a-11.png";
import img5 from "../Images/a-10.png";
import img6 from "../Images/a-57.png";
import img7 from "../Images/a-58.png";

const Main2 = ()=>{
    return (
        <>
            <Navbar />
            <div className="currency_Container">
                <div className="main2-mid-form">

                <div className="main2-top-btns">
                        <div className="top-main2-btn">
                            <button className="btn-fst">Buy Ipsom Card & Currency</button>
                            <button className="btn-2nd">Sell Foreign Currency Notes</button>
                        </div>
                    </div>




                    <div className="form-part-2">
                        <div className="row1">
                            <div className="col1">
                                <select className="ip" id="timezone" name="timezone" required>
                                    <option value="">Select City</option>
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
                            <div className="col1">
                            </div>
                            <div className="col1">
                                <div className="col1-item">
                                    <div>
                                        <p><img src={img} /> Rate=82.87</p>
                                    </div>
                                    <div>
                                        <a href="#" className="div-a">Request Better Rate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row1">
                            <div className="col1">
                            <input placeholder="INR Amount" type="text" /> 
                            </div>
                            <div className="col1">
                                <a className="col1-add">+ <spam>AddProduct</spam></a>
                            </div>
                        </div>
                        <div className="row1">
                            <div className="col1 col1-alt">
                                <div className="col1-indiv"><p>ZERO</p></div>
                                <p>Commission</p>
                            </div>
                        </div>
                        <div className="row1">
                            <div className="col1 col1-alt-2">
                                <h6>Total Amount</h6>
                                <div className="img-r-cont">
                                    <img src={img2} />
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

export default Main2;