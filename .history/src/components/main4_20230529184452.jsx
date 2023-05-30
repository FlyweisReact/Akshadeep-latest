/** @format */

import React from "react";
import img from "../Images/a-45.png";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import Header from "./Layout/Header";

const Main4 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="continer_Div">
        <div className="header_Div">
          <Header />
        </div>

        <div className="content_Div">

        <div className="loan_three_comp">
          <div className="item">
            <img src={img} alt="" />
            <h3>Student Loan Scheme</h3>
            <div className="empty"></div>
            <p>Lorem Ipsum Student Loan Scheme</p>
            <div className="main4-cont-item-btn">
              <button onClick={() => navigate("/student-loan")}>Left</button>
              <button>Right</button>
            </div>
          </div>
          <div className="item">
            <img src={img} alt="" />
            <h3>Student Loan Scheme</h3>
            <div className="empty"></div>
            <p>Lorem Ipsum Student Loan Scheme</p>
            <div className="main4-cont-item-btn">
              <button onClick={() => navigate("/student-loan")}>Left</button>
              <button>Right</button>
            </div>
          </div>
          <div className="item">
            <img src={img} alt="" />
            <h3>Student Loan Scheme</h3>
            <div className="empty"></div>
            <p>Lorem Ipsum Student Loan Scheme</p>
            <div className="main4-cont-item-btn">
              <button onClick={() => navigate("/student-loan")}>Left</button>
              <button>Right</button>
            </div>
          </div>
        </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Main4;
