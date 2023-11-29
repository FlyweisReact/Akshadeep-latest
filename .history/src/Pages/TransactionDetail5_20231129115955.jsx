/** @format */

import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import img from "../Images/30.png";
import img3 from "../Images/logo.png";
import "react-phone-input-2/lib/style.css";
import { useNavigate, useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";
import {
  get_challan,
  passenger_detail_foriegncurrency,
} from "../Respository/Repo";

const TransactionDetail5 = () => {
  const { id } = useParams();
  const [step, setStep] = useState(2);
  const navigate = useNavigate();

  // ---
  const [info, setInfo] = useState({});

  // foreign currency
  const [panCard, setPanCard] = useState("");
  const [pan, setPan] = useState("");
  const [passport, setPasspoprt] = useState("");
  const [passportt, setPassportt] = useState("");
  const [visa, setVisa] = useState("");
  const [ticket, setTicket] = useState("");

  const forign_payload = new FormData();
  forign_payload.append("panCard", panCard);
  forign_payload.append("pan", pan);
  forign_payload.append("passport", passport);
  forign_payload.append("passportt", passportt);
  forign_payload.append("visa", visa);
  forign_payload.append("ticket", ticket);

  const data = [" Order Details", "Passenger Details", "Challan Copy"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function NextStep() {
    if (step === 2) {
      handleSubmit();
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

  const handleSubmit = () => {
    passenger_detail_foriegncurrency(id, forign_payload);
  };

  useEffect(() => {
    get_challan(id, setInfo);
  }, [id]);

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
                <p>Pan Card</p>
                <input
                  type="text"
                  onChange={(e) => setPanCard(e.target.value)}
                />
              </div>

              <div className="first">
                <p>Pan Card Image</p>
                <input
                  type="file"
                  onChange={(e) => setPan(e.target.files[0])}
                />
              </div>

              <div className="first">
                <p>Passport</p>
                <input
                  type="text"
                  onChange={(e) => setPasspoprt(e.target.value)}
                />
              </div>

              <div className="first">
                <p>Passport Image</p>
                <input
                  type="file"
                  onChange={(e) => setPassportt(e.target.files[0])}
                />
              </div>

              <div className="first">
                <p>Visa Image</p>
                <input
                  type="file"
                  onChange={(e) => setVisa(e.target.files[0])}
                />
              </div>

              <div className="first">
                <p>Ticket</p>
                <input
                  type="file"
                  onChange={(e) => setTicket(e.target.files[0])}
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
                    <td> {info?.beneficiaryName} </td>
                  </tr>
                  <tr>
                    <td>Transaction Amount</td>
                    <td> {info?.transactionAmount} </td>
                  </tr>
                  <tr>
                    <td>Amount In Words</td>
                    <td> {info?.AmountInWords} </td>
                  </tr>
                  <tr>
                    <td>Beneficiary Account Number</td>
                    <td> {info?.beneficiaryAccountNumber} </td>
                  </tr>
                  <tr>
                    <td>IFSC Code</td>
                    <td> {info?.ifscCode} </td>
                  </tr>

                  <tr>
                    <td>Bank Name</td>
                    <td> {info?.bankNameAndAddress} </td>
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
                    <td> {info?.CA_Number} </td>
                  </tr>
                  <tr>
                    <td>Email Address</td>
                    <td> {info?.emailAddress} </td>
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
