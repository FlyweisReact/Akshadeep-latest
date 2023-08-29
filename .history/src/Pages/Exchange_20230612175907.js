/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img3 from "../Images/button_after.png";
import img4 from "../Images/button_after -1.png";
import img5 from "../Images/button_after -2.png";
import img7 from "../Images/h3_before.png";
import img8 from "../Images/image.png";
import img9 from "../Images/span.png";
import img10 from "../Images/a.png";
import img11 from "../Images/a-1.png";
import img12 from "../Images/a-2.png";
import img13 from "../Images/a-3.png";
import img14 from "../Images/a-4.png";
import img15 from "../Images/a-5.png";
import img16 from "../Images/a-6.png";
import Footer from "../components/Layout/footer";
import Header from "../components/Layout/Header";
import Fixed from "../components/Component/Fixed";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";
import OtpModal from "../components/Modals/OtpModal";
import RegisterModal from "../components/Modals/RegisterModal";

const Exchange = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showt, setShowt] = useState(false);
  const [show2, setShow2] = useState(false);

  const [currencyt, setCurrency] = useState([]);
  const [cityt, setCity] = useState([]);
  const [amt, setAmt] = useState("0");
  const [currency, setCurrency2] = useState("USD");
  const [convertedAmt, setConAmt] = useState("");
  const [product, setProduct] = useState("");

  const convertAmt = async (amte) => {
    setAmt(amte);
    const url = `https://akashdeep12.vercel.app/betterRate/convertRate/${currency}/${amte}`;
    try {
      const res = await axios.get(url);
      console.log(res?.data?.inrAmount);
      setConAmt(res?.data?.inrAmount);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleConvert = (e) => {
    setAmt(e.target.value);
    convertAmt();
  };

  const getCurrencies = async () => {
    const url = "https://akashdeep12.vercel.app/currency/currencies";
    try {
      const res = await axios.get(url);
      console.log(res?.data);
      setCurrency(res?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getCities = async () => {
    const url = "https://akashdeep12.vercel.app/selectcity/cities";
    try {
      const res = await axios.get(url);
      console.log(res?.data);
      setCity(res?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCurrencies();
    getCities();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [fullname, setName] = useState("");
    const [phoneNumber, setMobile] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      const url = "https://akashdeep12.vercel.app/call/request-callback";
      try {
        const res = await axios.post(url, {
          fullname,
          phoneNumber,
        });
        console.log(res?.data);
        alert("Call back requested !");
      } catch (err) {
        alert(err.response.data.message);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Request callback
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="outline-success"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function MyVerticallyCenteredModal2(props) {
    const [alert, setAlert] = useState("");
    const [currency, setCurrencyt] = useState("");
    const [product, setProduct] = useState("");
    const [city, setCityt] = useState("");
    const [isBetterThan, setIsBetter] = useState("");
    const [emailAt, setEmail] = useState("");
    const [call_sms, setCall] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      const url = "https://akashdeep12.vercel.app/alert/alerts";
      try {
        const res = await axios.post(url, {
          alert,
          currency,
          product,
          city,
          isBetterThan,
          emailAt,
          call_sms,
        });
        console.log(res?.data);
        alert("Alert Set Up successfully !");
      } catch (err) {
        alert(err.response.data.message);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Set Alert
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formSelect">
              <Form.Label>Alert Me When</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setAlert(e.target.value)}
              >
                <option value="">Select</option>
                <option value="buying rate">Buying Rate</option>
                <option value="selling rate">Selling Rate</option>
                <option value="remittance rate">Remittance Rate</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSelect">
              <Form.Label>Currency</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setCurrencyt(e.target.value)}
              >
                <option value="">Select</option>
                {currencyt?.map((ele, i) => (
                  <option value={ele?.addcurrency}>{ele?.addcurrency}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSelect">
              <Form.Label>Product</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setProduct(e.target.value)}
              >
                <option value="">Select</option>
                <option value="currency notes">Currency Notes</option>
                <option value="forex card">Forex Card</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSelect">
              <Form.Label>City</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setCityt(e.target.value)}
              >
                <option value="">Select</option>
                {cityt?.map((ele, i) => (
                  <option value={ele?.selectcity}>{ele?.selectcity}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Is Better Than</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setIsBetter(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email me at</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Call/Sms me at</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setCall(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="outline-success"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function MyVerticallyCenteredModal3(props) {
    const [name, setName] = useState("");
    const [phone, setMobile] = useState("");
    const [currency, setCurrencyt] = useState("");
    const [city, setCityt] = useState("");
    const [email, setEmail] = useState("");
    const [Forexamount, setForex] = useState("");
    const [INRAmount, setINR] = useState("");
    const [product, setProduct] = useState("");
    const [orderType, setOrderType] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      const url = "https://akashdeep12.vercel.app/betterRate/betterRates";
      try {
        const res = await axios.post(url, {
          orderType,
          currency,
          product,
          Forexamount,
          INRAmount,
          name,
          email,
          city,
          phone,
        });
        console.log(res?.data);
        alert("Better Rate requested !");
      } catch (err) {
        alert(err.response.data.message);
      }
    };
    const [selectedValue, setSelectedValue] = useState("");

    const handleForexConvert = async (amt) => {
      setForex(amt);
      const url = `https://akashdeep12.vercel.app/betterRate/convertRate/${currency}/${amt}`;
      try {
        const res = await axios.get(url);
        console.log(res?.data);
        setINR(res?.data?.inrAmount);
      } catch (err) {
        console.log(err.message);
      }
    };

    const handleRadioChange = (event) => {
      setOrderType(event.target.value);
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Request callback
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Order Type</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Buy"
                  name="options"
                  value="buy"
                  checked={selectedValue === "buy"}
                  onChange={handleRadioChange}
                />
                <Form.Check
                  type="radio"
                  label="Sell"
                  name="options"
                  value="sell"
                  checked={selectedValue === "sell"}
                  onChange={handleRadioChange}
                />
                <Form.Check
                  type="radio"
                  label="Remit"
                  name="options"
                  value="remit"
                  checked={selectedValue === "remit"}
                  onChange={handleRadioChange}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Currency</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setCurrencyt(e.target.value)}
              >
                <option value="">Select</option>
                {currencyt?.map((ele, i) => (
                  <option value={ele?.addcurrency}>{ele?.addcurrency}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setProduct(e.target.value)}
              >
                <option value="forext card">Forex Card</option>
                <option value="currency notes">Currency Notes</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Forex Amount</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => handleForexConvert(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>INR Amount</Form.Label>
              <Form.Control type="text" placeholder={INRAmount} />
            </Form.Group>
            <Form.Group controlId="formSelect">
              <Form.Label>City</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setCityt(e.target.value)}
              >
                <option value="">Select</option>
                {cityt?.map((ele, i) => (
                  <option value={ele?.selectcity}>{ele?.selectcity}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="outline-success"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  function OtpModel(props) {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");

    const postOrder = async () => {
      console.log("Post order");
      const url = "https://akashdeep12.vercel.app/bookthisorderr1";
      try {
        const res = await axios.post(url, {
          currencyYouHave: currency,
          CurrencyYouWant: "INR",
          Amount: amt,
          product,
          convertedAmt,
        });
        console.log(res?.data);
        alert("Order booked successfully!");
      } catch (err) {
        console.log(err.message);
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const url = "https://akashdeep12.vercel.app/user/verifySignIn";
      try {
        const res = await axios.post(url, { otp });
        console.log(res?.data);
        postOrder();
      } catch (err) {
        console.log(err.message);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
        <Modal.Body className="Login_Modal">
          <p className="head"> Enter OTP</p>
          <p className="sub_head">
            Enter OTP sent to your registered Mobile Number <br />
            or email
          </p>
          <form>
            <div className="Form_Group">
              <p>OTP</p>
              <input
                type="text"
                placeholder="Enter OTP Here"
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button type="button" className="submit_btn" onClick={handleSubmit}>
              Log IN
            </button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }

  function BookOrderModal(props) {
    const [otpModalShow, setOtpModalShow] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);

    const [mobile, setMobile] = useState("");

    const LoginHandler = async (e) => {
      e.preventDefault();
      try {
        props.onHide();
        setShow5(true);
      } catch (e) {
        console.log(e);
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const url = "https://akashdeep12.vercel.app/user/loginProfile1";
      try {
        const res = await axios.post(url, { phoneNumber: mobile });
        console.log(res?.data);
        alert(res?.data?.otp);
        setShow5(true);
      } catch (err) {
        console.log(err.message);
      }
    };

    return (
      <>
        <OtpModal show={otpModalShow} onHide={() => setOtpModalShow(false)} />
        <RegisterModal
          show={registerModal}
          onHide={() => setRegisterModal(false)}
        />

        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
          <Modal.Body className="Login_Modal">
            <p className="head"> Continue With Your Order</p>
            <form onSubmit={LoginHandler}>
              <div className="Form_Group">
                <p>Mobile Number/ Email Id</p>
                <input
                  type="text"
                  placeholder="Enter Mobile No. / Email ID"
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="submit_btn"
                onClick={handleSubmit}
              >
                Continue
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Fixed />
      <MyVerticallyCenteredModal show={show} onHide={() => setShow(false)} />
      <MyVerticallyCenteredModal2 show={showt} onHide={() => setShowt(false)} />
      <MyVerticallyCenteredModal3 show={show2} onHide={() => setShow2(false)} />
      <BookOrderModal show={show4} onHide={() => setShow4(false)} />
      <OtpModel show={show5} onHide={() => setShow5(false)} />
      <div className="exch-cont">
        <div className="upper_two_sec">
          <h2 className="exch-title">
            Live US Dollar Exchange Rate (USD/INR) Today <br /> in{" "}
            <spam>India</spam>
          </h2>
          <Link to="/rate">
            <button>See Full Rate Card</button>
          </Link>
        </div>

        <div className="exch-left-cont">
          <div className="outer-cont">
            <div className="top-box">
              <div className="top-part-1">
                <div className="top-left">
                  <div class="input-row">
                    <select
                      className="ip"
                      id="timezone"
                      name="timezone"
                      onChange={(e) => setCurrency2(e.target.value)}
                      required
                    >
                      <option>Select Currency</option>
                      {currencyt?.map((ele, i) => (
                        <option
                          style={{ color: "#333" }}
                          value={ele?.addcurrency}
                        >
                          {ele?.addcurrency}
                        </option>
                      ))}
                    </select>
                    <select
                      className="ip"
                      id="timezone"
                      name="timezone"
                      onChange={(e) => setProduct(e.target.value)}
                      required
                    >
                      <option value="currency note">Currency Note</option>
                      <option value="forex card">Forex Card</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Forex Amount"
                      onChange={(e) => convertAmt(e.target.value)}
                    />
                    <input type="text" placeholder={convertedAmt} />
                  </div>
                  <small>
                    1 USD=82.84 INR Interbank/mid-market Rate at: 17-02-2023
                  </small>
                </div>
                <div className="top-right">
                  <p>ADD PRODUCT</p>
                </div>
              </div>

              <h3 className="exch-mid-txt">Request Better Rate</h3>

              <div className="exch-mid-cont">
                <div className="exch-mid-cont-l">
                  <div className="inside-comp">
                    <div className="comp-1">
                      <p>ZERO</p>
                    </div>
                    <div className="comp-2">
                      <p>Commission</p>
                    </div>
                  </div>
                </div>
                <div className="exch-mid-cont-r">
                  <p>
                    Total Amount : <spam>{convertedAmt}</spam>
                  </p>
                </div>
              </div>

              <button className="top-box-btn" onClick={() => setShow4(true)}>
                BOOK THIS ORDER
              </button>
            </div>

            <div className="btn-box">
              <button autoFocus>BUY FOREX</button>
              <button>SELL FOREX</button>
              <button>MONEY TRANSFER</button>
              <button>FOREX CARD</button>
              <button>TRAVEL INS.</button>
            </div>

            <div className="out-btn-box">
              <div className="btn-img">
                <img src={img3} alt="" />
                <button className="bt-img" onClick={() => setShow(true)}>
                  REQUEST CALLBACK
                </button>
              </div>

              <div className="btn-img">
                <img src={img4} alt="" />
                <button className="bt-img" onClick={() => setShowt(true)}>
                  SET A RATE ALERT
                </button>
              </div>

              <div className="btn-img">
                <img src={img5} alt="" />
                <button className="bt-img" onClick={() => setShow2(true)}>
                  BETTER RATE REQUEST
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Currency_Exchange">
        <p className="head">
          Convert USD to INR Online as per Today’s Conversion Rate
        </p>
        <p className="desc">
          Our online currency converter is showing you the value of 1 US Dollar
          in Indian Rupees according to the current foreign exchange rate'of INR
          82.84. Today i.e.Friday 17/02/2023 , for 1 US Dollar you get 82.84
          Indian Rupees. Change in USD to INR rate from previous day is +0.1%.
          Moreover, we have also added the table of the most popular USD to INR
          conversions and historical charts for current, weekly and monthly USD
          to INR rates.
        </p>
        <p className="desc">
          With Loren Ipsum'currency calculator, you can convert US Dollar to
          Indian Rupee at best exchange rates. Our US Dollar to INR rates is
          LIVE and accurate to the last second. We update the rates every 3
          seconds. Loren ipsum.com allows you to check the rates which are
          interbank rates. Interbank rates are the same rates that you see on
          search engines. You won't be able to do better currency conversion
          anywhere else. Loren Ipsum offers the 'most updated and unbeatable
          exchange rates to its customers.
        </p>

        <p className="head">
          How Can I Convert Dollar (USD) to Rupee (INR) in India?{" "}
        </p>
        <p className="desc">
          There are multiple ways to convert USD to INR in India. The
          traditional approach of doing so involved going to banks. You stand in
          the queue and wait for your turn. This was not only time consuming but
          pretty frustrating and even after all the effort, you end up paying a
          high cost. The second way was to search for a money changer where the
          first check is whether they have the desired USD or not.
        </p>
        <p className="desc">
          With that starts the long process of rate haggling and being surprised
          that you are not getting the rate you saw in business news channels.
          The third way was to do it at Airport; however, people realized that
          the cost to exchange USD to INR was way higher and charges were
          exorbitantly high at airports.
        </p>
        <p className="desc">
          The smarter, faster and most economical way which is now being used by
          millions is using the online forex marketplace Loren ipsum. We only
          deal with RBI authorized money changers, and hence you can trust us
          completely. Be smart to book the live rates from the comfort of your
          home with Loren ipsum and get more money for your USD exchange.
        </p>
        <p className="desc">
          As an online foreign exchange marketplace, Loren ipsum provides the
          best USD to INR conversion in contrast to traditional alternatives,
          such as banks and local authorized money changers.
        </p>
      </div>

      <div className="exch-below-cont">
        <div className="faltu">
          <img src={img7} alt="" />
          <h3>USD to INR chart/ Historical USD to INR Rates</h3>
        </div>
        <div className="exch-below-cont-1">
          <div className="exch-below-cont-1-left">
            <h4>US Dollar IBR Rate</h4>
          </div>
          <div className="exch-below-cont-1-right">
            <p>
              1 USD = 82.84 INR Interbank/ mid-market Rate at: 17-02-2023 16:42:
              17
            </p>
          </div>
        </div>

        <div className="exch-box">
          <div className="exch-box-cont">
            <div className="ii">30 Days</div>
            <div className="ia">7 days</div>
            <div className="ia">Today</div>
          </div>
          <img src={img8} alt="" style={{ width: "100%" }} />
        </div>

        <div className="faltu" style={{ margin: "2%" }}>
          <img src={img7} alt="" />
          <h3>Popular USD to INR Conversion Rate</h3>
        </div>

        <div className="exch-below-cont-2">
          <div className="exch-below-cont-2-left">
            <table>
              <tr>
                <th>US Dollar(USD)</th>
                <th>Indian Rupee(INR)</th>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
            </table>
          </div>
          <div className="exch-below-cont-2-right">
            <table>
              <tr>
                <th>US Dollar(USD)</th>
                <th>Indian Rupee(INR)</th>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
              <tr>
                <td>1 USD</td>
                <td>82.84 INR</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className="ExchangeTable">
        <p>1 US Dollar To Indian Rupee Stats</p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Last 30 Days</th>
              <th>Last 90 Days</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>High</td>
              <td>82.8825</td>
              <td>82.925</td>
            </tr>
            <tr>
              <td>Low</td>
              <td>81.25</td>
              <td>81.56</td>
            </tr>

            <tr>
              <td>Average</td>
              <td>81.25</td>
              <td>81.56</td>
            </tr>

            <tr>
              <td>Change</td>
              <td>81.25</td>
              <td>81.56</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="exch-below-cont-4">
        <h3>Currency Information</h3>
        <div className="exch-below-cont-4-cont">
          <div className="exch-below-cont-4-l">
            <div className="faltu">
              <img src={img7} alt="" />
              <h3>USD-US Dollar</h3>
            </div>
            <p>
              Lorem Ipsum is a dummy text showing the place for some real text
              check below to get more details and other facts about the
              currency.
            </p>
            <a href="/">More info</a>
          </div>
          <div className="exch-below-cont-4-r">
            <div className="faltu">
              <img src={img7} alt="" />
              <h3>USD-US Dollar</h3>
            </div>
            <p>
              Lorem Ipsum is a dummy text showing the place for some real text
              check below to get more details and other facts about the
              currency.
            </p>
            <a href="/">More info</a>
          </div>
        </div>
      </div>

      <div className="exch-below-cont-5">
        <div className="extra-comp">
          <div className="exch-grid">
            <div className="exch-grid-item">
              <a href="/">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="/">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="/">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="/">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="/">Convert NZD to INR</a>
            </div>
            <div className="exch-grid-item">
              <a href="/">Convert NZD to INR</a>
            </div>
          </div>
        </div>
      </div>

      <div className="exch-below-cont-6">
        <div className="exch-below-cont-6-1">
          <h4>US Dollars Rates In Other Cities</h4>
          <img src={img9} alt="" />
        </div>

        <div className="form-group-2">
          <select className="ip" id="timezone" name="timezone" required>
            <option value="">Select City</option>
            <option value="EST">Mumbai</option>
            <option value="CST">Delhi</option>
            <option value="PST">Ghaziabad</option>
            <option value="PST">Pune</option>
            <option value="PST">Chennai</option>
            <option value="PST">Banglore</option>
          </select>
        </div>

        <div className="exch-below-6-last">
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
          <img src={img13} alt="" />
          <img src={img14} alt="" />
          <img src={img15} alt="" />
          <img src={img16} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Exchange;
