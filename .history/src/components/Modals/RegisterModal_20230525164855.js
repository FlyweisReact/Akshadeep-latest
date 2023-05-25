/** @format */

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import OtpModal from "./OtpModal";

function RegisterModal(props) {
  const [otpModalShow, setOtpModalShow] = useState(false);

  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      props.onHide();
      setOtpModalShow(true);
    } catch (e) {
      console.log(e);
    }
  };

  function openLoginModal() {
    props.onHide();
    }

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
     
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegisterModal;
