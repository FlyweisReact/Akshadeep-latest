/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";
import DropBar from "./DropBar";
import logo from "../../Images/logo.png";
import { Dropdown, Menu } from "antd";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  const [loginst, setLoginSt] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const UserId = localStorage.getItem("Id");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function LogOut() {
    localStorage.clear()
    ore.addNotification({
      //   title: "",
      //   message: "This Service is only available in PAN INDIA",
      //   type: "info",
      //   insert: "top",
      //   container: "top-right",
      //   animationIn: ["animate__animated", "animate__fadeIn"],
      //   animationOut: ["animate__animated", "animate__fadeOut"],
      //   dismiss: {
      //     duration: 5000,
      //     onScreen: true,
      //   },
      // });
  }

  const menu = (
    <Menu>
      <Menu.Item key="0" className="Profile_Name">
        Hello, User!{" "}
      </Menu.Item>
      <Menu.Item key="1" className="Profile_Options">
        Profile{" "}
      </Menu.Item>
      <Menu.Item key="2" className="Profile_Options">Orders</Menu.Item>
      <Menu.Item key="4" className="Profile_Options_LogOut">
        Logout 
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <RegisterModal show={modalShow} onHide={() => setModalShow(false)} />
      <LoginModal show={loginst} onHide={() => setLoginSt(false)} />

      <div className={`Sticky-Header-Companent ${scrolled ? "scrolled" : ""}`}>
        <div className="Header">
          <div className="left-component">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="right-component">
            {UserId ? (
              <Dropdown overlay={menu}>
                <i className="fa-solid fa-user"></i>
              </Dropdown>
            ) : (
              <>
                <button onClick={() => setLoginSt(true)} className="btn1">
                  Log In
                </button>
                <button onClick={() => setModalShow(true)} className="btn2">
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
        <DropBar />
      </div>
    </>
  );
};

export default Header;
