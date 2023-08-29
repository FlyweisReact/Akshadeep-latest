/** @format */

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import OtpModal from "./OtpModal";
import RegisterModal from "./RegisterModal";
import axios from "axios";
import { Store } from "react-notifications-component";
import { user_Login } from "../../Respository/Repo";

function LoginModal(props) {
  const [otpModalShow, setOtpModalShow] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [mobile, setMobile] = useState("");

  const payload = { phoneNumber: mobile };

  const LoginHandler = async (e) => {
    e.preventDefault();
    await user_Login(payload);
    props.onHide();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://akashdeep12.vercel.app/user/loginProfile1";
    try {
      const res = await axios.post(url, { phoneNumber: mobile });
      Store.addNotification({
        title: "",
        message: res.data.otp,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      props.onHide();
      setOtpModalShow(true);
    } catch (err) {
      Store.addNotification({
        title: "",
        message: err.response.data.msg,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
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
              <p>Mobile Number</p>
              <input
                type="text"
                placeholder="Enter Mobile No"
                onChange={(e) => setMobile(e.target.value)}
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
              setRegisterModal(true);
            }}
          >
            Didn’t have account?{" "}
            <span style={{ color: "#00296B" }}>Register</span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
