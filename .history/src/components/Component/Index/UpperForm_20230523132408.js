/** @format */

import React from "react";

const UpperForm = () => {
  return (
    <>
      <div className="Index-Upper-Form">
        <div class="button-container">
          <button>BUY</button>
          <button>RELOAD</button>
          <button>UNLOAD</button>
        </div>

        <form>
          <div className="form-cont">
            <div className="form-part-1">
              <div className="two-cont">
                <div>
                  <label>Select City</label>
                  <select>
                    <option>Select City</option>
                  </select>
                </div>

                <div>
                  <label>Select Currency</label>
                  <select>
                    <option>Select Currency</option>
                  </select>
                </div>
              </div>
              <p className="rate">Rate 82.80</p>
              <div className="two-cont" >
                <div >
                  <label >Enter Forex Amount</label>
                  <input type="number" placeholder="Forex Amount" />
                </div>
                <div >
                  <label >Enter INR Amount</label>
                  <input type="text" placeholder="INR Amount" />
                </div>
              </div>


              <br />
              <div className="row-1">
                <div className="col-1">
                  <small className="small-txt">Zero Commision</small>
                </div>
                <div className="col-2">
                  <small className="small-txt-2">
                    + <spam>Add Product</spam>
                  </small>
                </div>
              </div>
              <br />
              <div className="row-1">
                <label className="lab">Total</label>
              </div>
              <div className="row-1">
                <label className="lab">0.00</label>
              </div>
            </div>
            <button className="ord-btn">Book this order</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpperForm;
