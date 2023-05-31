/** @format */

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img3 from "../Images/a-12.png";
import img4 from "../Images/a-11.png";
import img5 from "../Images/a-10.png";
import Header from "./Layout/Header";
import logo from "../Images/logo.png";
import IndexFirstMotion from "./Component/Index/IndexFirstMotion";
import IndexSecondMotion from "./Component/Index/IndexSecondMotion";
import IndexThirdMotion from "./Component/Index/IndexThirdMotion";
import CountTestimonial from "./Component/Index/Testimonial/CountTestimonial";
import TestimonialSlider from "./Component/Index/Testimonial/TestimonialSlider";
import NewsTestimonia from "./Component/Index/Testimonial/NewsTestimonial";
import CurrencySlider from "./Component/Index/CurrencySlider";
import Fixed from "./Component/Fixed";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

const Main6 = () => {

  const navigate = useNavigate()

  return (
    <>

          <Header />
    
          <Fixed />
          <div className="travel_Container">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              interval={3000}
              transitionTime={1000}
              stopOnHover={true}
              showArrows={false}
              showIndicators={false}
            >
              <div className="carousel1"></div>
              <div className="carousel2"></div>
              <div className="carousel3"></div>
            </Carousel>

            <div className="main6-form-cont">
              <div className="mb-3">
                <p>Destination</p>
                <select>
                  <option>Select</option>
                </select>
              </div>
              <div className="mb-3">
                <p>AGE OF TRAVELLER(S)</p>
                <div className="two-sec_container">
                  <input type="text" />
                  <button>Add Member</button>
                </div>
              </div>
              <div className="mb-3">
                <p>TRIP START DATE</p>
                <div className="two-sec">
                  <input type="date" />
                  <input type="date" />
                </div>
              </div>

              <button className="latBtn">Continue</button>
            </div>
          </div>

          <div className="convertor_three_component">
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
     
          <Footer />
   

    </>
  );
};

export default Main6;
