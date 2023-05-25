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
          <div>
            <p>Mobile Number/ Email Id</p>
            <input type="text" placeholder="Enter Mobile No. / Email ID" />
          </div>
          <button type="button">Submit</button>
        </form>

        <h2 className="form-title">Or</h2>
        <div className="form-bot-cont">
          <div className="left-btn">
            <button className="btn-2">
              <i class="fab fa-facebook-f fc"></i>
              facebook
            </button>
          </div>
          <div className="right-btn">
            <button className="btn-2">
              <i class="fab fa-google-plus-g gl"></i>
              Google
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
