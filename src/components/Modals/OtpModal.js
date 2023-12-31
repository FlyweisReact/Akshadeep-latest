/** @format */

import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { verify_otp } from "../../Respository/Repo";

function OtpModal(props) {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();

  const payload = { otp };

  const otp_verify = (e) => {
    e.preventDefault()
    dispatch(verify_otp(payload));
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
      <Modal.Body className="Login_Modal">
        <p className="head"> Login</p>
        <p className="sub_head">
          Enter OTP sent to your registered Mobile Number <br />
          or email
        </p>
        <form onSubmit={otp_verify}>
          <div className="Form_Group">
            <p>OTP</p>
            <input
              type="text"
              placeholder="Enter OTP Here"
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit_btn">
            Verify
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default OtpModal;
