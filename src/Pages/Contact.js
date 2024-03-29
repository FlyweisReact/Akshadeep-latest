/** @format */

import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/footer";
import Header from "../components/Layout/Header";
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { enquiry_form } from "../Respository/Repo";
import { Alert } from "react-bootstrap";

const Contact = () => {
  const [phone, setPhone] = useState(null);
  const [enquiryType, setEnquiryType] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [captchValue, setCaptchaValue] = useState(null);
  const [captchErr, setCaptchErr] = useState(false);

  const payload = { phone, enquiryType, name, email, message };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (captchValue) {
      await enquiry_form(payload);
      setCaptchErr(false);
      setPhone(null);
      setEnquiryType(null);
      setName(null);
      setEmail(null);
      setMessage(null);
    } else {
      setCaptchErr(true);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const mapStyles = {
    height: "600px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 37.7748,
        lng: -122.4193,
      },
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="Contact_Us_Section">
        <p className="Head">Contact Us</p>
        <p className="sub_Heading">
          Our team is here to help you, Don’t worry!
        </p>

        <div className="Two_Container">
          <div className="left_Container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3153.6457317893587!2d-122.42197492353276!3d37.774904212151604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sin!4v1698128908366!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              style={{ width: "100%", height: "100%" }}
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="right_container">
            <p className="head">Enquiry Now</p>
            {captchErr ? <Alert>Select All Fields and Captcha to !</Alert> : ""}
            <form onSubmit={submitHandler}>
              <div className="two_container mb-4">
                <div>
                  <p>Name</p>
                  <input
                    type={"text"}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <p>Email</p>
                  <input
                    type={"text"}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="two_container mb-4 ">
                <div>
                  <p>Mobile Number </p>
                  <input
                    type={"tel"}
                    minLength={8}
                    maxLength={12}
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <p>Inquiry Type</p>
                  <input
                    type="text"
                    required
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                  />
                </div>
              </div>

              <div className="two_container mb-4 ">
                <div style={{ width: "100%" }}>
                  <p>Message</p>
                  <input
                    type={"text"}
                    style={{ width: "100%" }}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>

              <ReCAPTCHA
                sitekey="6LcSnTwmAAAAAAjWLbcxsO0Ufff8BQyup-GyIdok"
                onChange={handleCaptchaChange}
                className="mb-4"
              />

              <button type="submit"> Submit</button>
            </form>

            <div className="Info_Container">
              <p className="head">loren ipsum Pvt Ltd</p>
              <div className="two_cont">
                <i className="fa-solid fa-house"></i>
                <p>
                  P-701 to P-705, 7th Floor, Tower C, JMD Megapolis <br /> ,
                  Sohna Road, Sector-48, Gurgaon, Haryana 122018
                </p>
              </div>
              <div className="two_cont">
                <i className="fa-solid fa-phone"></i>
                <p>9212219191</p>
              </div>
              <div className="two_cont">
                <i className="fa-solid fa-envelope"></i>
                <p>Hello@Lorenipsum.Com</p>
              </div>
              <div className="two_cont">
                <i className="fa-solid fa-clock"></i>
                <p>Monday to Saturday 9:30 AM to 6:30 PM</p>
              </div>
              <div className="two_cont">
                <p style={{ color: "#267AA4" }}>Connect with Us</p>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
