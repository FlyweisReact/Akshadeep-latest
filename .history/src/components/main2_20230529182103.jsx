/** @format */

import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import img from "../Images/Vector 1.png";
import img2 from "../Images/i-1.png";
import img3 from "../Images/a-12.png";
import img4 from "../Images/a-11.png";
import img5 from "../Images/a-10.png";
import Header from "./Layout/Header";

const Main2 = () => {
  return (
    <>
      <div className="continer_Div">
      {/* Navbar */}
        <div className="header_Div">
          <Header />
        </div>

            {/* Content */}
            <div className="content_Div">

            </div>
        
      </div>
   

      <Footer />
    </>
  );
};

export default Main2;
