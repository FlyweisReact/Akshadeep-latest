/** @format */

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import OtpModal from "./OtpModal";
import LoginModal from "./LoginModal";

function RegisterModal(props) {
  const [otpModalShow, setOtpModalShow] = useState(false);
  const [loginModalHandler, setLoginModalHandler] = useState(false);

  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      props.onHide();
      setOtpModalShow(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <OtpModal show={otpModalShow} onHide={() => setOtpModalShow(false)} />

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      
        <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
        <Modal.Body className="Login_Modal">
          
          <p className="head"> Register</p>
          <form onSubmit={LoginHandler}>
            <div className="Form_Group mb-3">
              <p>Full Name</p>
              <input
                type="text"
                placeholder="Enter your Full Name here"
                required
              />
            </div>

            <div className="Form_Group mb-3">
              <p>Mobile Number</p>
              <input type="text" placeholder="Enter Mobile Number" required />
            </div>
            <div className="Form_Group">
              <p>Email</p>
              <input type="email" placeholder="Enter Email Here" required />
            </div>

            <button type="submit" className="submit_btn">
              Continue
            </button>

            <p className="head"> OR</p>

            <div className="form-bot-cont">
              <div className="left-btn">
                <button>
                  <i className="fab fa-facebook-f "></i>
                  Facebook
                </button>
              </div>
              <div className="right-btn">
                <button>
                  <i className="fab fa-google-plus-g"></i>
                  Google
                </button>
              </div>
            </div>
          </form>
          <p
            className="bottom_p"
            onClick={() => {
              props.onHide();
              setLoginModalHandler(true);
            }}
          >
            Already has an account
            <span style={{ color: "#00296B" }}> Log IN</span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegisterModal;
