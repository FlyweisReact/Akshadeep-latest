/** @format */

import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/footer";
import img from "../Images/Vector 1.png";
import img2 from "../Images/i-1.png";
import Header from "../components/Layout/Header";
import CurrencySlider from "../components/Component/Index/CurrencySlider";
import logo from "../Images/logo.png";
import IndexFirstMotion from "../components/Component/Index/IndexFirstMotion";
import IndexSecondMotion from "../components/Component/Index/IndexSecondMotion";
import IndexThirdMotion from "../components/Component/Index/IndexThirdMotion";
import CountTestimonial from "../components/Component/Index/Testimonial/CountTestimonial";
import TestimonialSlider from "../components/Component/Index/Testimonial/TestimonialSlider";
import NewsTestimonia from "../components/Component/Index/Testimonial/NewsTestimonial";
import Fixed from "../components/Component/Fixed";

const DemandDraft = () => {
 


  return (
    <>
      <Header />
      <Fixed />
      
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
                  {citys?.map((ele, i) => (
                    <option value={ele?.selectcity}>{ele?.selectcity}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row1">
              <div className="col1">
                <label>Currency you have</label>
                <select
                  className="ip"
                  id="timezone"
                  onChange={(e) => setFromCurr(e.target.value)}
                  name="timezone"
                  required
                >
                  <option value="">Select</option>
                  {currencyt?.map((ele, i) => (
                    <option value={ele?.addcurrency}>{ele?.addcurrency}</option>
                  ))}
                </select>
              </div>
              <div className="col1">
                <label>Currency you want</label>
                <select
                  className="ip"
                  id="timezone"
                  name="timezone"
                  onChange={(e) => setToCurr(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  {currencyt?.map((ele, i) => (
                    <option value={ele?.addcurrency}>{ele?.addcurrency}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row1">
              <div className="col1">
                <input placeholder="Demand Draft" type="text" />
              </div>
              <div className="col1">
                <input
                  placeholder="Entered  Amount"
                  type="text"
                  onChange={(e) => handleConversion(e.target.value)}
                />
              </div>
            </div>

            <div className="row1">
              <div className="col1">
                <label>Converted Amount</label>
                <input placeholder={convertedAmt} type="text" />
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
                  <p>{convertedAmt}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="main2-bot-cont">
            <button>BOOK THIS ORDER</button>
          </div>
        </div>
      </div>

      <div className="Index-currency_cont">
        <CurrencySlider />
      </div>

      <div className="Index_center_button" onClick={() => navigate("/rate")}>
        <i className="fa-solid fa-bars"></i>
        <p>See Full Rate Card</p>
      </div>

      <div className="Index_center_Div">
        <img src={logo} alt="" className="logo" />

        <p>The Lorem ipsum Advantage</p>
        <hr />
      </div>

      <div className="Index_First_Motion">
        <IndexFirstMotion />
      </div>

      <div className="Index_Second_Motion">
        <IndexSecondMotion />
      </div>

      <div className="Index_First_Motion">
        <IndexThirdMotion />
      </div>

      <div>
        <CountTestimonial />
      </div>

      <div className="Index_testimonial">
        <p className="Head">Testimonials</p>
        <TestimonialSlider />
      </div>

      <div className="Index_News_testimonial">
        <p className="Head">Media Mentions</p>
        <NewsTestimonia />
      </div>

      <Footer />
    </>
  );
};

export default DemandDraft;
