/** @format */

import React, { useState } from "react";
import Header from "./Layout/Header";
import img from "../Images/30.png";

const OP1 = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      <Header />

      <div className="transaction_steps">


      {[1, 2, 3, 4, 5, 6].map((number) => (
    <React.Fragment key={number}>
  {step > number ? (
        <img
          src={img}
          alt=""
          onClick={() => setStep(number)}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <p
          className={step === number ? "active-step" : "step"}
          onClick={() => setStep(number)}
        >
          {number}
        </p>
      )}
      {
        
      }
      <div className={step > number ? "empty-succes" : "empty"}></div>
    
    </React.Fragment>
  ))}

        {/* {step > 1 ? (
          <img
            src={img}
            alt=""
            onClick={() => setStep(1)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <p className="active-step" onClick={() => setStep(1)}>
            1
          </p>
        )}
            {
              step > 1 ?    <div className="empty-succes"></div> :   <div className="empty"></div>
            }


        {
          step > 2 ?  <img
            src={img}
            alt=""
            onClick={() => setStep(1)}
            style={{ cursor: "pointer" }}
          /> : 
          step === 2 ?  <p className="active-step" onClick={() => setStep(2)}>
          2
        </p> :  <p className="step">2</p>
        }
      
      
        {
              step > 2 ?    <div className="empty-succes"></div> :   <div className="empty"></div>
            }

        {
          step > 3 ?  <img
            src={img}
            alt=""
            onClick={() => setStep(3)}
            style={{ cursor: "pointer" }}
          /> : 
          step === 3 ?  <p className="active-step" onClick={() => setStep(3)}>
          3
        </p> :  <p className="step">3</p>
        } 

        {
              step > 3 ?    <div className="empty-succes"></div> :   <div className="empty"></div>
            }

        {
          step > 4 ?  <img
            src={img}
            alt=""
            onClick={() => setStep(4)}
            style={{ cursor: "pointer" }}
          /> : 
          step === 4 ?  <p className="active-step" onClick={() => setStep(4)}>
          4
        </p> :  <p className="step">4</p>
        }
        {
              step > 4 ?    <div className="empty-succes"></div> :   <div className="empty"></div>
            }
      
        {
          step > 5 ?  <img
            src={img}
            alt=""
            onClick={() => setStep(5)}
            style={{ cursor: "pointer" }}
          /> : 
          step === 5 ?  <p className="active-step" onClick={() => setStep(5)}>
          5
        </p> :  <p className="step">5</p>
        } 


        {
              step > 5 ?    <div className="empty-succes"></div> :   <div className="empty"></div>
            }

        {
          step > 6 ?  <img
            src={img}
            alt=""
            onClick={() => setStep(6)}
            style={{ cursor: "pointer" }}
          /> : 
          step === 6 ?  <p className="active-step" onClick={() => setStep(6)}>
          6
        </p> :  <p className="step">6</p>
        } */}


       
     
      </div>

      <div className="transaction_step_content">
        <p className="done" onClick={() => setStep(1)}>
          Order Details
        </p>
        <p className="active" onClick={() => setStep(2)}>
          Transaction Detail
        </p>
        <p>Remitter Detail</p>
        <p> Beneficiaries Detail</p>
        <p>Total Charges Uploaded</p>
        <p>Documents Upload</p>
      </div>

      {/* Step 1 */}
      {step === 1 ? (
        <div className="transaction_details">
          <p className="head">Customer Details</p>
          <p className="sub_head">Tax Document (PAN Card)</p>

          <div className="four_sec">
            <div className="first">
              <p>
                Pan Card <i className="fa-solid fa-exclamation"></i>
              </p>
              <input type="text" />
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

          <button>Validate PAN</button>
        </div>
      ) : (
        ""
      )}

      {/* Step 2 */}

      {step === 2 ? (
        <div className="transaction_details">
          <p className="head">Remitter Details </p>
          <p className="sub_head">
            Note: For single name customers write their name under last name
          </p>

          <div className="four_sec">
            <div className="first">
              <p>
              First Name: 
              </p>
              <input type="text" placeholder="Write first Name" />
            </div>
            <div className="first">
              <p>
              Middle Name:
              </p>
              <input type="text" placeholder="Write Middle Name" />
            </div>
            <div className="first">
              <p>
              Last Name: 
              </p>
              <input type="text" placeholder="Write Last Name" />
            </div>
           
          </div>

          <button>Validate PAN</button>
        </div>
      ) : (
        ""
      )}

      <button
        className="transaction_center_btn"
        onClick={() => setStep(step + 1)}
      >
        Continue
      </button>
    </>
  );
};

export default OP1;
