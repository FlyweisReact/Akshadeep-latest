/** @format */

import React from "react";
import Navbar from "./navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BottomCont from "./bottom_cont";
import Footer from "./footer";
import img from "../Images/a-7.png";
import UpperForm from "./Component/Index/UpperForm";
import UpperSlider from "./Component/Index/UpperSlider";
import CurrencySlider from "./Component/Index/CurrencySlider";
import logo from '../Images/logo.png'
import IndexFirstMotion from "./Component/Index/IndexFirstMotion";
import IndexSecondMotion from "./Component/Index/IndexSecondMotion";

function Main() {
  return (
    <>
      <Navbar />

      <div className="upper-two-component">
        <div className="left-component">
          <UpperForm />
        </div>
        <div className="right-component">
          <UpperSlider />
        </div>
      </div>

      <div className="Index-currency_cont">
        <CurrencySlider />
      </div>

      <div className="Index_center_button">
      <i className="fa-solid fa-bars"></i>
        <p>See Full Rate Card</p>
      </div>  

      <div className="Index_center_Div">
      <img src={logo} alt='' className="logo" />

        <p>The Lorem ipsum Advantage</p>
        <hr />
      </div>


    <div className="Index_First_Motion">
    <IndexFirstMotion />
    </div>

    <div className="Index_Second_Motion">
    <IndexSecondMotion />
    </div>




      {/* <div className="main-3-cont">
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
      </div> */}
      <BottomCont />
      <Footer />
    </>
  );
}

export default Main;
