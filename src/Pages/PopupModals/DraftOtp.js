import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { Store } from "react-notifications-component";
import { useNavigate } from "react-router-dom";

function DraftOtp(props) {
  const [otpModalShow, setOtpModalShow] = useState(false);
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://akashdeep12.vercel.app/user/loginProfile1";
    try {
      const res = await axios.post(url, { phoneNumber: mobile });
      Store.addNotification({
        title: "",
        message: res.data.otp,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      props.onHide();
      setOtpModalShow(true);
    } catch (err) {
      Store.addNotification({
        title: "",
        message: err.response.data.msg,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
        <Modal.Body className="Login_Modal">
          <form onSubmit={handleSubmit}>
            <div className="Form_Group">
              <p>Enter Otp</p>
              <input
                type="text"
                placeholder="Enter Otp"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="submit_btn"
              onClick={() => navigate("/Transaction-Details-6")}
            >
              Continue
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DraftOtp;
