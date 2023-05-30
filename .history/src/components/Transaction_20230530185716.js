/** @format */

import React, { useState } from "react";
import Header from "./Layout/Header";
import img from "../Images/30.png";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const Transaction = () => {
  const [step, setStep] = useState(2);
  const [check, setCheck] = useState(false);

  const data = [
    " Order Details",
    "Customer Detail ",
    "Eligibility Check",
    "Order Processing",
    "Review Order",
  ];

  return (
    <>
      <Header />

      <div className="transaction_steps Second_Steps">
        {[1, 2, 3, 4, 5].map((number) => (
          <React.Fragment key={number}>
            {number !== 1 && (
              <div className={step >= number ? "empty-succes" : "empty"}></div>
            )}
            {step > number ? (
              <img
                src={img}
                alt=""
                onClick={() => (number === 1 ? "" : setStep(number))}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <p
                className={step === number ? "active-step" : "step"}
                onClick={() => (number < step ? setStep(number) : "")}
              >
                {number}
              </p>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="transaction_step_content">
        {data.map((i, index) =>
          step > index + 1 ? (
            <p
              className="done"
              onClick={() => (index + 1 === 1 ? "" : setStep(index + 1))}
            >
              {" "}
              {i}{" "}
            </p>
          ) : (
            <p className={step === index + 1 ? "active" : ""}> {i} </p>
          )
        )}
      </div>

      {/* Step 1 */}
      {step === 2 ? (
        <>
          <div className="transaction_details">
            <p className="head">Customer Details</p>

            <div className="four_sec mb-5 mt-5">
              <div className="first">
                <p>Traveler's Name</p>
                <input type="text" placeholder="Enter Traveler’s Name" />
              </div>
              <div className="first">
                <p>Mobile Number</p>
                <input type="text" placeholder="Enter Mobile Number" />
              </div>
              <div className="first">
                <p>Email</p>
                <input type="text" placeholder="Enter Email Here" />
              </div>
            </div>
            <div className="four_sec mb-5">
              <div className="first">
                <p>Pan Number</p>
                <input type="text" placeholder="Enter Pan Number " />
              </div>
              <div className="first">
                <p>Select countries to travel</p>
                <select>
                  <option>Selecet</option>
                </select>
              </div>
              <div className="first">
                <p>Travel Starting Date</p>
                <input type="date" placeholder="Enter Email Here" />
              </div>
            </div>
            <div className="four_sec mb-5">
              <div className="first">
                <p>Travel End Date</p>
                <input type="date" placeholder="Enter Traveler’s Name" />
              </div>
              <div className="first">
               </div>
              <div className="first">
              </div>
            </div>

          </div>

          <button
            className="transaction_center_btn"
            onClick={() => setStep(step + 1)}
          >
            Continue
          </button>
        </>
      ) : (
        ""
      )}

      {/* Step 2 */}

      {step === 3 ? (
        <>
          <div className="transaction_details">
            <p className="head">Eligibility Check </p>
      

            <div className="four_sec mb-3">
              <div className="first">
                <p>Purpose</p>
                <select
            onChange={(e) => setCheck(true)}
            required
          >
            <option >Select</option>
            <option >Reason 1</option>
            <option value="CST">Reason 2</option>
            <option value="PST">Reason 3</option>
          </select>  </div>
              <div className="first">
                <p>Middle Name:</p>
                <input type="text" placeholder="Write Middle Name" />
              </div>
              <div className="first">
                <p>Last Name:</p>
                <input type="text" placeholder="Write Last Name" />
              </div>
            </div>

         

   </div>

          <button
            className="transaction_center_btn"
            onClick={() => setStep(step + 1)}
          >
            Continue
          </button>
        </>
      ) : (
        ""
      )}


    </>
  );
};

export default Transaction;
