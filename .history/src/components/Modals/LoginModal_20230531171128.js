/** @format */

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import OtpModal from "./OtpModal";
import RegisterModal from "./RegisterModal";


function LoginModal(props) {
  const [otpModalShow, setOtpModalShow] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

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
      <RegisterModal
        show={registerModal}
        onHide={() => setRegisterModal(false)}
      />

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
        <Modal.Body className="Login_Modal">
          <p className="head"> Login</p>
          <form onSubmit={LoginHandler}>
            <div className="Form_Group">
              <p>Mobile Number/ Email Id</p>
              <input
                type="text"
                placeholder="Enter Mobile No. / Email ID"
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
          <p className="bottom_p" onClick={() => {
            props.onHide()
            setRegisterModal(true)}} >
            Didn’t have account?{" "}
            <span style={{ color: "#00296B" }}>Register</span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
