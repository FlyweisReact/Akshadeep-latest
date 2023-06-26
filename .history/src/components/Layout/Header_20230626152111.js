/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";
import DropBar from "./DropBar";
import logo from "../../Images/logo.png";
import { Dropdown, Space } from "antd";

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

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
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
              <i className="fa-solid fa-user"></i>
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

            <Dropdown menu={{ items }}>
              <Space>
                Hover me
                <DownOutlined />
              </Space>
            </Dropdown>
          </div>
        </div>
        <DropBar />
      </div>
    </>
  );
};

export default Header;
