/** @format */

import React, { useEffect, useState } from "react";
import img from "../Images/a-45.png";
import Footer from "../components/Layout/footer";
import { useNavigate } from "react-router-dom";
import Header from "../components/Layout/Header";
import logo from "../Images/logo.png";
import IndexFirstMotion from "../components/Component/Index/IndexFirstMotion";
import IndexSecondMotion from "../components/Component/Index/IndexSecondMotion";
import IndexThirdMotion from "../components/Component/Index/IndexThirdMotion";
import CountTestimonial from "../components/Component/Index/Testimonial/CountTestimonial";
import TestimonialSlider from "../components/Component/Index/Testimonial/TestimonialSlider";
import NewsTestimonia from "../components/Component/Index/Testimonial/NewsTestimonial";
import Fixed from "../components/Component/Fixed";
import axios from "axios";
import { Store } from "react-notifications-component";
import { get_loans } from "../Respository/Repo";

const EducationalLoans = () => {
  const navigate = useNavigate();
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    get_loans(setLoans);
  }, []);

  return (
    <>
      <Header />
      <Fixed />
      <div className="loan_three_comp">
        {loans?.map((ele, i) => (
          <div className="item" key={i._id}>
            <img src={img} alt="" />
            <h3>{ele?.para1}</h3>
            <div className="empty"></div>
            <p>{ele?.para2}</p>
            <div className="main4-cont-item-btn">
              <button onClick={() => navigate(`/student-loan/${ele._id}`)}>
                More Information
              </button>
              <button>Apply Now</button>
            </div>
          </div>
        ))}
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

export default EducationalLoans;
