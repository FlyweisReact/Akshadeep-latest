/** @format */

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import OtpModal from "./OtpModal";
import RegisterModal from "./RegisterModal";

function LoginModal(props) {
  const [otpModalShow, setOtpModalShow] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [ show , setShow  ] = useState(false)


  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      props.onHide();
      setOtpModalShow(true);
    } catch (e) {
      console.log(e);
    }
  };

  function openRegisterModal() {
    props.onHide();
    setRegisterModal(true);
  }

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

        {
          show ? <>

          </>:<>

          </>
        }
        
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
