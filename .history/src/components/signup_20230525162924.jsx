import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="popupe-container">
          <div className="popupe">
            <span className="close" onClick={props.onHide}>
              &times;
            </span>
            <h2 className="form-title">Register</h2>
            <form>
              <div class="form-groupe">
                <label for="name" className="label-inp">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name here" />
              </div>
              <div class="form-groupe">
                <label for="mobile" className="label-inp">Mobile Number</label>
                <input type="email" id="email" name="email" placeholder="Enter your mobile no here"/>
              </div>
              <div class="form-groupe">
                <label for="email" className="label-inp">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email here"/>
              </div>
              <button type="submit" className="btn-form-submit">Submit</button>
            </form>
            <h2 className="form-title">Or</h2>
            <div className="form-bot-cont">
              <div className="left-btn">
                  <button className="btn-2"> 
                  <i class="fab fa-facebook-f fc" ></i>
                  facebook</button>
              </div>
              <div className="right-btn">
                  <button className="btn-2">
                  <i class="fab fa-google-plus-g gl"></i>
                    Google</button>
              </div>
            </div>
            </div>
          </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
