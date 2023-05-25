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
          <button type="button" className="submit_btn">Continue</button>

          <p className="head"> OR</p>


        <div className="form-bot-cont">
          <div className="left-btn">
            <button >
              <i class="fab fa-facebook-f fc"></i>
              facebook
            </button>
          </div>
          <div className="right-btn">
            <button >
              <i class="fab fa-google-plus-g gl"></i>
              Google
            </button>
          </div>
        </div>


        </form>

       
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
