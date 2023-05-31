/** @format */

import React, { useState } from "react";
import Header from "../components/Layout/Header";
import img from "../Images/30.png";
import "react-phone-input-2/lib/style.css";
import img2 from "../Images/rectangle-341.png";
import img3 from "../Images/uploadimg.png";

const SendMoney = () => {
  const [step, setStep] = useState(2);
  const [check, setCheck] = useState(false);

  const data = [
    "Order Details",
    "Sender Details",
    "Eligibility Check",
    "Beneficiary",
    "Transfer Declaration ",
    "Review Order",
  ];

  return (
    <>
      <Header />

      <div className="transaction_steps">
        {[1, 2, 3, 4, 5, 6].map((number) => (
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
            <p className="head">Sender Details</p>

            <div className="four_sec mb-5 mt-5">
              <div className="first">
                <p>Pan Card</p>
                <input type="text" placeholder="Enter Pan Card " />
              </div>
              <div className="first">
                <p>Aadhar Card</p>
                <input type="text" placeholder="Enter Aadhar Card Number " />
              </div>
              <div className="first"></div>
            </div>

            <div>
              <input type={"checkbox"} />
              <h4>
                I have a mobile phone linked to my Aadhar Card and I consent o
                authenticate myself using Aadhar eKYC
              </h4>
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

            <div className="four_sec mb-3 mt-5">
              <div className="first">
                <p className="mb-1">Purpose</p>
                <select onChange={(e) => setCheck(true)} required>
                  <option>Select</option>
                  <option>Reason 1</option>
                  <option>Reason 2</option>
                  <option>Reason 3</option>
                </select>{" "}
              </div>
              <div className="first"></div>
              <div className="first"></div>
            </div>

            <div className="below-form-cont">
              {check === false ? (
                ""
              ) : (
                <>
                  <div className="form-3-cont mt-5">
                    <div className="Radio_Div" style={{ paddingLeft: "1%" }}>
                      <p>Are you an Indian Resident?</p>
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

                    <div className="form-3-cont-below">
                      <h3>Documents Required</h3>
                      <div className="form-grp-2-below-cont">
                        <div className="form-item">
                          <div className="potn1-l">
                            <img src={img2} alt="" />
                          </div>

                          <div className="portn1-r">
                            <p className="portp">Pan Card</p>
                            <div className="portn1-r-bot">
                              <button className="portn-btn">
                                Upload
                                <img src={img3} alt="" />
                              </button>
                              <p>view_file</p>
                            </div>
                          </div>
                        </div>
                        <div className="form-item">
                          <div className="potn1-l">
                            <img src={img2} alt="" />
                          </div>
                          <div className="portn1-r">
                            <p className="portp">Passport (Front Side)</p>
                            <div className="portn1-r-bot">
                              <button className="portn-btn">
                                Upload
                                <img src={img3} alt="" />
                              </button>
                              <p>view_file</p>
                            </div>
                          </div>
                        </div>
                        <div className="form-item">
                          <div className="potn1-l">
                            <img src={img2} alt="" />
                          </div>
                          <div className="portn1-r">
                            <p className="portp">Passport (Back Side)</p>
                            <div className="portn1-r-bot">
                              <button className="portn-btn">
                                Upload
                                <img src={img3} alt="" />
                              </button>
                              <p>view_file</p>
                            </div>
                          </div>
                        </div>
                        <div className="form-item">
                          <div className="potn1-l">
                            <img src={img2} alt="" />
                          </div>
                          <div className="portn1-r">
                            <p className="portp">Air Ticket (60 Days)</p>
                            <div className="portn1-r-bot">
                              <button className="portn-btn">
                                Upload
                                <img src={img3} alt="" />
                              </button>
                              <p>view_file</p>
                            </div>
                          </div>
                        </div>
                        <div className="form-item">
                          <div className="potn1-l">
                            <img src={img2} alt="" />
                          </div>
                          <div className="portn1-r">
                            <p className="portp">Valid Visa</p>
                            <div className="portn1-r-bot">
                              <button className="portn-btn">
                                Upload
                                <img src={img3} alt="" />
                              </button>
                              <p>view_file</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="foot-cont">
                      <h4>
                        <input
                          type={"checkbox"}
                          style={{ marginRight: "10px" }}
                        />
                        Porem Ipsum dot sit amiit. consetguvurr adpriit faltingn
                      </h4>
                      <h5>
                        <input
                          type={"checkbox"}
                          style={{ marginRight: "10px" }}
                        />
                        Lorem ipsum is a dummy text to shwo dummy text and spce
                        for actual text to be decide in the future, here it
                        shows the actual space for the text
                      </h5>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <button className="transaction_center_btn">Continue</button>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SendMoney;
