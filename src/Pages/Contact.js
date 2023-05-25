/** @format */

import React from "react";
import Footer from "../components/footer";
import Header from "../components/Layout/Header";
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Contact = () => {
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
                <LoadScript googleMapsApiKey="">
                  <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                  >
                    {locations.map((item) => {
                      return (
                        <Marker key={item.name} position={item.location} />
                      );
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
