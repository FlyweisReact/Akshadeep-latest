/** @format */

import React, { useState } from "react";
import Header from "./Layout/Header";
import img from "../Images/30.png";

const OP1 = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      <Header />

      <div className="transaction_steps">
        <img
          src={img}
          alt=""
          onClick={() => setStep(1)}
          style={{ cursor: "pointer" }}
        />
        <div className="empty-succes"></div>
        <p className="active-step">2</p>
        <div className="empty"></div>
        <p className="step">3</p>
        <div className="empty"></div>
        <p className="step">4</p>
        <div className="empty"></div>
        <p className="step">5</p>
        <div className="empty"></div>
        <p className="step">6</p>
      </div>

      <div className="transaction_step_content">
        <p className="done" onClick={() => setStep(1)}>
          Order Details
        </p>
        <p className="active">Transaction Detail</p>
        <p>Remitter Detail</p>
        <p> Beneficiaries Detail</p>
        <p>Total Charges Uploaded</p>
        <p>Documents Upload</p>
      </div>

      {/* Step 1 */}
      {step === 1 ? (
        <div className="transaction_details">
          <p className="head">Customer Details</p>
          <p className="sub_head">Tax Document (PAN Card)</p>

          <div className="four_sec">
            <div className="first">
              <p>
                Pan Card <i className="fa-solid fa-exclamation"></i>
              </p>
              <input type="text" />
            </div>
            <div className="second">
              <p>Name Received from NSDL</p>
              <input type="text" />
            </div>
            <div className="third">
              <p>Pan Status</p>
              <input type="text" />
            </div>
            <div>
              <p>Linked with Aadhar</p>
            </div>
          </div>

          <button>Validate PAN</button>
        </div>
      ) : (
        ""
      )}




      <button
        className="transaction_center_btn"
        onClick={() => setStep(step + 1)}
      >
        Continue
      </button>
    </>
  );
};

export default OP1;
