/** @format */

import React, { useState } from "react";
import Header from "./Layout/Header";
import img from "../Images/30.png";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const Transaction = () => {
  const [step, setStep] = useState(2);
  const navigate = useNavigate();

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
                <p>First Name:</p>
                <input type="text" placeholder="Write first Name" />
              </div>
              <div className="first">
                <p>Middle Name:</p>
                <input type="text" placeholder="Write Middle Name" />
              </div>
              <div className="first">
                <p>Last Name:</p>
                <input type="text" placeholder="Write Last Name" />
              </div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Date of Birth</p>
                <input type="date" />
              </div>
              <div className="first">
                <p>Gender</p>
                <select>
                  <option>-- Select Gender --</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="first"></div>
            </div>

            <p className="sub_head">Permanent Address</p>

            <div className="two_sec mb-3">
              <div>
                <p>Address Line 1</p>
                <textarea />
              </div>
              <div>
                <p>Address Line 2</p>
                <textarea />
              </div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Pin Code</p>
                <input type="date" />
              </div>
              <div className="first">
                <p>City</p>
                <select>
                  <option>-- Select City --</option>
                </select>
              </div>
              <div className="first">
                <p>State</p>
                <select>
                  <option>-- Select State --</option>
                </select>
              </div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Country</p>
                <select>
                  <option>-- Select Country --</option>
                </select>
              </div>
              <div className="first"></div>
              <div className="first"></div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Email ID</p>
                <input type="email" placeholder="Enter Email ID" />
              </div>
              <div className="first special">
                <p>Mobile</p>
                <PhoneInput country={"in"} />
              </div>
              <div className="first">
                <p>Customer Residential Status</p>
                <select>
                  <option> Select </option>
                </select>
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
