/** @format */

import React from "react";
import Navbar from "./navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BottomCont from "./bottom_cont";
import Footer from "./footer";
import UpperForm from "./Component/Index/UpperForm";
import UpperSlider from "./Component/Index/UpperSlider";
import CurrencySlider from "./Component/Index/CurrencySlider";
import logo from "../Images/logo.png";
import IndexFirstMotion from "./Component/Index/IndexFirstMotion";
import IndexSecondMotion from "./Component/Index/IndexSecondMotion";
import IndexThirdMotion from "./Component/Index/IndexThirdMotion";
import CountTestimonial from "./Component/Index/Testimonial/CountTestimonial";
import TestimonialSlider from "./Component/Index/Testimonial/TestimonialSlider";

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

      <div className="Index_">
         <TestimonialSlider />
      </div>

      <BottomCont />
      <Footer />
    </>
  );
}

export default Main;
