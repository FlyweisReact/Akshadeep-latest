/** @format */

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import OtpModal from "./OtpModal";
import RegisterModal from "./RegisterModal";
import axios from "axios";


function BookOrderModal(props) {
  const [otpModalShow, setOtpModalShow] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const [mobile, setMobile] = useState("");

  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      props.onHide();
      setOtpModalShow(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const url  ="https://akashdeep12.vercel.app/user/loginProfile1";
    try{
      const res = await axios.post(url, {phoneNumber: mobile});
      console.log(res?.data);
      alert(res?.data?.otp);
      setOtpModalShow(true);
    }catch(err){
      console.log(err.message);
    }
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
          <p className="head"> Login</p>


          <form onSubmit={LoginHandler}>
            <div className="Form_Group">
              <p>Mobile Number/ Email Id</p>
              <input
                type="text"
                placeholder="Enter Mobile No. / Email ID"
                onChange = {(e)=>setMobile(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit_btn" onClick={handleSubmit}>
              Continue
            </button>
          </form>
          <p
            className="bottom_p"
            onClick={() => {
              props.onHide();
              setRegisterModal(true);
            }}
          >
            Didn’t have account?{" "}
            <span style={{ color: "#00296B" }}>Register</span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookOrderModal;
