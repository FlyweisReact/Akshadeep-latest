/** @format */

import Modal from "react-bootstrap/Modal";
import React, { useState} from "react";
import axios from "axios";
import { Store } from "react-notifications-component";

function OtpModal(props) {
  const [otp, setOtp] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const url = "https://akashdeep12.vercel.app/user/verifySignIn";
    try{
      const res = await axios.post(url, {otp});
      Store.addNotification({
        title: "",
        message: "Signed In successfully!",
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
      localStorage.setItem("Id" , res.data.data._id)
      props.onHide()
    }catch(err){
      console.log(err.message);
    }
  }

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
        <p className="sub_head">
          Enter OTP sent to your registered Mobile Number <br />
          or email
        </p>
        <form>
          <div className="Form_Group">
            <p>OTP</p>
            <input type="text" placeholder="Enter OTP Here" 
              onChange={(e)=>setOtp(e.target.value)}
              required
            />
          </div>
          <button type="button" className="submit_btn" >
            Log IN
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default OtpModal;
