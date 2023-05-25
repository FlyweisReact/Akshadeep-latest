/** @format */

import React, { useState } from "react";
import SignUp from "./signup";
import LoginUp from "./login";
import { Link, useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [loginst, setLoginSt] = useState(false);
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="navbar-1">
        <div className="nav-top">
          <div className="nav-left">
            <Link to="/">Logo</Link>
          </div>
          <div className="nav-right">
            <button onClick={() => setLoginSt(true)}>Log In</button>
            <button onClick={() => setModalShow(true)}>Get Started</button>
          </div>
        </div>

        <div className="check-btn-11">
          <label for="check-1" className="check-btn-1">
            <i className="fas fa-bars " onClick={handleShow}></i>
          </label>
        </div>
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
            <div className="nav-bot-right">
              <div className="nav-bot-lst">
                <div className="nav-bot-item dropdown">
                  Service <i class="fas fa-caret-down"></i>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a href="#">Currency Exchange</a>
                      <ul className="dropdown-menu">
                        <li onClick={() => navigate("/exchange")}>
                          <a>Currency Exchange in Mumbai</a>
                        </li>
                        <li onClick={() => navigate("/exchange")}>
                          <a>Currency Exchange in Chennai</a>
                        </li>
                        <li onClick={() => navigate("/exchange")}>
                          <a>Currency Exchange in Kolkata</a>
                        </li>
                        <li onClick={() => navigate("/exchange")}>
                          <a>Currency Exchange in Hyderabad</a>
                        </li>
                        <li onClick={() => navigate("/exchange")}>
                          <a>Currency Exchange in Pune</a>
                        </li>
                        <li onClick={() => navigate("/exchange")}>
                          <a>More</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Send Money Abroad</a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">Send Money to USA</a>
                        </li>
                        <li>
                          <a href="#">Send Money to UK</a>
                        </li>
                        <li>
                          <a href="#">Send Money to Singapore</a>
                        </li>
                        <li>
                          <a href="#">Send Money to Australia</a>
                        </li>
                        <li>
                          <a href="#">Send Money to Canada</a>
                        </li>
                        <li>
                          <a href="#">Send Money to UAE</a>
                        </li>
                        <li>
                          <a href="#">More</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Tour & Activities</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">International Sim Card</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Trade Remittance</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Forex as a Service (Faas) Solution</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-bot-item dropdown">
                  Top Currencies <i class="fas fa-caret-down"></i>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a href="#">US Dollar</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Euro</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">British Pound</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Australian Dollar</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Saudi Riyal</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-bot-item dropdown">
                  Currency Convertor <i class="fas fa-caret-down"></i>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a href="#">USD to INR</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">USD to INR</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">USD to INR</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">USD to INR</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">USD to INR</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-bot-item">FAQ</div>
                <div
                  className="nav-bot-item"
                  onClick={() => navigate("/offers")}
                >
                  Offers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignUp show={modalShow} onHide={() => setModalShow(false)} />
      <LoginUp show={loginst} onHide={() => setLoginSt(false)} />
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
              <div className="nav-bot-item dropdown">
                Service <i class="fas fa-caret-down"></i>
                <ul className="dropdown-menu">
                  <li className="dropdown">
                    <a href="#">Currency Exchange</a>
                    <ul className="dropdown-menu">
                      <li onClick={() => navigate("/exchange")}>
                        <a>Currency Exchange in Mumbai</a>
                      </li>
                      <li onClick={() => navigate("/exchange")}>
                        <a>Currency Exchange in Chennai</a>
                      </li>
                      <li onClick={() => navigate("/exchange")}>
                        <a>Currency Exchange in Kolkata</a>
                      </li>
                      <li onClick={() => navigate("/exchange")}>
                        <a>Currency Exchange in Hyderabad</a>
                      </li>
                      <li onClick={() => navigate("/exchange")}>
                        <a>Currency Exchange in Pune</a>
                      </li>
                      <li onClick={() => navigate("/exchange")}>
                        <a>More</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Send Money Abroad</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Send Money to USA</a>
                      </li>
                      <li>
                        <a href="#">Send Money to UK</a>
                      </li>
                      <li>
                        <a href="#">Send Money to Singapore</a>
                      </li>
                      <li>
                        <a href="#">Send Money to Australia</a>
                      </li>
                      <li>
                        <a href="#">Send Money to Canada</a>
                      </li>
                      <li>
                        <a href="#">Send Money to UAE</a>
                      </li>
                      <li>
                        <a href="#">More</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Tour & Activities</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">International Sim Card</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">Trade Remittance</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">Forex as a Service (Faas) Solution</a>
                  </li>
                </ul>
              </div>
              <div className="nav-bot-item dropdown">
                Top Currencies <i class="fas fa-caret-down"></i>
                <ul className="dropdown-menu">
                  <li className="dropdown">
                    <a href="#">US Dollar</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">Euro</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">British Pound</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">Australian Dollar</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">Saudi Riyal</a>
                  </li>
                </ul>
              </div>
              <div className="nav-bot-item dropdown">
                Currency Convertor <i class="fas fa-caret-down"></i>
                <ul className="dropdown-menu">
                  <li className="dropdown">
                    <a href="#">USD to INR</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">USD to INR</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">USD to INR</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">USD to INR</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">USD to INR</a>
                  </li>
                </ul>
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
