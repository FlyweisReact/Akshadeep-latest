/** @format */

import React from "react";
import Header from "../components/Layout/Header";
import img from "../Images/34.png";

const ThankYou = () => {
  return (
    <>
      <Header />
      <div className="ThankYou_Div">
        <div>
          <img src={img} alt="" />
          <p className="head">Thank you for your interest</p>
          <p>One of our insurace specialist will reach out to you shortly to provide you differently travel insurance plans  </p>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
