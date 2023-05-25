/** @format */

import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
// import img from "../../Images/a-38.png";
// import img2 from "../../Images/a-39.png";
// import img3 from "../../Images/a-40.png";
// import img4 from "../../Images/a-41.png";
// import img5 from "../../Images/a-42.png";
// import img6 from "../../Images/a-43.png";
// import img7 from "../../Images/a-44.png";
import { useNavigate } from "react-router-dom";
import img from "../../Images/1.png";
import img2 from "../../Images/2.png";
import img3 from "../../Images/3.png";
import img4 from "../../Images/4.png";
import img5 from "../../Images/5.png";
import img6 from "../../Images/6.png";
import img7 from "../../Images/7.png";

const Sidebar = ({ show, setShow }) => {
  const navigate = useNavigate();
  return (
    <Offcanvas
      show={show}
      onHide={() => setShow(false)}
      className="Offcanvas-Menu"
    >
      <Offcanvas.Body>
        <i className="fa-solid fa-x" onClick={() => setShow(false)}></i>
        <div className="Menu-Items">
          <div onClick={() => navigate("/main3")}>
            <img src={img} alt="" />
            <p>Prepaid Travel Card</p>
          </div>
          <div onClick={() => navigate("/main2")}>
            <img src={img2} alt="" />
            <p>Foreign Demand Draft</p>
          </div>
          <div onClick={() => navigate("/main4")}>
            <img src={img3} alt="" />
            <p>Foreign Currency</p>
          </div>
          <div onClick={() => navigate("/main5")}>
            <img src={img4} alt="" />
            <p>Educational Loans</p>
          </div>
          <div onClick={() => navigate("/main6")}>
            <img src={img5} alt="" />
            <p>Remittance</p>
          </div>
          <div>
            <img src={img6} alt="" />
            <p>Travel Insurance</p>
          </div>
          <div onClick={() => navigate("/")}>
            <img src={img7} alt="" />
            <p>Non-resident Services</p>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
