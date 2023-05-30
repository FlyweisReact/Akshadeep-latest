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

            <div className="four_sec mb-3">
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
            <div className="four_sec mb-3">
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
            <div className="four_sec mb-7">
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
            <p className="head">Remitter Details </p>
            <p className="sub_head">
              Note: For single name customers write their name under last name
            </p>

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

      {/* Step 3 */}
      {step === 4 ? (
        <>
          <div className="transaction_details">
            <p className="head">Beneficiaries Details </p>

            <div className="Radio_Div">
              <p>Is Existing Beneficiary</p>
              <div className="two">
                <div>
                  <input type="radio" name="fav_language" />
                  <p>Yes</p>
                </div>
                <div>
                  <input type="radio" name="fav_language" />
                  <p>No</p>
                </div>
              </div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Beneficiary Type</p>
                <select>
                  <option>Select</option>
                </select>
              </div>
              <div className="first">
                <p>Receiver Name</p>
                <input type="text" />
              </div>
              <div className="first">
                <p>Receiver Nick Name</p>
                <input type="text" />
              </div>
            </div>

            <div className="Input_Text mb-3">
              <div className="main">
                <p>Receiver Address</p>
                <textarea />
              </div>

              <div className="main">
                <div className="item mb-3">
                  <div>
                    <p>Country</p>
                    <select>
                      <option>Select</option>
                    </select>
                  </div>

                  <div>
                    <p>Pincode/ Zip code</p>
                    <input />
                  </div>
                </div>
                <div className="item">
                  <div>
                    <p>Contact Number</p>
                    <input type="text" />
                  </div>

                  <div>
                    <p>Email ID</p>
                    <input type="email" />
                  </div>
                </div>
              </div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Receiver Bank Name</p>
                <input type="text" />
              </div>
              <div className="first">
                <p>Receiver Bank Country</p>
                <input type="text" />
              </div>
              <div className="first">
                <p>Receiver Bank Swift Code</p>
                <input type="text" />
              </div>
            </div>

            <div className="two_sec mb-3">
              <div>
                <p>Receiver Bank Address 1</p>
                <textarea />
              </div>
              <div>
                <p>Receiver Bank Address 2</p>
                <textarea />
              </div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Currency</p>
                <select>
                  <option>Select</option>
                </select>
              </div>
              <div className="first special">
                <p>Receiver Account number </p>
                <input type="text" />
              </div>
              <div className="first">
                <p>Re-enter account number</p>
                <input type="text" />
              </div>
            </div>

            <div className="last_btn">
              <button className="btn">Clear</button>
              <button onClick={() => setStep(step + 1)}>Submit</button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      {/* Step 5 */}
      {step === 5 ? (
        <>
          <div className="transaction_details">
            <p className="head">Total Charges bifurcation </p>

            <div className="four_sec mb-3 mt-3">
              <div className="first">
                <p>Exchange Rate</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  83.2300
                </p>
              </div>

              <div className="first">
                <p>Transfer Amount in FCY</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  83.2300
                </p>
              </div>

              <div className="first">
                <p>Total Funding Amount in INR</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  83.2300
                </p>
              </div>
            </div>

            <div className="four_sec mb-3" style={{ marginTop: "3%" }}>
              <div className="first">
                <p>Remittance Service Charge</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  83.2300
                </p>
              </div>

              <div className="first">
                <p>GST on Charge</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  83.2300
                </p>
              </div>

              <div className="first">
                <p>GST on Currency Conversion</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  83.2300
                </p>
              </div>
            </div>

            <div className="four_sec mb-3 " style={{ marginTop: "3%" }}>
              <div className="first">
                <p>TCS</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  83.2300
                </p>
              </div>

              <div className="first">
                <p>TCS Flag</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  83.2300
                </p>
              </div>

              <div className="first">
                <p>Total Funding Amount in INR</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  83.2300
                </p>
              </div>
            </div>

            <div className="four_sec mb-3 " style={{ marginTop: "3%" }}>
              <div className="first">
                <p>Total of all Charges and Taxes</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  83.2300
                </p>
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

      {/* Step 1 */}
      {step === 6 ? (
        <>
          <div className="transaction_details">
            <p className="head">Document Upload</p>
            <p className="sub_head">ID Proof Document details</p>

            <div className="four_sec">
              <div className="first">
                <p>Documents Name:</p>
                <input type="text" />
              </div>
              <div className="first">
                <p>Documents Number:</p>
                <input type="text" />
              </div>
              <div className="first">
                <p>City</p>
                <select>
                  <option>Select City</option>
                </select>
              </div>
            </div>
            <div className="four_sec mt-3">
              <div className="first">
                <p>Purpose of issue</p>
                <input type="text" />
              </div>
              <div className="first">
                <p>Date of issue</p>
                <input type="date" />
              </div>
              <div className="first">
                <p>Country of issue</p>
                <select>
                  <option>Select Country</option>
                </select>
              </div>
            </div>
          </div>

          <button
            className="transaction_center_btn"
            onClick={() => {
              notification.success({
                message: "Submit",
              });
              navigate("/Remittance");
            }}
          >
            Submit
          </button>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Transaction;
