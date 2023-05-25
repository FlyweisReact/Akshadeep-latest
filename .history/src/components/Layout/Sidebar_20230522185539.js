import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import img from '../../Images/a-38.png'
import img2 from "../../Images/a-39.png";
import img3 from "../../Images/a-40.png";
import img4 from "../../Images/a-41.png";
import img5 from "../Images/a-42.png";
import img6 from "../Images/a-43.png";
import img7 from "../Images/a-44.png";

const Sidebar = ({ show , setShow }) => {
  return (
    <Offcanvas show={show} onHide={() => setShow(false)} className='Offcanvas-Menu'>
    <Offcanvas.Body>
    <i className="fa-solid fa-x" onClick={() => setShow(false)}></i>
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default Sidebar