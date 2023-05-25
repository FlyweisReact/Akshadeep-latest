/** @format */

import React from "react";
import Footer from "../components/footer";
import Header from "../components/Layout/Header";
import img from "../Images/27.png";

const Contact = () => {
  return (
    <>
      <div className="continer_Div">
        <div className="header_Div">
          <Header />
        </div>
        <div className="content_Div">
          <section className="Contact_Us_Section">
            <p className="Head">Contact Us</p>
            <p className="sub_Heading">
              Our team is here to help you, Don’t worry!
            </p>

            <div className="Two_Container">
              <div className="left_Container">
                <img src={img} alt="" />
              </div>

              <div className="right_container">
                <p className="head">Enquiry Now</p>

                <div className="two_container mb-5">
                  <div>
                    <p>Name</p>
                    <input type={'text'} placeholder='Enter Name' />
                  </div>
                  <div>
                    <p>Email</p>
                    <input type={'text'} placeholder='Enter Email' />
                  </div>
                </div>

                <div className="two_container ">
                  <div>
                    <p>Name</p>
                    <input type={'text'} placeholder='Enter Name' />
                  </div>
                  <div>
                    <p>Email</p>
                    <input type={'text'} placeholder='Enter Email' />
                  </div>
                </div>


              </div>
            </div>
          </section>
        </div>
        <div className="footer_Div">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
