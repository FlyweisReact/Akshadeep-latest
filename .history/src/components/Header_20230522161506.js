/** @format */

import React , {useState} from "react";
import { Link } from "react-router-dom";
import SignUp from "./signup";
import LoginUp from "./login";

const Header = () => {
    const [modalShow, setModalShow] = useState(false);
    const [loginst, setLoginSt] = useState(false);
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
