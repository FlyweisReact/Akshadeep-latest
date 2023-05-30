/** @format */

import React from "react";

const UpperForm = () => {
  return (
    <div className="Index-Upper-Form">
      <form >
        <div className="form-cont"  style={{paddingBottom : '50px'}}>
          <div className="form-part-1">
            <div className="two-cont" style={{ display: "block" }}>
              <div style={{ width: "100%" }} className="mb-3">
                <label>Select The City You're Located In</label>
                <select>
                  <option>Select City</option>
                </select>
              </div>

              <div className="mb-3" style={{ width: "100%" }}>
                <label>Please select the option that best describes you</label>
                <select>
                  <option>
                    Please select the option that best describes you
                  </option>
                </select>
              </div>
            </div>

            <div className="two-cont mb-3" >
              <div>
                <input
                  type="text"
                  placeholder="Organization/ Individual name"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              <div>
                <input type="number" placeholder="Enter Phone Number" />
              </div>
            </div>

            <div className="two-cont" style={{ display: "block" }}>
              <div style={{ width: "100%" }} className="mb-3">
                <input type="email" placeholder="Enter Email" />
              </div>

              <div className="mb-3" style={{ width: "100%" }}>
                <label>Monthly Import/ Export Volume</label>
                <select>
                  <option>Select Volume</option>
                </select>
              </div>
            </div>
          </div>
          <button className="ord-btn">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default UpperForm;
