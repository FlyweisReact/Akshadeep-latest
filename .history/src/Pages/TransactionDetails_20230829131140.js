/** @format */

import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import img from "../Images/30.png";
import { useNavigate, useParams } from "react-router-dom";
import { notification } from "antd";
import axios from "axios";
import { RemitterDetail } from "../Respository/Repo";

const TransactionDetails = () => {
  const [step, setStep] = useState(2);
  const navigate = useNavigate();
  const { id } = useParams();

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [panNum, setPanNum] = useState("");

  const [remitter_id, setRemitterId] = useState("");
  const [purpose, setPurpose] = useState("");
  const [account_number, setAccNum] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [pan, setPan] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal_code, setPostal] = useState("");
  const [phone_number, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [education_loan, setEducationLoan] = useState(false);
  const [nationality, setNationality] = useState("");
  const [bank_code, setBank] = useState("");
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
  const data = [
    " Order Details",
    "Transaction Detail ",
    "Remitter Detail",
    " Beneficiaries Detail",
    "Total Charges Uploaded",
    "Documents Upload",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const RemitterPayload = {
    remitter_id,
    purpose,
    account_number,
    ifsc,
    pan,
    firstName,
    lastName,
    middleName,
    address,
    city,
    state,
    postal_code,
    phone_number,
    email,
    education_loan,
    nationality,
    bank_code,
  };

  const BeneficiaryPayload = {
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
  };

  async function NextStep() {
    if (step === 3) {
      RemitterDetail(RemitterPayload);
    }
    if (step === 4) {
      const url = "https://akashdeep12.vercel.app/bene";
      try {
        const res = await axios.post(url, BeneficiaryPayload);
      } catch (err) {
        console.log(err.message);
      }
    }
    setStep(step + 1);
    window.scrollTo(0, 0);
  }

  const validatePin = async () => {
    const url = `https://akashdeep-backend.vercel.app/pan/${id}`;
    try {
      const res = await axios.put(url, {
        pan: panNum,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

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
            <p className="head">Customer Details</p>
            <p className="sub_head">Tax Document (PAN Card)</p>

            <div className="four_sec">
              <div className="first">
                <p>
                  Pan Card <i className="fa-solid fa-exclamation"></i>
                </p>
                <input
                  type="text"
                  onChange={(e) => setPanNum(e.target.value)}
                />
              </div>
              <div className="second">
                <p>Name Received from NSDL</p>
                <input type="text" />
              </div>
              <div className="third">
                <p>Pan Status</p>
                <input type="text" />
              </div>
              <div>
                <p>Linked with Aadhar</p>
              </div>
            </div>

            <button onClick={validatePin}>Validate PAN</button>
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
            <p className="head">Remitter Details </p>
            <p className="sub_head">
              Note: For single name customers write their name under last name
            </p>

            <div className="four_sec mb-3">
              <div className="first">
                <p>First Name:</p>
                <input
                  type="text"
                  placeholder="Write first Name"
                  name="FirstName"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Middle Name:</p>
                <input
                  type="text"
                  placeholder="Write Middle Name"
                  name="MiddleName"
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Last Name:</p>
                <input
                  type="text"
                  placeholder="Write Last Name"
                  name="FirstName"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Remittance Id</p>
                <input
                  type="text"
                  onChange={(e) => setRemitterId(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Purpose</p>
                <input
                  type="text"
                  onChange={(e) => setPurpose(e.target.value)}
                />
              </div>
              <div className="first"></div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Account Number</p>
                <input
                  type="text"
                  onChange={(e) => setAccNum(e.target.value)}
                />
              </div>
              <div className="first">
                <p>IFSC</p>
                <input type="text" onChange={(e) => setIfsc(e.target.value)} />
              </div>
              <div className="first"></div>
            </div>

            <div className="two_sec mb-3">
              <div>
                <p>Address</p>
                <textarea onChange={(e) => setAddress(e.target.value)} />
              </div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Postal Code</p>
                <input
                  type="text"
                  onChange={(e) => setPostal(e.target.value)}
                />
              </div>
              <div className="first">
                <p>City</p>
                <select onChange={(e) => setCity(e.target.value)}>
                  <option>-- Select City --</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>
              <div className="first">
                <p>State</p>
                <select onChange={(e) => setState(e.target.value)}>
                  <option>-- Select State --</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Nationality</p>
                <select onChange={(e) => setNationality(e.target.value)}>
                  <option>-- Select Nationality --</option>
                  <option value="IN">India</option>
                </select>
              </div>
              <div className="first"></div>
              <div className="first"></div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Bank Code</p>
                <input
                  type="text"
                  onChange={(e) => setBank(e.target.value)}
                  placeholder="Enter bank code"
                />
              </div>
              <div className="first">
                <p>Email ID</p>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email ID"
                />
              </div>
              <div className="first">
                <p>Mobile</p>
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Write your phone number"
                />
              </div>
            </div>
          </div>

          <button className="transaction_center_btn" onClick={() => NextStep()}>
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

            <div className="four_sec mb-3">
              <div className="first">
                <p>Beneficiary Id</p>
                <input type="text" onChange={(e) => setBenId(e.target.value)} />
              </div>
              <div className="first">
                <p>Account holder Name</p>
                <input
                  type="text"
                  onChange={(e) => setAccount(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Country</p>
                <select onChange={(e) => setCountry(e.target.value)}>
                  <option>Select</option>
                  <option value="US">USA</option>
                </select>
              </div>

              <div className="first">
                <p>Sort Code</p>
                <input
                  type="text"
                  onChange={(e) => setSortCode(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Transit Code</p>
                <input
                  type="text"
                  onChange={(e) => setTransitCode(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Bsb Number</p>
                <input
                  type="text"
                  onChange={(e) => setBsbNumber(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Routing Number</p>
                <input
                  type="text"
                  onChange={(e) => setRoutingNumber(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Iban</p>
                <input type="text" onChange={(e) => setIban(e.target.value)} />
              </div>
            </div>

            <div className="Input_Text mb-3">
              <div className="main">
                <p>Receiver Address</p>
                <textarea onChange={(e) => setAddress2(e.target.value)} />
              </div>

              <div className="main">
                <div className="item mb-3">
                  <div>
                    <p>Country</p>
                    <select onChange={(e) => setCountry(e.target.value)}>
                      <option>Select</option>
                      <option value="US">USA</option>
                    </select>
                  </div>

                  <div>
                    <p>Pincode/ Zip code</p>
                    <input onChange={(e) => setPostalCode(e.target.value)} />
                  </div>
                </div>
                <div className="item">
                  <div>
                    <p>State</p>
                    <input
                      type="text"
                      onChange={(e) => setState2(e.target.value)}
                    />
                  </div>

                  <div>
                    <p>Email ID</p>
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Receiver Bank Name</p>
                <input
                  type="text"
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Receiver Bank Country</p>
                <input
                  type="text"
                  onChange={(e) => setBankCountry(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Receiver Bank Swift Code</p>
                <input
                  type="text"
                  onChange={(e) => setSwiftCode(e.target.value)}
                />
              </div>
            </div>

            <div className="two_sec mb-3">
              <div>
                <p>Receiver Bank Address 1</p>
                <textarea onChange={(e) => setBankAddress(e.target.value)} />
              </div>
              <div>
                <p>Receiver Bank Address 2</p>
                <textarea onChange={(e) => setBankAddress(e.target.value)} />
              </div>
            </div>

            <div className="four_sec mb-3">
              <div className="first special">
                <p>Receiver Account number </p>
                <input
                  type="text"
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </div>
              <div className="first special">
                <p>City </p>
                <input type="text" onChange={(e) => setCity2(e.target.value)} />
              </div>
            </div>

            <div className="last_btn">
              <button className="btn">Clear</button>
              <button onClick={() => NextStep()}>Submit</button>
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

          <button className="transaction_center_btn" onClick={() => NextStep()}>
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

export default TransactionDetails;
