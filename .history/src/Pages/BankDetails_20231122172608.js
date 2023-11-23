/** @format */

import React from "react";
import Fixed from "../components/Component/Fixed";
import Footer from "../components/Layout/footer";
import Header from "../components/Layout/Header";

const BankDetails = () => {
  return (
    <>
      <Header />
      <Fixed />

      <div className="bank_details">
        <div className="in_row">
          <div className="indi">
            <p>Beneficiary name: </p>
          </div>
          <div className="indi">
            <p>OUTWARD REMITTANCE POOL ACCOUNT</p>
          </div>
        </div>

        <div className="in_row">
          <div className="indi">
            <p>ACCOUNT NO:</p>
          </div>
          <div className="indi">
            <p> 0035SLORCBPC</p>
          </div>
        </div>

        <div className="in_row">
          <div className="indi">
            <p>IFSC CODE:</p>
          </div>
          <div className="indi">
            <p>ICIC0000035</p>
          </div>
        </div>

        <div className="in_row">
          <div className="indi special">
            <p >BRANCH: </p>
          </div>
          <div className="indi">
            <p>THANE</p>
          </div>
        </div>

        <div className="in_row">
          <div className="indi">
            <p>BANK :</p>
          </div>
          <div className="indi">
            <p>ICICI BANK</p>
          </div>
        </div>
        <div className="in_row">
          <div className="indi">
            <p>ACCOUNT TYPE: </p>
          </div>
          <div className="indi">
            <p>CURRENT A/C </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BankDetails;
