import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import img from "../Images/30.png";
import img2 from "../Images/rectangle-341.png";
import img3 from "../Images/uploadimg.png";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import axios from "axios";

const TransactionDetail3 = () => {
  const [step, setStep] = useState(2);
  const navigate = useNavigate();

  /* remitter data */
  const [remitter_id, setRemitterId] = useState("");
  const [purpose, setPurpose] = useState("");
  const [account_number, setAccNum] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [pan, setPan] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal_code, setPostal] = useState("");
  const [phone_number, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [education_loan, setEducationLoan] = useState(false);
  const [nationality, setNationality] = useState("");
  const [bank_code, setBank] = useState("");

  /* beneficiary data */

  const [beneficiary_id, setBenId] = useState("");
  const [account_holder_name, setAccount] = useState("");
  const [account_number2, setAccountNumber] = useState("");
  const [swift_code, setSwiftCode] = useState("");
  const [iban, setIban] = useState("");
  const [routing_number, setRoutingNumber] = useState("");
  const [bank_name, setBankName] = useState("");
  const [bank_country, setBankCountry] = useState("");
  const [bank_address, setBankAddress] = useState("");
  const [sort_code, setSortCode] = useState("");
  const [transit_code, setTransitCode] = useState("");
  const [bsb_number, setBsbNumber] = useState("");
  const [address2, setAddress2] = useState("");
  const [city2, setCity2] = useState("");
  const [state2, setState2] = useState("");
  const [country, setCountry] = useState("");
  const [postal_code2, setPostalCode] = useState("");
  const data = [" Order Details", "Document Upload", "Calculation Bifurcation"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function NextStep() {
    console.log(step);
    if (step === 3) {
      const url = "https://akashdeep12.vercel.app/remi";
      try {
        const { data } = await axios.post(url, {
          remitter_id,
          purpose,
          account_number,
          ifsc,
          pan,
          name,
          address,
          city,
          state,
          postal_code,
          phone_number,
          email,
          education_loan,
          nationality,
          bank_code,
        });
        console.log(data);
        //setStep(step + 1);
      } catch (err) {
        console.log(err?.message);
      }
    }
    if (step === 4) {
      const url = "https://akashdeep12.vercel.app/bene";
      const url2 = "http://192.168.101.19:2004/bene";
      try {
        const res = await axios.post(url, {
          beneficiary_id,
          account_holder_name,
          account_number: account_number2,
          swift_code,
          iban,
          routing_number,
          bank_name,
          bank_country,
          bank_address,
          sort_code,
          transit_code,
          bsb_number,
          address: address2,
          city: city2,
          state: state2,
          country,
          postal_code: postal_code2,
        });
        console.log(res?.data);
      } catch (err) {
        console.log(err.message);
      }
    }
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
