/** @format */

import React from "react";
import IndexFirstMotion from "../components/Component/Index/IndexFirstMotion";
import Footer from "../components/footer";
import Header from "../components/Layout/Header";

const Contact = () => {
  return (
    <>
      <div className="continer_Div">
        <div className="header_Div">
          <Header />
        </div>
        <div className="content_Div">
          <IndexFirstMotion />
        </div>
        <div className="footer_Div">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
