/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUp from "../signup";
import LoginUp from "../login";
import "../../Style/Header.css";
import DropBar from "./DropBar";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  const [loginst, setLoginSt] = useState(false);

  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-box-shadow');
    } else {
      navbar.classList.remove('navbar-box-shadow');
    }
  });
  
  return (
    <>
      <SignUp show={modalShow} onHide={() => setModalShow(false)} />
      <LoginUp show={loginst} onHide={() => setLoginSt(false)} />

      <div className="Sticky-Header-Companent">
        <div className="Header">
          <div className="left-component">
            <Link to="/">Logo</Link>
          </div>
          <div className="right-component">
            <button onClick={() => setLoginSt(true)} className="btn1">
              Log In
            </button>
            <button onClick={() => setModalShow(true)} className="btn2">
              Get Started
            </button>
          </div>
        </div>
        <DropBar />
      </div>
    </>
  );
};

export default Header;