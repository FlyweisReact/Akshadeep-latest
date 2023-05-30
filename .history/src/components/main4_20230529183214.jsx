import React from 'react';
import img from "../Images/a-45.png";
import img2 from "../Images/span.png";
import BottomCont from "./bottom_cont";
import Footer from "./footer"
import {useNavigate} from "react-router-dom";
import img6 from "../Images/a-57.png";
import img7 from "../Images/a-58.png";
import Header from './Layout/Header';

const Main4 = ()=>{
    const navigate = useNavigate();
    return (
        <>
          <Header />
          <div className="main4-cont">
            <div className="main4-cont-item">
                <img src={img} />
                <h3>Student Loan Scheme</h3>
                <p>Lorem Ipsum Student Loan Scheme</p>
                <div className="main4-cont-item-btn">
                    <button onClick={()=>navigate("/student-loan")}>Left</button>
                    <button>Right</button>
                </div>
            </div>
            <div className="main4-cont-item">
                <img src={img} />
                <h3>Student Loan Scheme</h3>
                <p>Lorem Ipsum Student Loan Scheme</p>
                <div className="main4-cont-item-btn">
                    <button>Left</button>
                    <button>Right</button>
                </div>               
            </div>
            <div className="main4-cont-item">
                <img src={img} />
                <h3>Student Loan Scheme</h3>
                <p>Lorem Ipsum Student Loan Scheme</p>
                <div className="main4-cont-item-btn">
                    <button>Left</button>
                    <button>Right</button>
                </div>   
            </div>
          </div>
          <div className="main-mid-cont">
                <img src={img6} alt="" />
            </div>
            <div className="main-mid-2-cont">
                <img src={img7} alt="" />
            </div>
          <div className="main4-mid-cont">
            <div className="div-box">
                <p>Logo</p>
            </div>
            <p>The Lorem Ipsum Advantage</p>
            <img src={img2} />
          </div>
          <BottomCont />
          <Footer />
        </>
    )
}

export default Main4;