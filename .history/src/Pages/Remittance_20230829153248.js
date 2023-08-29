/** @format */

import React, { useEffect } from "react";
import Fixed from "../components/Component/Fixed";
import CurrencySlider from "../components/Component/Index/CurrencySlider";
import IndexFirstMotion from "../components/Component/Index/IndexFirstMotion";
import IndexSecondMotion from "../components/Component/Index/IndexSecondMotion";
import IndexThirdMotion from "../components/Component/Index/IndexThirdMotion";
import CountTestimonial from "../components/Component/Index/Testimonial/CountTestimonial";
import TestimonialSlider from "../components/Component/Index/Testimonial/TestimonialSlider";
import UpperForm from "../components/Component/Remittance/UpperForm";
import UpperSlider from "../components/Component/Index/UpperSlider";
import NewsTestimonia from "../components/Component/Index/Testimonial/NewsTestimonial";
import Footer from "../components/Layout/footer";
import Header from "../components/Layout/Header";
import logo from "../Images/logo.png";
import img3 from "../Images/a-12.png";
import img4 from "../Images/a-11.png";
import img5 from "../Images/a-10.png";
import { Store } from "react-notifications-component";

const Remittance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Store.addNotification({
      title: "",
      message: "This Service is available in PAN INDIA",
      type: "info",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  }, []);

  return (
    <>
      <Header />

      <Fixed />
      <div className="upper-two-component">
        <div className="left-component">
          <UpperForm />
        </div>
        <div className="right-component">
          <UpperSlider />
        </div>
      </div>

      <div className="convertor_three_component" style={{ marginTop: "5%" }}>
        <div>
          <img src={img3} alt="" />
          <button>Request Call Back</button>
        </div>
        <div>
          <img src={img4} alt="" />
          <button>Set Rate Alert</button>
        </div>
        <div>
          <img src={img5} alt="" />
          <button>Request Better Rate</button>
        </div>
      </div>

      <div className="Index-currency_cont" id='about' >
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

      <div className="Index_News_testimonial" id='faq'>
        <p className="Head">Media Mentions</p>
        <NewsTestimonia />
      </div>
      <Footer />
    </>
  );
};

export default Remittance;
