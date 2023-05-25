/** @format */

import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
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
            <p>Mobile Number/ Email Id</p>
            <input type="text" placeholder="Enter Mobile No. / Email ID" />
          </div>
          <button type="button" className="submit_btn">
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

          <p className="bottom_p">Didn’t have account? Register</p>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
