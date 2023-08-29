/** @format */

import React from "react";
import img from "../../Images/23.png";
import img1 from "../../Images/24.png";
import img2 from "../../Images/25 (1).png";
import img3 from "../../Images/25 (2).png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot-row">
        <div className="foot-col">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Careers</p>
        </div>

        <div className="foot-col">
          <h3>Services</h3>
          <p>Currency Exchange</p>
          <p>Send Money Abroad</p>
          <p>Wire Transfer</p>
          <p>Foreign Currency</p>
          <p>Prepaid Travel Card</p>
          <p>Foreign Demand Draft</p>
          <p>Travel insurance</p>
          
        </div>
        <div className="foot-col">
          <h3>Quick Links</h3>
          <p>FAQs</p>
          <p>Cancellation & Refund Policy</p>
          <p>Forex Rates</p>
          <p>Our Policies</p>
          <p>Terms of Use</p>
          <p>Site Map</p>
          <p>Offers</p>
        </div>
        <div className="foot-col">
          <h3>Insight</h3>
          <p>Blogs</p>
          <p>Press Release</p>
          <p>Foreign Currency</p>
          <p>Educational Loans</p>
          <p>Remmittance</p>
          <p>Travel Insurance</p>
          <p>Forex as a Service (Faas Solution)</p>
        </div>
        <div className="foot-col">
          <h3>Registered Office Address</h3>
          <p>Lorem Ipsum Pvt ltd.</p>
          <p>
            P-701 to P-705 lorem ipsum , 7th floor, 11th tower, panchsheel
            primerose, vatista , Gurugram, Hariyana
          </p>
        </div>
      </div>

      <div className="footer_bottom_Cont">
        <div className="Item_Div">
          <p className="head">Download Our App</p>
          <div className="subItem">
            <img src={img} alt="" />
            <img src={img1} alt="" />
          </div>
        </div>

        <div className="Item_Div">
          <p className="head">We Accept:</p>
          <div className="subItem">
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
        </div>

        <div className="Item_Div">
          <p className="head">Contact Us</p>
          <div className="subItem" style={{ gap: "10px" }}>
            <i className="fa-solid fa-phone"></i>
            <p>+91-9212219191</p>
          </div>
          <div className="subItem">
            <p>hello@Lorenipsum.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
