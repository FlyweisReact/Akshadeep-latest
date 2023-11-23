/** @format */

import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import img from "../Images/30.png";
import img2 from "../Images/rectangle-341.png";
import img3 from "../Images/logo.png";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import axios from "axios";
import html2pdf from "html2pdf.js";

const TransactionDetail5 = () => {
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
  const data = [" Order Details", "Passenger Details", "Challan Copy"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function NextStep() {
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

  const generatePdf = () => {
    const element = document.getElementById("pdfcont");
    html2pdf().from(element).save("myPDF.pdf");
  };

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
          <div className="travel1">
            <h3>Passenger Details</h3>
            <div className="travel2">
              <div className="travel3">
                <label>Name</label>
                <input type="text" />
              </div>
              <div className="travel3">
                <label>Mobile</label>
                <input type="text" />
              </div>
              <div className="travel3">
                <label>Email</label>
                <input type="text" />
              </div>
              <div className="travel3">
                <label>PAN Card Number</label>
                <input type="text" />
              </div>
              <div className="travel3">
                <label>Upload PanCard</label>
                <input type="file" />
              </div>
              <div className="travel3">
                <label>Passport Number</label>
                <input type="text" />
              </div>
              <div className="travel3">
                <label>Upload Passport</label>
                <input type="file" />
              </div>
            </div>
          </div>
          <button className="transaction_center_btn" onClick={() => NextStep()}>
            Continue
          </button>

          <div className="transaction_details">
            <p className="head">Passenger Details</p>
            <p className="sub_head">Tax Document (PAN Card)</p>
            <form>
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
          <div className="pdf1" id="pdfcont">
            <div className="pdf2">
              <img src={img3} alt="" />
            </div>
            <div className="pdf3">
              <table>
                <thead>
                  <tr>
                    <th>Payment Challan - RTGS/ NEFT/ IMPS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Beneficiary Name</td>
                    <td>OUTWARD REMITTANCE POOL ACCOUNT</td>
                  </tr>
                  <tr>
                    <td>Transaction Amount</td>
                    <td>69,993/-</td>
                  </tr>
                  <tr>
                    <td>Amount In Words</td>
                    <td>Sixty nine thousand nine hundred ninty three</td>
                  </tr>
                  <tr>
                    <td>Beneficiary Account Number</td>
                    <td>0035SLORCBPC</td>
                  </tr>
                  <tr>
                    <td>IFSC Code</td>
                    <td>ICIC0000035</td>
                  </tr>
                  <tr>
                    <td>IFSC Code</td>
                    <td>ICIC0000035</td>
                  </tr>
                  <tr>
                    <td>Bank Name</td>
                    <td> ICICI BANK</td>
                  </tr>
                  <tr>
                    <td>Account Type</td>
                    <td>Current A/C</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pdf3">
              <table>
                <thead>
                  <tr>
                    <th>Customer Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Challan Created On</td>
                    <td>22/5/2023</td>
                  </tr>
                  <tr>
                    <td>CA Number</td>
                    <td>1844209836</td>
                  </tr>
                  <tr>
                    <td>Email Address</td>
                    <td>test@cashfree.com</td>
                  </tr>
                  <tr>
                    <td>Request ID/ Customer ID</td>
                    <td>ergfnbytgfbtgrfbrgdfydrxdfvaregfdb</td>
                  </tr>
                  <tr>
                    <td>Mobile No.</td>
                    <td>987898786776</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button className="pdf4" onClick={generatePdf}>
            Download Challan Copy
          </button>
          <button className="transaction_center_btn" onClick={() => NextStep()}>
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

export default TransactionDetail5;
