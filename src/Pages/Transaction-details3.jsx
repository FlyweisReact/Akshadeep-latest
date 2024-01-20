/** @format */

import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import img from "../Images/30.png";
import img2 from "../Images/rectangle-341.png";
import img3 from "../Images/uploadimg.png";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

const data = [" Order Details", "Document Upload", "Calculation Bifurcation"];

const TransactionDetail3 = () => {
  const [step, setStep] = useState(2);
  const navigate = useNavigate();

  //
  const [passportFront, setPasswordFront] = useState("");
  const [passportBack, setPasswordBack] = useState("");
  const [air, setAir] = useState("");
  const [Visa, setVisa] = useState("");
  const [panCard, setPanCard] = useState("");

  const fd = new FormData();
  fd.append("passportFront", passportFront);
  fd.append("passportBack", passportBack);
  fd.append("air", air);
  fd.append("Visa", Visa);
  fd.append("panCard", panCard);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function NextStep() {
    setStep(step + 1);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header />

      <div className="transaction_steps">
        {[1, 2, 3].map((number) => (
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
            <>
              <div className="form-3-cont mt-5">
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
                <div className="CheckBox_Div">
                  <input type={"checkbox"} />
                  <p>
                    Porem Ipsum dot sit amiit. consetguvurr adpriit faltingn
                  </p>
                </div>
                <div className="CheckBox_Div">
                  <input type={"checkbox"} />
                  <p>
                    Lorem ipsum is a dummy text to shwo dummy text and spce for
                    actual text to be decide in the future, here it shows the
                    actual space for the text
                  </p>
                </div>
              </div>
            </>
          </div>
          <button className="transaction_center_btn" onClick={() => NextStep()}>
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
            onClick={() => navigate("/")}
          >
            Continue
          </button>
        </>
      ) : (
        ""
      )}

      {/* Step 3 */}

      {/* Step 5 */}

      {/* Step 1 */}
    </>
  );
};

export default TransactionDetail3;
