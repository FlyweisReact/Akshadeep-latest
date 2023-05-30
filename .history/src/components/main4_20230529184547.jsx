/** @format */

import React from "react";
import img from "../Images/a-45.png";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import Header from "./Layout/Header";
import CurrencySlider from "./Component/Index/CurrencySlider";
import logo from "../Images/logo.png";
import IndexFirstMotion from "./Component/Index/IndexFirstMotion";
import IndexSecondMotion from "./Component/Index/IndexSecondMotion";
import IndexThirdMotion from "./Component/Index/IndexThirdMotion";
import CountTestimonial from "./Component/Index/Testimonial/CountTestimonial";
import TestimonialSlider from "./Component/Index/Testimonial/TestimonialSlider";
import  NewsTestimonia from '../components/Component/Index/Testimonial/NewsTestimonial'
import Fixed from "./Component/Fixed";

const Main4 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="continer_Div">
        <div className="header_Div">
          <Header />
        </div>

        <div className="content_Div">
        <Fixed />
        <div className="loan_three_comp">
          <div className="item">
            <img src={img} alt="" />
            <h3>Student Loan Scheme</h3>
            <div className="empty"></div>
            <p>Lorem Ipsum Student Loan Scheme</p>
            <div className="main4-cont-item-btn">
              <button onClick={() => navigate("/student-loan")}>Left</button>
              <button>Right</button>
            </div>
          </div>
          <div className="item">
            <img src={img} alt="" />
            <h3>Student Loan Scheme</h3>
            <div className="empty"></div>
            <p>Lorem Ipsum Student Loan Scheme</p>
            <div className="main4-cont-item-btn">
              <button onClick={() => navigate("/student-loan")}>Left</button>
              <button>Right</button>
            </div>
          </div>
          <div className="item">
            <img src={img} alt="" />
            <h3>Student Loan Scheme</h3>
            <div className="empty"></div>
            <p>Lorem Ipsum Student Loan Scheme</p>
            <div className="main4-cont-item-btn">
              <button onClick={() => navigate("/student-loan")}>Left</button>
              <button>Right</button>
            </div>
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

        {/* Footer */}
        <div className="footer_Div">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main4;
