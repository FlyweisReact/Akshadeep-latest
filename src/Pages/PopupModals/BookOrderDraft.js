/** @format */

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { Store } from "react-notifications-component";
import DraftOtp from "./DraftOtp";

function BookOrderDraft(props) {
  const [otpModalShow, setOtpModalShow] = useState(false);
  const [mobile, setMobile] = useState("");


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
    <DraftOtp show={otpModalShow} onHide={()=>setOtpModalShow(false)} />
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
              <p>Mobile Number/ Email Id</p>
              <input
                type="text"
                placeholder="Enter Mobile No. / Email ID"
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit_btn" onClick={()=>setOtpModalShow(true)}>
              Continue
            </button>
          </form>
        
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookOrderDraft;

