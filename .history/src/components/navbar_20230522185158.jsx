/** @format */

import React, { useState } from "react";
import SignUp from "./signup";
import LoginUp from "./login";
import {  useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Header from "./Layout/Header";

const Navbar = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [loginst, setLoginSt] = useState(false);
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header />
      <div className="navbar-1">
        <div className="nav-bottom">
          <div className="nav-bot-cont">
            <div className="nav-bot-left">
              <div className="check-btn-1">
                <label for="check-1" className="check-btn-1">
                  <i
                    className="fas fa-bars "
                    onClick={() => navigate("/home")}
                  ></i>
                </label>
              </div>
            </div>
       
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} className="nav-side">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="nav-body-side">
          <nav className="nav-small">
            <div className="nav-bot-lst-sm">
              <div className="check-btn-11" style={{ marginBottom: "10%" }}>
                <label for="check-1" className="check-btn-1">
                  <i
                    className="fas fa-bars "
                    onClick={() => navigate("/home")}
                  ></i>
                </label>
              </div>
       
              <div className="nav-bot-item">FAQ</div>
              <div className="nav-bot-item" onClick={() => navigate("/offers")}>
                Offers
              </div>
            </div>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
