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
   
    </>
  );
};

export default Navbar;
