/** @format */

import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import img from "../Images/30.png";
import { useNavigate, useParams } from "react-router-dom";
import {
  get_all_types,
  pan_Validation,
  RemitterDetail,
  updateBeneficiary,
  updateDocument,
  upload_Documents,
} from "../Respository/Repo";

const TransactionDetails = () => {
  const [step, setStep] = useState(2);
  const navigate = useNavigate();
  const { id } = useParams();
  const [panResponse, setPanResponse] = useState({});

  const [firstName, setFirstName] = useState(panResponse?.firstName);
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [panNum, setPanNum] = useState("");

  // Remitter Payload ---
  const [AccountNumberRemitter, setAccountNumberRemitter] = useState("");
  const [IFSC_Remitter, setIFSC_Remitter] = useState("");
  const [addressRemitter, setAddressRemitter] = useState("");
  const [postCodeRemitter, setpostCodeRemitter] = useState("");
  const [cityRemitter, setCityRemitter] = useState("");
  const [stateRemitter, setStateRemitter] = useState("");
  const [nationalityRemitter, setNationalityRemitter] = useState("");
  const [emailIdRemitter, setEmailIdRemitter] = useState("");
  const [mobileRemitter, setMobileRemitter] = useState("");

  // Beneficiary Payload
  const [benficiaryid, setBenficiaryId] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [sortCode, setSortCode] = useState("");
  const [transitCode, setTransitCode] = useState("");
  const [BsbNumber, setBsbNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [Iban, setIban] = useState("");
  const [stateBeneficiary, setStateBeneficiary] = useState("");
  const [pinCodeBeneficiary, setPinCodeBeneficaiary] = useState("");
  const [recieverAddress, setRecieverAddress] = useState("");
  const [countryBeneficiary, setCountryBeneficiary] = useState("");
  const [emailIdBeneficiary, setEmailIdBeneficiary] = useState("");
  const [recieverBankName, setRecieverBankName] = useState("");
  const [recieverBankCountry, setRecieverBankCountry] = useState("");
  const [recieverBankSwiftCode, setRecieverBankSwiftCode] = useState("");
  const [recieverBankAddress1, setRecieverBankAddress1] = useState("");
  const [recieverBankAddress2, setReciverBankAddress2] = useState("");
  const [recieverAccountNumber, setRecieverAccountNumber] = useState("");
  const [cityBeneficiary, setCityBeneficiary] = useState("");

  // Document Payload
  const [documentName, setDocumentName] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [city, setCity] = useState("");
  const [purposeOfIssue, setPurposeOfIssue] = useState("");
  const [dateOfIssue, setDateOfIssue] = useState("");
  const [countryOfIssue, setCountryOfIssue] = useState("");

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
    firstName,
    middleName,
    lastName,
    AccountNumberRemitter,
    IFSC_Remitter,
    panRemitter: panNum,
    addressRemitter,
    postCodeRemitter,
    cityRemitter,
    stateRemitter,
    nationalityRemitter,
    emailIdRemitter,
    mobileRemitter,
  };

  const BeneficiaryPayload = {
    benficiaryid,
    accountHolderName,
    sortCode,
    transitCode,
    BsbNumber,
    routingNumber,
    Iban,
    recieverAddress,
    countryBeneficiary,
    pinCodeBeneficiary,
    stateBeneficiary,
    emailIdBeneficiary,
    recieverBankName,
    recieverBankCountry,
    recieverBankSwiftCode,
    recieverBankAddress1,
    recieverBankAddress2,
    recieverAccountNumber,
    cityBeneficiary,
  };

  async function NextStep() {
    if (step === 3) {
      RemitterDetail(id, RemitterPayload);
    }
    if (step === 4) {
      updateBeneficiary(id, BeneficiaryPayload);
    }
    setStep(step + 1);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (panResponse) {
      setFirstName(panResponse?.firstName);
      setMiddleName(panResponse?.middleName);
      setLastName(panResponse?.lastName);
      setAccountNumberRemitter(panResponse?.AccountNumberRemitter);
      setIFSC_Remitter(panResponse?.IFSC_Remitter);
      setAddressRemitter(panResponse?.addressRemitter);
      setpostCodeRemitter(panResponse?.postCodeRemitter);
      setNationalityRemitter(panResponse?.nationalityRemitter);
      setEmailIdRemitter(panResponse?.emailIdRemitter);
      setMobileRemitter(panResponse?.mobileRemitter);
      setCityRemitter(panResponse?.cityRemitter);
      setStateRemitter(panResponse?.stateRemitter);
      setBenficiaryId(panResponse?.benficiaryid);
      setAccountHolderName(panResponse?.accountHolderName);
      setSortCode(panResponse?.sortCode);
      setTransitCode(panResponse?.transitCode);
      setBsbNumber(panResponse?.BsbNumber);
      setRoutingNumber(panResponse?.routingNumber);
      setIban(panResponse?.Iban);
      setStateBeneficiary(panResponse?.stateBeneficiary);
      setPinCodeBeneficaiary(panResponse?.pinCodeBeneficiary);
      setRecieverAddress(panResponse?.recieverAddress);
      setCountryBeneficiary(panResponse?.countryBeneficiary);
      setEmailIdBeneficiary(panResponse?.emailIdBeneficiary);
      setRecieverBankName(panResponse?.recieverBankName);
      setRecieverBankCountry(panResponse?.recieverBankCountry);
      setRecieverBankSwiftCode(panResponse?.recieverBankSwiftCode);
      setRecieverBankAddress1(panResponse?.recieverBankAddress1);
      setReciverBankAddress2(panResponse?.recieverBankAddress2);
      setRecieverAccountNumber(panResponse?.recieverAccountNumber);
      setCityBeneficiary(panResponse?.cityBeneficiary);
      setDocumentName(panResponse?.documentName);
      setDocumentNumber(panResponse?.documentNumber);
      setCity(panResponse?.city);
      setPurposeOfIssue(panResponse?.purposeOfIssue);
      setDateOfIssue(panResponse?.dateOfIssue);
      setCountryOfIssue(panResponse?.countryOfIssue);
    }
  }, [panResponse]);

  const validatePin = async (e) => {
    e.preventDefault();
    const payload = { pan: panNum };
    await pan_Validation(id, payload, setPanResponse);
  };

  const documentPayload = {
    documentName,
    documentNumber,
    city,
    purposeOfIssue,
    dateOfIssue,
    countryOfIssue,
  };

  const documentHandler = async () => {
    await upload_Documents(id, documentPayload);
  };


  //----
  const [ ] = useState([])
  const fetchHandler =  () => {
    get_all_types()
  }

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
            <form onSubmit={validatePin}>
              <div className="four_sec">
                <div className="first">
                  <p>
                    Pan Card <i className="fa-solid fa-exclamation"></i>
                  </p>
                  <input
                    type="text"
                    onChange={(e) => setPanNum(e.target.value)}
                    required
                  />
                </div>
                <div className="second">
                  <p>Name Received from NSDL</p>
                  <input
                    type="text"
                    defaultValue={panResponse?.Name}
                    disabled
                  />
                </div>
                <div className="third">
                  <p>Pan Status</p>
                  <input
                    type="text"
                    defaultValue={panResponse?.panStatus}
                    disabled
                  />
                </div>
                <div>
                  <p>Linked with Aadhar</p>
                </div>
              </div>

              <button type="submit">Validate PAN</button>
            </form>
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Middle Name:</p>
                <input
                  type="text"
                  placeholder="Write Middle Name"
                  name="MiddleName"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Last Name:</p>
                <input
                  type="text"
                  placeholder="Write Last Name"
                  name="LastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Account Number</p>
                <input
                  type="text"
                  value={AccountNumberRemitter}
                  onChange={(e) => setAccountNumberRemitter(e.target.value)}
                />
              </div>
              <div className="first">
                <p>IFSC</p>
                <input
                  type="text"
                  value={IFSC_Remitter}
                  onChange={(e) => setIFSC_Remitter(e.target.value)}
                />
              </div>
              <div className="first"></div>
            </div>

            <div className="two_sec mb-3">
              <div>
                <p>Address</p>
                <textarea
                  value={addressRemitter}
                  onChange={(e) => setAddressRemitter(e.target.value)}
                />
              </div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Postal Code</p>
                <input
                  type="text"
                  value={postCodeRemitter}
                  onChange={(e) => setpostCodeRemitter(e.target.value)}
                />
              </div>
              <div className="first">
                <p>City</p>
                <select onChange={(e) => setCityRemitter(e.target.value)}>
                  <option>-- Select City --</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>
              <div className="first">
                <p>State</p>
                <select onChange={(e) => setStateRemitter(e.target.value)}>
                  <option>-- Select State --</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Nationality</p>
                <select
                  onChange={(e) => setNationalityRemitter(e.target.value)}
                >
                  <option>-- Select Nationality --</option>
                  <option value="IN">India</option>
                </select>
              </div>
              <div className="first"></div>
              <div className="first"></div>
            </div>

            <div className="four_sec mb-3">
              <div className="first">
                <p>Email ID</p>
                <input
                  type="email"
                  value={emailIdRemitter}
                  onChange={(e) => setEmailIdRemitter(e.target.value)}
                  placeholder="Enter Email ID"
                />
              </div>
              <div className="first">
                <p>Mobile</p>
                <input
                  type="text"
                  value={mobileRemitter}
                  onChange={(e) => setMobileRemitter(e.target.value)}
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
                <input
                  type="text"
                  value={benficiaryid}
                  onChange={(e) => setBenficiaryId(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Account holder Name</p>
                <input
                  type="text"
                  value={accountHolderName}
                  onChange={(e) => setAccountHolderName(e.target.value)}
                />
              </div>

              <div className="first">
                <p>Sort Code</p>
                <input
                  type="text"
                  value={sortCode}
                  onChange={(e) => setSortCode(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Transit Code</p>
                <input
                  type="text"
                  value={transitCode}
                  onChange={(e) => setTransitCode(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Bsb Number</p>
                <input
                  type="text"
                  value={BsbNumber}
                  onChange={(e) => setBsbNumber(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Routing Number</p>
                <input
                  type="text"
                  value={routingNumber}
                  onChange={(e) => setRoutingNumber(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Iban</p>
                <input
                  type="text"
                  value={Iban}
                  onChange={(e) => setIban(e.target.value)}
                />
              </div>
            </div>

            <div className="Input_Text mb-3">
              <div className="main">
                <p>Receiver Address</p>
                <textarea
                  value={recieverAddress}
                  onChange={(e) => setRecieverAddress(e.target.value)}
                />
              </div>

              <div className="main">
                <div className="item mb-3">
                  <div>
                    <p>Country</p>
                    <select
                      onChange={(e) => setCountryBeneficiary(e.target.value)}
                    >
                      <option>Select</option>
                      <option value="US">USA</option>
                    </select>
                  </div>

                  <div>
                    <p>Pincode/ Zip code</p>
                    <input
                      onChange={(e) => setPinCodeBeneficaiary(e.target.value)}
                    />
                  </div>
                </div>
                <div className="item">
                  <div>
                    <p>State</p>
                    <input
                      type="text"
                      value={stateBeneficiary}
                      onChange={(e) => setStateBeneficiary(e.target.value)}
                    />
                  </div>

                  <div>
                    <p>Email ID</p>
                    <input
                      type="email"
                      value={emailIdBeneficiary}
                      onChange={(e) => setEmailIdBeneficiary(e.target.value)}
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
                  value={recieverBankName}
                  onChange={(e) => setRecieverBankName(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Receiver Bank Country</p>
                <input
                  type="text"
                  value={recieverBankCountry}
                  onChange={(e) => setRecieverBankCountry(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Receiver Bank Swift Code</p>
                <input
                  type="text"
                  value={recieverBankSwiftCode}
                  onChange={(e) => setRecieverBankSwiftCode(e.target.value)}
                />
              </div>
            </div>

            <div className="two_sec mb-3">
              <div>
                <p>Receiver Bank Address 1</p>
                <textarea
                  value={recieverBankAddress1}
                  onChange={(e) => setRecieverBankAddress1(e.target.value)}
                />
              </div>
              <div>
                <p>Receiver Bank Address 2</p>
                <textarea
                  value={recieverBankAddress2}
                  onChange={(e) => setReciverBankAddress2(e.target.value)}
                />
              </div>
            </div>

            <div className="four_sec mb-3">
              <div className="first special">
                <p>Receiver Account number </p>
                <input
                  type="text"
                  value={recieverAccountNumber}
                  onChange={(e) => setRecieverAccountNumber(e.target.value)}
                />
              </div>
              <div className="first special">
                <p>City </p>
                <input
                  type="text"
                  value={cityBeneficiary}
                  onChange={(e) => setCityBeneficiary(e.target.value)}
                />
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
                <select onChange={(e) => setDocumentName(e.target.value)}>
                  <option value={documentName}> {documentName} </option>
                  <option value="Passport"> Passport </option>
                  <option value=" Job card issued by NREGA signed by State Government Office">
                    {" "}
                    Job card issued by NREGA signed by State Government Office{" "}
                  </option>
                  <option value=" Driving License issued by Regional Transport Authority">
                    {" "}
                    Driving License issued by Regional Transport Authority{" "}
                  </option>
                  <option value="Voter ID"> Voter ID </option>
                  <option value="Letter from National Population Register">
                    {" "}
                    Letter from National Population Register{" "}
                  </option>
                  <option value="Proof of possession of Aadhaar">
                    {" "}
                    Proof of possession of Aadhaar{" "}
                  </option>
                </select>
              </div>
              <div className="first">
                <p>Documents Number:</p>
                <input
                  type="text"
                  value={documentNumber}
                  onChange={(e) => setDocumentNumber(e.target.value)}
                />
              </div>
              <div className="first">
                <p>City</p>
                <select onChange={(e) => setCity(e.target.value)}>
                  <option value={city}> {city} </option>
                  <option value="Delhi"> Delhi </option>
                </select>
              </div>
            </div>
            <div className="four_sec mt-3">
              <div className="first">
                <p>Purpose of issue</p>
                <input
                  type="text"
                  value={purposeOfIssue}
                  onChange={(e) => setPurposeOfIssue(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Date of issue</p>
                <input
                  type="date"
                  value={dateOfIssue}
                  onChange={(e) => setDateOfIssue(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Country of issue</p>
                <select onChange={(e) => setCountryOfIssue(e.target.value)}>
                  <option value={countryOfIssue}> {countryOfIssue} </option>
                  <option value="India"> India </option>
                </select>
              </div>
            </div>
          </div>

          <button
            className="transaction_center_btn"
            onClick={() => documentHandler()}
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
