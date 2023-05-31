/** @format */

import React from "react";
import Header from "../components/Layout/Header";

const CurrencyConvertor = () => {
  return (
    <>
      <Header />

      <div className="Currency_Convertor">
        <div className="left_container">
          <p className="Head">USD to INR Currency Converter with Live Rate</p>
          <div className="upper">
            <p className="head">USD-INR Currency Converter</p>

            <p className="sub_head">1 USD = 82.40 INR</p>
            <p className="desc">
              Interbank/ mid-market Rate at: 17-02-2023 16:42:17
            </p>

                <div className="two_Div">
                <div>
                    <input type='number' />
                </div>

                </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyConvertor;
