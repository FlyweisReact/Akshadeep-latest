/** @format */

import Modal from "react-bootstrap/Modal";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { verify_otp } from "../../Respository/Repo";

function OtpModal(props) {
  // const [otp, setOtp] = useState("");

  const numInputs = 4;
  const [otp, setOtp] = useState(new Array(numInputs).fill(""));
  const inputRefs = useRef(
    new Array(numInputs).fill(null).map(() => React.createRef())
  );

  const handleInputChange = (index, value) => {
    if (isNaN(value)) {
      return;
    }

    const newOtp = otp.map((digit, i) => (i === index ? value : digit));
    const otpString = newOtp.join("");
    setOtp(otpString);
    if (value !== "" && index < numInputs - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleInputKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].current.focus();
    }
  };

  // --
  const dispatch = useDispatch();

  const payload = { otp };

  const otp_verify = (e) => {
    e.preventDefault();
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

          <div>
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleInputKeyDown(index, e)}
                ref={inputRefs.current[index]}
              />
            ))}
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