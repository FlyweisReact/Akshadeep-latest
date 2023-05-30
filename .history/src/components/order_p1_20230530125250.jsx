/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Layout/Header";
import img from "../Images/30.png";

const OP1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <div className="transaction_steps">
        <img src={img} alt="" />
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
        <p className="done">Order Details</p>
        <p className="active">Transaction Detail</p>
        <p>Remitter Detail</p>
        <p> Beneficiaries Detail</p>
        <p>Total Charges Uploaded</p>
        <p>Documents Upload</p>

      </div>

      <div className="transaction_details">
        <p className="head">Customer Details</p>
        <p className="sub_head">Tax Document (PAN Card)</p>

          <div className="four_sec">
          <div className="first">
            <p></p>
          </div>

          </div>

      </div>
    </>
  );
};

export default OP1;
