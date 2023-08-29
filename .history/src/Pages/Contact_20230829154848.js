/** @format */

import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/footer";
import Header from "../components/Layout/Header";
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Contact = () => {
  const [phone, setPhone] = useState(null);
  const [enquiryType, setEnquiryType] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  const payload = { phone ,enquiryType , name , email , message }

  const submitHandler = (e) => {
    e.prev
  }

  const handleCaptchaChange = (value) => {
    console.log("CAPTCHA value:", value);
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
            <LoadScript googleMapsApiKey="">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
              >
                {locations.map((item) => {
                  return <Marker key={item.name} position={item.location} />;
                })}
              </GoogleMap>
            </LoadScript>
          </div>

          <div className="right_container">
            <p className="head">Enquiry Now</p>
            <form>
              <div className="two_container mb-4">
                <div>
                  <p>Name</p>
                  <input type={"text"} placeholder="Enter Name" />
                </div>
                <div>
                  <p>Email</p>
                  <input type={"text"} placeholder="Enter Email" />
                </div>
              </div>

              <div className="two_container mb-4 ">
                <div>
                  <p>Mobile Number </p>
                  <input type={"text"} placeholder="Enter Mobile Number" />
                </div>
                <div>
                  <p>Inquiry Type</p>
                  <select>
                    <option>Select Inquiry Type</option>
                  </select>
                </div>
              </div>

              <div className="two_container mb-4 ">
                <div style={{ width: "100%" }}>
                  <p>Message</p>
                  <input type={"text"} style={{ width: "100%" }} />
                </div>
              </div>

              <ReCAPTCHA
                sitekey="6LcSnTwmAAAAAAjWLbcxsO0Ufff8BQyup-GyIdok"
                onChange={handleCaptchaChange}
                className="mb-4"
              />

              <button>Submit</button>
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
