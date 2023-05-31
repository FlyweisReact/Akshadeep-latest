/** @format */

import React from "react";
import Header from "../components/Layout/Header";
import img9 from "../Images/span.png";
import img10 from "../Images/a.png";
import img11 from "../Images/a-1.png";
import img12 from "../Images/a-2.png";
import img13 from "../Images/a-3.png";
import img14 from "../Images/a-4.png";
import img15 from "../Images/a-5.png";
import img16 from "../Images/a-6.png";

const Rate = () => {
  return (
    <>
      <Header />

      <div
        className="exch-below-cont-6"
        style={{
          width: "80%",
          display: "block",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <div className="exch-below-cont-6-1">
          <h4>US Dollars Rates In Other Cities</h4>
          <img src={img9} alt="" />
        </div>

        <div className="form-group-2">
          <select className="ip" id="timezone" name="timezone" required>
            <option value="">Select City</option>
            <option value="EST">Mumbai</option>
            <option value="CST">Delhi</option>
            <option value="PST">Ghaziabad</option>
            <option value="PST">Pune</option>
            <option value="PST">Chennai</option>
            <option value="PST">Banglore</option>
          </select>
        </div>

        <div className="exch-below-6-last">
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
          <img src={img13} alt="" />
          <img src={img14} alt="" />
          <img src={img15} alt="" />
          <img src={img16} alt="" />
        </div>
      </div>

      <div className="Rate_Table">
        <div className="left">
            <p className="head">CURRENCY</p>
            <div className="seacrhBar">
                <input type='search' />
            </div>
        </div>
        <div className="mid">
        <p className="head">BUY RATES</p>
        </div>
        <div className="right">
        <p className="head">SELL RATES</p>
        </div>
      </div>
    </>
  );
};

export default Rate;
