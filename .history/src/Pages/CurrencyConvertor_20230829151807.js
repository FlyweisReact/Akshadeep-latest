/** @format */

import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import img from "../Images/i.png";
import img1 from "../Images/32.png";
import img2 from "../Images/33.png";
import img7 from "../Images/h3_before.png";
import img8 from "../Images/image.png";
import Footer from "../components/Layout/footer";
import axios from "axios";
import { Modal, Form, Button } from "react-bootstrap";
import BookOrderModal from "../components/Modals/BookOrderModal";

const CurrencyConvertor = () => {
  const [bookord, setBookord] = useState(false);
  const [amount, setAmount] = useState("");
  const [convertedAmt, setConvertedAmt] = useState("0");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("");
  const [product, setProduct] = useState("");
  const [forexAmt, setForex] = useState("");
  const [inrAmt, setInr] = useState("0");

  const handleConversion = async () => {
    const url = `https://akashdeep12.vercel.app/betterRate/convertRate/USD/${amount}`;
    try {
      const res = await axios.get(url);
      setConvertedAmt(res?.data?.inrAmount);
    } catch (err) {
      console.log(err.message);
    }
  };

  const [currencyt, setCurrency] = useState([]);
  const [cityt, setCity] = useState([]);

  const getCurrency = async () => {
    const url = "https://akashdeep12.vercel.app/currency/currencies";
    try {
      const res = await axios.get(url);
      setCurrency(res?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getCity = async () => {
    const url = "https://akashdeep12.vercel.app/selectcity/cities";
    try {
      const res = await axios.get(url);
      setCity(res.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
    handleConversion();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getCurrency();
    getCity();
  }, []);

  const handleConversionAmt = async (amt) => {
    setForex(amt);
    const url = `https://akashdeep12.vercel.app/foriegncurrency/convert`;
    try {
      const res = await axios.post(url, {
        fromCurrency: currency1,
        toCurrency: currency2,
        amount: amt,
      });
      console.log(res?.data);
      setInr(res?.data?.convertedAmount);
    } catch (err) {
      console.log(err.message);
    }
  };

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
        alert("AAGYa idharr");
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
                // onChange={(e) => setCityt(e.target.value)}
              >
                <option value="">Select</option>
                {cityt?.map((ele) => (
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

  const handleBookOrder = async (e) => {
    e.preventDefault();
    const url = "https://akashdeep12.vercel.app/bookthisorderr1";
    try {
      const res = await axios.post(url, {
        currencyYouHave: currency1,
        currencyYouWant: currency2,
        product,
        Amount: forexAmt, convertedAmt: inrAmt
      });
      console.log(res?.data);
      alert("Order Booked Successfully!");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Header />
      <MyVerticallyCenteredModal show={show} onHide={() => setShow(false)} />
      <MyVerticallyCenteredModal2 show={show2} onHide={() => setShow2(false)} />
      <BookOrderModal show={bookord} onHide={() => setBookord(false)} />
      <div className="Currency_Convertor">
        <div className="left_container">
          <p className="Head">USD to INR Currency Converter with Live Rate</p>

          <div className="upper">
            <p className="head">USD-INR Currency Converter</p>
            <p className="sub_head">1 USD = 82.40 INR</p>
            <p className="desc">
              Interbank/ mid-market Rate at: 17-02-2023 16:42:17
            </p>
            <div className="two_Div">
              <div className="item">
                <input
                  type="number"
                  placeholder="Enter Foreign Amount"
                  onChange={handleChange}
                />
                <div className="two">
                  <img src={img} alt="" />
                  <p>US Dollar</p>
                </div>
              </div>

              <img src={img1} alt="" className="convertorImg" />
              <div className="item">
                <input type="number" placeholder={convertedAmt} />
                <div className="two">
                  <img
                    src={
                      "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png"
                    }
                    alt=""
                  />
                  <p>US Dollar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="down_Div">
            <div className="Index-Upper-Form">
              <div class="button-container">
                <button autoFocus style={{ fontSize: "12px" }}>
                  Sell US Dollar
                </button>
                <button style={{ fontSize: "12px" }}>Buy US Dollar</button>
                <button style={{ fontSize: "12px" }}>Transfer US Dollar</button>
              </div>

              <form>
                <div className="form-cont" style={{ marginTop: "0" }}>
                  <div className="form-part-1">
                    <div className="two-cont">
                      <div>
                        <label>Currency you have </label>
                        <select onChange={(e) => setCurrency1(e.target.value)}>
                          <option>Select</option>
                          {currencyt?.map((ele, i) => (
                            <option value={ele?.addcurrency}>
                              {ele?.addcurrency}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label>Currency you want</label>
                        <select onChange={(e) => setCurrency2(e.target.value)}>
                          <option>Select</option>
                          {currencyt?.map((ele, i) => (
                            <option value={ele?.addcurrency}>
                              {ele?.addcurrency}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="two-cont mt-3">
                      <div style={{ width: "100%" }}>
                        <select onChange={(e) => setProduct(e.target.value)}>
                          <option value="">Select</option>
                          <option value="forex card">Forex Card</option>
                          <option value="Cash currency">Cash Currency</option>
                        </select>
                      </div>
                    </div>
                    <div className="two-cont mt-3">
                      <div>
                        <input
                          type="number"
                          placeholder="Forex Amount"
                          onChange={(e) => handleConversionAmt(e.target.value)}
                        />
                      </div>
                      <div>
                        <input type="number" placeholder={inrAmt} />
                      </div>
                    </div>
                    <p className="rate">Rate 82.80</p>
                    <div className="two-cont">
                      <div className="two-section">
                        <button>ZERO</button>
                        <p>Commission</p>
                      </div>
                      <div className="two-section">
                        <p className="add">Request Better Rate</p>
                      </div>
                    </div>
                    <p className="rate mb-3" style={{ textAlign: "center" }}>
                      {" "}
                      Total Amount:{" "}
                      <strong>
                        {inrAmt} {currency2}{" "}
                      </strong>{" "}
                    </p>
                  </div>
                  <button
                    className="ord-btn"
                    type="button"
                    onClick={handleBookOrder}
                  >
                    Book this order
                  </button>
                </div>
              </form>
            </div>

            <div className="buttons">
              <button onClick={() => setShow(true)}>Request Call Back</button>
              <button onClick={() => setShow2(true)}>Set Rate Alert</button>
            </div>
          </div>
        </div>

        <div className="right_container">
          <p className="head">Live US Dollar Exchange Rates</p>

          <div className="upperItem">
            <div className="box mb-3">
              <p>
                Best USD Buying Rate <strong>82.98</strong>
              </p>

              <button>Buy USD</button>
            </div>

            <div className="box mb-3">
              <p>
                Best USD Buying Rate <strong>82.98</strong>
              </p>

              <button>Buy USD</button>
            </div>
            <div className="box">
              <p>
                Best USD Buying Rate <strong>82.98</strong>
              </p>

              <button>Buy USD</button>
            </div>
          </div>

          <p
            className="head"
            style={{ color: "#0170C1", textDecoration: "underline" }}
          >
            View All Foreign Currency Exchange Rates
          </p>
        </div>
      </div>

      <div className="Currency_Convertor_Banner">
        <p className="head">
          Convert USD to INR Online as per Today’s Conversion Rate
        </p>

        <div className="main">
          <div>
            <img src={img2} alt="" />
          </div>
          <p>
            Our online currency converter is showing you the value of 1 US
            Dollar in Indian Rupees according to the current foreign exchange
            rate'of INR 82.84. Today i.e.Friday 17/02/2023 , for 1 US Dollar you
            get 82.84 Indian Rupees. Change in USD to INR rate from previous day
            is +0.1%. Moreover, we have also added the table of the most popular
            USD to INR conversions and historical charts for current, weekly and
            monthly USD to INR rates.
          </p>
        </div>

        <p className="desc mb-3">
          There are multiple ways to convert USD to INR in India. The
          traditional approach of doing so involved going to banks. You stand in
          the queue and wait for your turn. This was not only time consuming but
          pretty frustrating and even after all the effort, you end up paying a
          high cost. The second way was to search for a money changer where the
          first check is whether they have the desired USD or not.
        </p>
        <p className="desc">
          The smarter, faster and most economical way which is now being used by
          millions is using the online forex marketplace Loren ipsum. We only
          deal with RBI authorized money changers, and hence you can trust us
          completely. Be smart to book the live rates from the comfort of your
          home with Loren ipsum and get more money for your USD exchange.
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

        <p className="Center">See Full Chart</p>

        <div className="exch-below-cont-2">
          <div className="exch-below-cont-2-left">
            <table>
              <thead>
                <tr>
                  <th>US Dollar(USD)</th>
                  <th>Indian Rupee(INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="Colred">1 USD </td>
                  <td>82.84 INR </td>
                </tr>
                <tr>
                  <td className="Colred">5 USD</td>
                  <td>414.2 INR </td>
                </tr>
                <tr>
                  <td className="Colred">10 USD</td>
                  <td>828.4 INR </td>
                </tr>
                <tr>
                  <td className="Colred">20 USD</td>
                  <td>1656.8 INR </td>
                </tr>
                <tr>
                  <td className="Colred">25 USD</td>
                  <td>2071 INR</td>
                </tr>
                <tr>
                  <td className="Colred">50 USD</td>
                  <td>4142 INR</td>
                </tr>
                <tr>
                  <td className="Colred">100 USD </td>
                  <td>8284 INR </td>
                </tr>
                <tr>
                  <td className="Colred"> 200 USD</td>
                  <td> 16568 INR</td>
                </tr>
                <tr>
                  <td className="Colred">250 USD </td>
                  <td>20710 INR </td>
                </tr>
                <tr>
                  <td className="Colred"> 300 USD</td>
                  <td> 24852 INR</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="exch-below-cont-2-right">
            <table>
              <thead>
                <tr>
                  <th>US Dollar(USD)</th>
                  <th>Indian Rupee(INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="Colred">500 USD</td>
                  <td>41420 INR</td>
                </tr>
                <tr>
                  <td className="Colred">1000 USD</td>
                  <td>82840 INR</td>
                </tr>
                <tr>
                  <td className="Colred">1500 USD</td>
                  <td>124260 INR</td>
                </tr>
                <tr>
                  <td className="Colred">2000 USD</td>
                  <td>165680 INR </td>
                </tr>
                <tr>
                  <td className="Colred">3000 USD</td>
                  <td>248520 INR</td>
                </tr>
                <tr>
                  <td className="Colred">5000 USD</td>
                  <td>414200 INR</td>
                </tr>
                <tr>
                  <td className="Colred">10,000 USD </td>
                  <td>828400 INR </td>
                </tr>
                <tr>
                  <td className="Colred"> 50,000 USD</td>
                  <td> 4142000 INR</td>
                </tr>
                <tr>
                  <td className="Colred">100,000 USD </td>
                  <td>8284000 INR </td>
                </tr>
                <tr>
                  <td className="Colred"> 1 Million USD</td>
                  <td> 82840000 INR</td>
                </tr>
              </tbody>
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
              <h3>USD - US Dollar</h3>
            </div>
            <p>
              The US Dollar is the currency of the United States. The currency
              code for US Dollar is "USD". Click below to get more details and
              facts about US Dollar, its ranking & rates.
            </p>
            <a href="/">More info</a>
          </div>
          <div className="exch-below-cont-4-r">
            <div className="faltu">
              <img src={img7} alt="" />
              <h3>USD - INR Forecast</h3>
            </div>
            <p>
              USD to INR forecast derived from the thorough analysis of USD to
              INR exchange rate via moving averages, buy/sell signals & expert
              chart indicators. Click below to get a detailed USD to INR
              forecast.
            </p>
            <a href="/">More info</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CurrencyConvertor;
