/** @format */

import Modal from "react-bootstrap/Modal";

function OtpModal(props) {
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
        <form>
          <div className="Form_Group">
            <p>OTP</p>
            <input type="text" placeholder="Enter OTP Here" />
          </div>
          <button type="button" className="submit_btn">
            Log IN
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default OtpModal;
