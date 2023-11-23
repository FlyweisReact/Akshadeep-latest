/** @format */

import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import img from "../Images/30.png";
import img3 from "../Images/logo.png";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";

const TransactionDetail5 = () => {
  const [step, setStep] = useState(2);
  const navigate = useNavigate();

  // payload
  const [ forexcard , setForexCard ] = useState("")
  const [ phone , setPhone ] = useState("")
  const [ email , setEmail ] = useState("")


  const data = [" Order Details", "Passenger Details", "Challan Copy"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function NextStep() {
    if (step === 3) {
    }
    if (step === 4) {
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
          <div className="transaction_details">
            <p className="head">Passenger Details</p>
            <div className="four_sec mb-3">
              <div className="first">
                <p>First Name:</p>
                <input
                  type="text"
                  placeholder="Write first Name"
                  name="FirstName"
                />
              </div>
              <div className="first">
                <p>Middle Name:</p>
                <input
                  type="text"
                  placeholder="Write Middle Name"
                  name="MiddleName"
                />
              </div>
              <div className="first">
                <p>Last Name:</p>
                <input
                  type="text"
                  placeholder="Write Last Name"
                  name="LastName"
                />
              </div>
            </div>
          </div>

          <button className="transaction_center_btn">Continue</button>
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
