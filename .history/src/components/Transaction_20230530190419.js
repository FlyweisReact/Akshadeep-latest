/** @format */

import React, { useState } from "react";
import Header from "./Layout/Header";
import img from "../Images/30.png";
import "react-phone-input-2/lib/style.css";
import img1 from "../Images/icon1.png";
import img2 from "../Images/rectangle-341.png";
import img3 from "../Images/uploadimg.png";
import img4 from "../Images/eyeimg.png";

const Transaction = () => {
  const [step, setStep] = useState(3);
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
              <div className="first"></div>
              <div className="first"></div>
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
                                <img src={img3} alt='' />
                              </button>
                              <p>
                                view_file
                                <img src={img4}  alt='' />
                              </p>
                            </div>
                          </div>


                        </div>
                        <div className="form-item">
                          <div className="potn1-l">
                            <img src={img2} alt="" />
                          </div>
                          <div className="portn1-r">
                            <p className="portp">Pan Card</p>
                            <div className="portn1-r-bot">
                              <button className="portn-btn">
                                Upload
                                <img src={img3} />
                              </button>
                              <p>
                                view_file
                                <img src={img4} />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="form-item">
                          <div className="potn1-l">
                            <img src={img2} alt="" />
                          </div>
                          <div className="portn1-r">
                            <p className="portp">Pan Card</p>
                            <div className="portn1-r-bot">
                              <button className="portn-btn">
                                Upload
                                <img src={img3} />
                              </button>
                              <p>
                                view_file
                                <img src={img4} />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="form-item">
                          <div className="potn1-l">
                            <img src={img2} alt="" />
                          </div>
                          <div className="portn1-r">
                            <p className="portp">Pan Card</p>
                            <div className="portn1-r-bot">
                              <button className="portn-btn">
                                Upload
                                <img src={img3} />
                              </button>
                              <p>
                                view_file
                                <img src={img4} />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="form-item">
                          <div className="potn1-l">
                            <img src={img2} alt="" />
                          </div>
                          <div className="portn1-r">
                            <p className="portp">Pan Card</p>
                            <div className="portn1-r-bot">
                              <button className="portn-btn">
                                Upload
                                <img src={img3} />
                              </button>
                              <p>
                                view_file
                                <img src={img4} />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="foot-cont">
                      <h4>
                        Porem Ipsum dot sit amiit. consetguvurr adpriit faltingn
                      </h4>
                      <h5>
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
