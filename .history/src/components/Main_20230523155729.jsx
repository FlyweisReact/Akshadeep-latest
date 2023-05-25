/** @format */

import React from "react";
import Navbar from "./navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BottomCont from "./bottom_cont";
import Footer from "./footer";
import img from "../Images/a-7.png";
import img5 from "../Images/a-58.png";
import UpperForm from "./Component/Index/UpperForm";
import UpperSlider from "./Component/Index/UpperSlider";
import CurrencySlider from "./Component/Index/CurrencySlider";

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
        <div className="logo">
          Logo
        </div>
        

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
