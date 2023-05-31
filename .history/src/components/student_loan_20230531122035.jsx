import React from "react";
import img from "../Images/a-52.png";
import img2 from "../Images/a-53.png";
import img3 from "../Images/a-54.png";
import img4 from "../Images/a-55.png";
import img5 from "../Images/a-56.png";
import Header from "./Layout/Header";

const StudentLoan = () => {
  return (
    <>
      <Header />
      <div className="sl-cont-1">
        <img src={img} alt="" />
        <div className="sl-cont-1-sub">
          <h3>Student Loan Scheme</h3>
          <img src={img3} alt="" />
          <p>Lorem Ipsum Student Loan Scheme</p>
        </div>
      </div>
      <img className="sl-hr-line" src={img4} alt="" />
      <div className="sl-cont-2">
        <div className="sl-cont-2-l">
          <div className="sl-left-cont">
            <h3>Features</h3>
            <img src={img5} atl="" />
            <p>Eligibility</p>
            <p>Documents Required</p>
          </div>
        </div>
        <div className="sl-cont-2-r">
          <div className="sl-right-pad">
            <div className="sl-right-cont">
              <img src={img2} alt="" />
              <p>
                Repayment Period Upto 15 years after Course Period + 12 months
                of repayment holiday.
              </p>
            </div>
            <div className="sl-right-cont">
              <img src={img2} alt="" />
              <p>
                Process Charges
                <ul>
                  <li>Loan upto Rs 20 lacs: Nill</li>
                  <li>Loan above Rs 20 lacs: Rs 10,000 (+ taxes)</li>
                </ul>
              </p>
            </div>
            <div className="sl-right-cont">
              <img src={img2} alt="" />
              <p>
                Process Charges
                <ul>
                  <li>Loan upto Rs 20 lacs: Nill</li>
                  <li>Loan above Rs 20 lacs: Rs 10,000 (+ taxes)</li>
                </ul>
              </p>
            </div>
            <div className="sl-right-cont">
              <img src={img2} alt="" />
              <p>
                Process Charges
                <ul>
                  <li>Loan upto Rs 20 lacs: Nill</li>
                  <li>Loan above Rs 20 lacs: Rs 10,000 (+ taxes)</li>
                </ul>
              </p>
            </div>
            <div className="sl-right-cont">
              <img src={img2} alt="" />
              <p>
                Process Charges
                <ul>
                  <li>Loan upto Rs 20 lacs: Nill</li>
                  <li>Loan above Rs 20 lacs: Rs 10,000 (+ taxes)</li>
                </ul>
              </p>
            </div>
            <div className="sl-right-cont">
              <img src={img2} alt="" />
              <p>
                Repayment Period Upto 15 years after Course Period + 12 months
                of repayment holiday.
              </p>
            </div>
            <div className="sl-right-cont">
              <img src={img2} alt="" />
              <p>
                Repayment Period Upto 15 years after Course Period + 12 months
                of repayment holiday.
              </p>
            </div>
            <div className="sl-right-cont">
              <img src={img2} alt="" />
              <p>
                Process Charges
                <ul>
                  <li>Loan upto Rs 20 lacs: Nill</li>
                  <li>Loan above Rs 20 lacs: Rs 10,000 (+ taxes)</li>
                </ul>
              </p>
            </div>
            <div className="sl-right-cont">
              <img src={img2} alt="" />
              <p>
                Repayment Period Upto 15 years after Course Period + 12 months
                of repayment holiday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentLoan;
