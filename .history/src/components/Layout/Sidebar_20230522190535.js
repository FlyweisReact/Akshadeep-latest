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
import img from '../'
i

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
          {/* <img src={img} alt="" onClick={() => navigate("/main3")} />
          <img src={img2} alt="" onClick={() => navigate("/main2")} />
          <img src={img3} alt="" onClick={() => navigate("/main4")} />
          <img src={img4} alt="" onClick={() => navigate("/main5")} />
          <img src={img5} alt="" onClick={() => navigate("/main6")} />
          <img src={img6} alt="" />
          <img src={img7} alt="" onClick={() => navigate("/")} /> */}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
