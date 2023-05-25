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
        <div className="popupe-container">
          <div className="popupe">
            <form>
              <div class="form-groupe">
                <label for="name" className="label-inp">
                  Mobile Number/ Email Id
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter mobile number/ email Id"
                />
              </div>
              <button type="submit" className="btn-form-submit">
                Submit
              </button>
            </form>
          </div>
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
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
