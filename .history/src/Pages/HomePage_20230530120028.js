/** @format */

import React from "react";
import Fixed from "../components/Component/Fixed";
import CurrencySlider from "../components/Component/Index/CurrencySlider";
import IndexFirstMotion from "../components/Component/Index/IndexFirstMotion";
import IndexSecondMotion from "../components/Component/Index/IndexSecondMotion";
import IndexThirdMotion from "../components/Component/Index/IndexThirdMotion";
import CountTestimonial from "../components/Component/Index/Testimonial/CountTestimonial";
import TestimonialSlider from "../components/Component/Index/Testimonial/TestimonialSlider";
import UpperForm from "../components/Component/Index/UpperForm";
import UpperSlider from "../components/Component/Index/UpperSlider";
import Footer from "../components/footer";
import Header from "../components/Layout/Header";
import logo from "../Images/logo.png";
import NewsTestimonia from "../components/Component/Index/Testimonial/NewsTestimonial";

const HomePage = () => {
  return (
    <>
      <div className="continer_Div">
        <div className="header_Div">
          <Header />
        </div>
        <div className="content_Div">
          <Fixed />
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

          <div className="Index_testimonial">
            <p className="Head">Testimonials</p>
            <TestimonialSlider />
          </div>

          <div className="Index_News_testimonial">
            <p className="Head">Media Mentions</p>
            <NewsTestimonia />
          </div>
        </div>

        <div className="footer_Div">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
