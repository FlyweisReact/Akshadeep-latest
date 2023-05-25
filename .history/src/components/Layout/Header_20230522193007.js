/** @format */

import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import SignUp from "../signup";
import LoginUp from "../login";
import "../../Style/Header.css";
import DropBar from "./DropBar";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  const [loginst, setLoginSt] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <>
      <SignUp show={modalShow} onHide={() => setModalShow(false)} />
      <LoginUp show={loginst} onHide={() => setLoginSt(false)} />

      <div className="" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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
