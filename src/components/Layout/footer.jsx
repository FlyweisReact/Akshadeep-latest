/** @format */

import React from "react";
import img from "../../Images/23.png";
import img1 from "../../Images/24.png";
import img2 from "../../Images/25 (1).png";
import img3 from "../../Images/25 (2).png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot-row">
        <div className="foot-col">
          <h3>Company</h3>
          <a href="#about">
            <p>About Us</p>
          </a>
          <Link to="/contact-us">
            <p>Contact Us</p>
          </Link>
          <a href="#faq">
            <p>FAQ</p>
          </a>
          <a href="#offer">
            <p>OFFER</p>
          </a>
        </div>

        <div className="foot-col">
          <h3>Services</h3>
          <Link to="/exchange">
            <p>Currency Exchange</p>
          </Link>

          <Link to="/Send_Money">
            <p>Send Money Abroad</p>
          </Link>

          <Link to="/">
            <p>Wire Transfer</p>
          </Link>

          <Link to="/Foreign-Currency">
            <p>Foreign Currency</p>
          </Link>

          <Link to="/Remittance">
            <p>Prepaid Travel Card</p>
          </Link>
        </div>

        <div className="foot-col">
          <h3>Insight</h3>

          <Link to="/Demand-Draft">
            <p>Foreign Demand Draft</p>
          </Link>

          <Link to="/travel">
            <p>Travel insurance</p>
          </Link>

          <Link to="/Educational-Loans">
            <p>Education Loan</p>
          </Link>

          <Link to="/">
            <p>Non Resident Repatriation</p>
          </Link>
          <Link to="/rate">
            <p>Full Rate Card</p>
          </Link>
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
