/** @format */

import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import img from "../Images/30.png";
import img2 from "../Images/rectangle-341.png";
import img3 from "../Images/uploadimg.png";
import "react-phone-input-2/lib/style.css";
import { useNavigate, useParams } from "react-router-dom";
import { uploadImage, upload_document } from "../Respository/Repo";
import { Modal } from "react-bootstrap";
const data = [" Order Details", "Document Upload", "Calculation Bifurcation"];

// Image Modal

const TransactionDetail3 = () => {
  const [step, setStep] = useState(2);
  const { id } = useParams();
  const navigate = useNavigate();
  const [passportFront, setPasswordFront] = useState("");
  const [passportBack, setPasswordBack] = useState("");
  const [air, setAir] = useState("");
  const [Visa, setVisa] = useState("");
  const [panCard, setPanCard] = useState("");
  const [details, setDetails] = useState({});
  const [uplodedImage, setImg] = useState("");
  const [open, setOpen] = useState(false);

  const payload = {
    uploadPanCard: panCard,
    PassportFront: passportFront,
    PassportBack: passportBack,
    airTicket: air,
    validVisa: Visa,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function NextStep() {
    if (step === 2) {
      upload_document(id, payload, setDetails);
    }
    setStep(step + 1);
    window.scrollTo(0, 0);
  }

  function ImageSelector(id) {
    document.getElementById(id).click();
  }

  function imageUpload(image, setValue) {
    const fd = new FormData();
    fd.append("image", image);
    uploadImage(fd, setValue);
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img
            src={uplodedImage}
            alt=""
            style={{
              display: "block",
              margin: "auto",
              maxWidth: "100%",
              width: "auto",
              height: "auto",
            }}
          />
        </Modal.Body>
      </Modal>
    );
  }

  function openModal(imageUrl) {
    setImg(imageUrl);
    setOpen(true);
  }
  return (
    <>
      <Header />
      <MyVerticallyCenteredModal show={open} onHide={() => setOpen(false)} />

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
                          <input
                            type="file"
                            id="pan"
                            onChange={(e) => {
                              imageUpload(e.target.files[0], setPanCard);
                            }}
                            className="d-none"
                          />
                          <button
                            className="portn-btn"
                            onClick={() => {
                              ImageSelector("pan");
                            }}
                          >
                            Upload
                            <img src={img3} alt="" />
                          </button>
                          <p
                            className="cursor-pointer"
                            onClick={() => openModal(panCard)}
                          >
                            view_file
                          </p>
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
                          <input
                            type="file"
                            id="passportFront"
                            onChange={(e) => {
                              imageUpload(e.target.files[0], setPasswordFront);
                            }}
                            className="d-none"
                          />
                          <button
                            className="portn-btn"
                            onClick={() => ImageSelector("passportFront")}
                          >
                            Upload
                            <img src={img3} alt="" />
                          </button>
                          <p
                            className="cursor-pointer"
                            onClick={() => openModal(passportFront)}
                          >
                            view_file
                          </p>
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
                          <input
                            type="file"
                            id="passportBack"
                            onChange={(e) => {
                              imageUpload(e.target.files[0], setPasswordBack);
                            }}
                            className="d-none"
                          />
                          <button
                            className="portn-btn"
                            onClick={() => ImageSelector("passportBack")}
                          >
                            Upload
                            <img src={img3} alt="" />
                          </button>
                          <p
                            className="cursor-pointer"
                            onClick={() => openModal(passportBack)}
                          >
                            view_file
                          </p>
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
                          <input
                            type="file"
                            id="Air"
                            onChange={(e) => {
                              imageUpload(e.target.files[0], setAir);
                            }}
                            className="d-none"
                          />
                          <button
                            className="portn-btn"
                            onClick={() => ImageSelector("Air")}
                          >
                            Upload
                            <img src={img3} alt="" />
                          </button>
                          <p
                            className="cursor-pointer"
                            onClick={() => openModal(air)}
                          >
                            view_file
                          </p>
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
                          <input
                            type="file"
                            id="visa"
                            onChange={(e) => {
                              imageUpload(e.target.files[0], setVisa);
                            }}
                            className="d-none"
                          />
                          <button
                            className="portn-btn"
                            onClick={() => ImageSelector("visa")}
                          >
                            Upload
                            <img src={img3} alt="" />
                          </button>
                          <p
                            className="cursor-pointer"
                            onClick={() => openModal(Visa)}
                          >
                            view_file
                          </p>
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
                  {details?.exchangeRate}
                </p>
              </div>

              <div className="first">
                <p>Transfer Amount in FCY</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {details?.transferAmountInFCY}
                </p>
              </div>

              <div className="first">
                <p>Total Funding Amount in INR</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {details?.TotalFundingAmtInINR}
                </p>
              </div>
            </div>

            <div className="four_sec mb-3" style={{ marginTop: "3%" }}>
              <div className="first">
                <p>Remittance Service Charge</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {details?.RemittanceServiceCharge}
                </p>
              </div>

              <div className="first">
                <p>GST on Charge</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {details?.GstOnCharge}
                </p>
              </div>

              <div className="first">
                <p>GST on Currency Conversion</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {details?.GstOnCurrencyConversion}
                </p>
              </div>
            </div>

            <div className="four_sec mb-3 " style={{ marginTop: "3%" }}>
              <div className="first">
                <p>TCS</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {details?.TCS}
                </p>
              </div>

              <div className="first">
                <p>TCS Flag</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {details?.TCS_flag}
                </p>
              </div>

              <div className="first">
                <p>Total Funding Amount in INR</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {details?.TotalFundingAmtInINR}
                </p>
              </div>
            </div>

            <div className="four_sec mb-3 " style={{ marginTop: "3%" }}>
              <div className="first">
                <p>Total of all Charges and Taxes</p>

                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  {details?.TotalOfAllChargesAndTaxes}
                </p>
              </div>
            </div>
          </div>

          <button
            className="transaction_center_btn"
            onClick={() => navigate("/bank_details")}
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

export default TransactionDetail3;
