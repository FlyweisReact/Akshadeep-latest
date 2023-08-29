/** @format */

import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import img from "../../Images/1.png";
import img2 from "../../Images/2.png";
import img3 from "../../Images/3.png";
import img4 from "../../Images/4.png";
import img5 from "../../Images/5.png";
import img6 from "../../Images/6.png";
import img7 from "../../Images/7.png";
import { Link } from "react-router-dom";

const Sidebar = ({ show, setShow }) => {
  return (
    <Offcanvas
      show={show}
      onHide={() => setShow(false)}
      // className="Offcanvas-Menu"
    >
      <Offcanvas.Body>
        <i className="fa-solid fa-x" onClick={() => setShow(false)}></i>
        <div className="Menu-Items">
          <div>
            <Link to="/">
              <img src={img7} alt="" />
              <p>Wire Transfer</p>
            </Link>
          </div>
          <div>
            <Link to="/Foreign-Currency">
              <img src={img} alt="" />
              <p>Foreign Currency</p>
            </Link>
          </div>
          <div>
            <Link to="/Remittance">
              <img src={img2} alt="" />
              <p>Prepaid Travel Card</p>
            </Link>
          </div>
          <div>
            <Link to="/Demand-Draft">
              <img src={img3} alt="" />
              <p>Foreign Demand draft</p>
            </Link>
          </div>
          <div>
            <Link to="/travel">
              <img src={img4} alt="" />
              <p>Travel insurance</p>
            </Link>
          </div>
          <div>
            <Link to="/Educational-Loans">
              <img src={img5} alt="" />
              <p>Education Loan</p>
            </Link>
          </div>
          <div>
            <Link to="/">
              <img src={img6} alt="" />
              <p>Non Resident  Repatriation</p>
            </Link>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
