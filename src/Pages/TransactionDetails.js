/** @format */

import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import img from "../Images/30.png";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchCountryStates,
  fetchStateCities,
  getCountries,
  get_all_types,
  pan_Validation,
  RemitterDetail,
  total_charge_bifurcation,
  updateBeneficiary,
  upload_Documents,
} from "../Respository/Repo";

const TransactionDetails = () => {
  const [step, setStep] = useState(6);
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
  const [document, setDocument] = useState("");

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

  // ---exchangeRate
  const [exchangeRate, setExchangeRate] = useState("");
  const [transferAmountInFCY, setTransferAmountInFCY] = useState("");
  const [chargeData, setChargeData] = useState({});

  const bifurcationPayload = {
    exchangeRate,
    transferAmountInFCY,
    remittenceServiceCharge: 1000,
    purpose: panResponse?.descPurpose,
  };

  async function NextStep() {
    if (step === 3) {
      RemitterDetail(id, RemitterPayload);
    }
    if (step === 4) {
      await updateBeneficiary(id, BeneficiaryPayload);
      total_charge_bifurcation(id, bifurcationPayload, setChargeData);
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
      setExchangeRate(
        panResponse?.convertedAmount / panResponse?.recievingAmount
      );
      setTransferAmountInFCY(panResponse?.convertedAmount);
    }
  }, [panResponse]);

  const validatePin = async (e) => {
    e.preventDefault();
    const payload = { pan: panNum };
    await pan_Validation(id, payload, setPanResponse);
  };

  const documentHandler = async () => {
    const fd = new FormData();
    fd.append("document", document);
    fd.append("documentName", documentName);
    fd.append("documentNumber", documentNumber);
    fd.append("city", city);
    fd.append("purposeOfIssue", purposeOfIssue);
    fd.append("dateOfIssue", dateOfIssue);
    fd.append("countryOfIssue", countryOfIssue);

    await upload_Documents(id, fd, panResponse?.descPurpose, navigate);
  };

  //----
  const [cityArr, setCityArr] = useState([]);
  const [countryArr, setCountryArr] = useState([]);
  const [stateArr, setStateArr] = useState([]);
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");

  useEffect(() => {
    get_all_types(setCountryArr, "country");
  }, []);

  useEffect(() => {
    if (countryId) {
      fetchCountryStates({ setResponse: setStateArr, id: countryId });
    }
  }, [countryId]);

  useEffect(() => {
    if (stateId) {
      fetchStateCities({ setResponse: setCityArr, id: stateId });
    }
  }, [stateId]);

  function state_handler(i) {
    const obj = JSON.parse(i);
    setStateRemitter(obj.selectcity);
    setStateId(obj._id);
  }

  function country_handler(i) {
    const obj = JSON.parse(i);
    setNationalityRemitter(obj.selectcity);
    setCountryId(obj._id);
  }

  function country_handler_2(i) {
    const obj = JSON.parse(i);
    setCountryBeneficiary(obj.selectcity);
    setCountryId(obj._id);
  }
  function state_handler_2(i) {
    const obj = JSON.parse(i);
    setStateBeneficiary(obj.selectcity);
    setStateId(obj._id);
  }

  const clear_fields = () => {
    setBenficiaryId("");
    setAccountHolderName("");
    setSortCode("");
    setTransitCode("");
    setBsbNumber("");
    setRoutingNumber("");
    setRecieverAddress("");
    setPinCodeBeneficaiary("");
    setEmailIdBeneficiary("");
    setRecieverBankName("");
    setRecieverBankCountry("");
    setRecieverBankSwiftCode("");
    setRecieverBankAddress1("");
    setReciverBankAddress2("");
    setRecieverAccountNumber("");
    setCityBeneficiary("");
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
                <p>Nationality</p>
                <select onChange={(e) => country_handler(e.target.value)}>
                  <option>-- Select Nationality --</option>
                  {countryArr?.map((i, index) => (
                    <option key={`city${index}`} value={JSON.stringify(i)}>
                      {" "}
                      {i.selectcity}{" "}
                    </option>
                  ))}
                </select>
              </div>

              <div className="first">
                <p>State</p>
                <select onChange={(e) => state_handler(e.target.value)}>
                  <option>-- Select State --</option>
                  {stateArr?.map((i, index) => (
                    <option key={`city${index}`} value={JSON.stringify(i)}>
                      {" "}
                      {i.selectcity}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div className="first">
                <p>City</p>
                <select onChange={(e) => setCityRemitter(e.target.value)}>
                  <option>-- Select City --</option>
                  {cityArr?.map((i, index) => (
                    <option key={`city${index}`} value={i.selectcity}>
                      {" "}
                      {i.selectcity}{" "}
                    </option>
                  ))}
                </select>
              </div>

              <div className="first">
                <p>Postal Code</p>
                <input
                  type="text"
                  value={postCodeRemitter}
                  onChange={(e) => setpostCodeRemitter(e.target.value)}
                />
              </div>
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
                    <select onChange={(e) => country_handler_2(e.target.value)}>
                      <option>Select</option>
                      {countryArr?.map((i, index) => (
                        <option key={`city${index}`} value={JSON.stringify(i)}>
                          {i.selectcity}
                        </option>
                      ))}
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
                    <select onChange={(e) => state_handler_2(e.target.value)}>
                      <option>-- Select State --</option>
                      {stateArr?.map((i, index) => (
                        <option key={`city${index}`} value={JSON.stringify(i)}>
                          {" "}
                          {i.selectcity}{" "}
                        </option>
                      ))}
                    </select>
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
                <select
                  value={cityBeneficiary}
                  onChange={(e) => setCityBeneficiary(e.target.value)}
                >
                  <option>-- Select City --</option>
                  {cityArr?.map((i, index) => (
                    <option key={`city${index}`} value={i.selectcity}>
                      {" "}
                      {i.selectcity}{" "}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="last_btn">
              <button className="btn" onClick={clear_fields}>
                Clear
              </button>
              <button onClick={() => NextStep()}>Submit</button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      {step === 5 ? (
        <>
          <div className="transaction_details">
            <p className="head">Total Charges bifurcation </p>

            <div className="four_sec mb-3 mt-3">
              <div className="first">
                <p>Exchange Rate</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {chargeData?.exchangeRate}
                </p>
              </div>

              <div className="first">
                <p>Transfer Amount in FCY</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {chargeData?.recievingAmount}
                </p>
              </div>

              <div className="first">
                <p>Total Funding Amount in INR</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {chargeData?.convertedAmount}
                </p>
              </div>
            </div>

            <div className="four_sec mb-3" style={{ marginTop: "3%" }}>
              <div className="first">
                <p>Remittance Service Charge</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {chargeData?.remittenceServiceCharge}
                </p>
              </div>

              <div className="first">
                <p>GST on Charge</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {chargeData?.GstOnCharge}
                </p>
              </div>

              <div className="first">
                <p>GST on Currency Conversion</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {chargeData?.GstOnCurrencyConversion}
                </p>
              </div>
            </div>

            <div className="four_sec mb-3 " style={{ marginTop: "3%" }}>
              <div className="first">
                <p>TCS</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {chargeData?.tcs}
                </p>
              </div>

              <div className="first">
                <p>TCS Flag</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {chargeData?.tcsFlag}
                </p>
              </div>

              <div className="first">
                <p>Total of all Charges and Taxes</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {chargeData?.TotalOfAllCharges}
                </p>
              </div>
            </div>

            <div className="four_sec mb-3 " style={{ marginTop: "3%" }}>
              <div className="first">
                <p>Total Funding Amount in INR</p>
                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {chargeData?.totalFundingInINR}
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
                  <option> Select </option>
                  {cityArr?.map((i, index) => (
                    <option key={`city${index}`} value={i.selectcity}>
                      {" "}
                      {i.selectcity}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div className="first">
                <p>Place of issue</p>
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
                  onChange={(e) => setDateOfIssue(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Country of issue</p>
                <input
                  type="text"
                  value={countryOfIssue}
                  onChange={(e) => setCountryOfIssue(e.target.value)}
                />
              </div>
              <div className="first">
                <p>Document</p>
                <input
                  type="file"
                  onChange={(e) => setDocument(e.target.files[0])}
                />
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
