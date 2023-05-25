import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';

const Sidebar = ({ show , setShow }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} className='Offcanvas-Menu'>
    <Offcanvas.Body>
    <i className="fa-solid fa-x" onClick={() => setShow(false)}></i>
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default Sidebar