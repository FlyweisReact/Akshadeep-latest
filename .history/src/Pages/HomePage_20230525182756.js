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
         
        </div>
        <div className="footer_Div">
          <Footer />
        </div>
      </div>

  
      <Footer />
    </>
  );
};

export default HomePage;
