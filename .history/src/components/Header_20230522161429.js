/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Logi

const Header = () => {
  return (
    <>
      <div className="navbar-1">
        <div className="nav-top">
          <div className="nav-left">
            <Link to="/">Logo</Link>
          </div>
          <div className="nav-right">
            <button onClick={() => setLoginSt(true)} className="btn1">
              Log In
            </button>
            <button onClick={() => setModalShow(true)} className="btn2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
