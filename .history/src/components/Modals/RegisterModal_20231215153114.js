/** @format */

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import OtpModal from "./OtpModal";
import { user_Registration } from "../../Respository/Repo";
import validator from "validator";

function RegisterModal(props) {
  const [otpModalShow, setOtpModalShow] = useState(false);

  const [fullName, setFName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const payload = { fullName, phoneNumber, email };

  const user_signup = async (e) => {
    e.preventDefault();
    await user_Registration(payload, setOtpModalShow, props);
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    if(validator.isEmail())
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
          <form onSubmit={user_signup}>
            <div className="Form_Group mb-3">
              <p>Full Name</p>
              <input
                type="text"
                maxLength={30}
                placeholder="Enter your Full Name here"
                onChange={(e) => setFName(e.target.value)}
                required
              />
            </div>

            <div className="Form_Group mb-3">
              <p>Mobile Number</p>
              <input
                type="tel"
                pattern="[0-9]*"
                minLength="10"
                maxLength="15"
                placeholder="Enter Mobile Number"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="Form_Group">
              <p>Email</p>
              <input
                type="email"
                maxLength={50}
                placeholder="Enter Email Here"
                // onChange={(e) => setEmail(e.target.value)}
                onChange={handleEmailChange}
                required
              />
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
