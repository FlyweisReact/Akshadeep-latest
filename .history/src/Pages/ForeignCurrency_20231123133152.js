/** @format */

import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/footer";
import img from "../Images/Vector 1.png";
import img2 from "../Images/i-1.png";
import img3 from "../Images/a-12.png";
import img4 from "../Images/a-11.png";
import img5 from "../Images/a-10.png";
import Header from "../components/Layout/Header";
import CurrencySlider from "../components/Component/Index/CurrencySlider";
import logo from "../Images/logo.png";
import IndexFirstMotion from "../components/Component/Index/IndexFirstMotion";
import IndexSecondMotion from "../components/Component/Index/IndexSecondMotion";
import IndexThirdMotion from "../components/Component/Index/IndexThirdMotion";
import CountTestimonial from "../components/Component/Index/Testimonial/CountTestimonial";
import TestimonialSlider from "../components/Component/Index/Testimonial/TestimonialSlider";
import NewsTestimonia from "../components/Component/Index/Testimonial/NewsTestimonial";
import Fixed from "../components/Component/Fixed";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal, Form, Button } from "react-bootstrap";
import { Store } from "react-notifications-component";
import BookOrderModal from "./PopupModals/BookOrderModal";

const ForeignCurrency = () => {
  const navigate = useNavigate();
  const [citys, setCitys] = useState([]);
  const [currencyt, setCurrencyt] = useState([]);
  const [fromCurrency, setFromCurr] = useState("");
  const [toCurrency, setToCurr] = useState("");
  const [amount, setAmount] = useState("0");
  const [convertedAmt, setConvertedAmt] = useState("0");

  const getCities = async () => {
    const url = "https://akashdeep12.vercel.app/selectcity/cities";
    try {
      const res = await axios.get(url);
      console.log(res?.data?.data);
      setCitys(res?.data?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getCurrencies = async () => {
    const url = "https://akashdeep12.vercel.app/currency/currencies";
    try {
      const res = await axios.get(url);
      console.log(res?.data);
      setCurrencyt(res?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleConversion = async(amt)=>{
    setAmount(amt);
    const url = "https://akashdeep12.vercel.app/foriegncurrency/convert";
    try{
      const res = await axios.post(url, {
        fromCurrency, toCurrency, amount
      })
      console.log(res?.data?.convertedAmount);
      setConvertedAmt(res?.data?.convertedAmount);
    }catch(err){
      console.log(err.message);
    }
  }



  useEffect(() => {
    window.scrollTo(0, 0);
    getCities();
    getCurrencies();
    window.scrollTo(0, 0);
    Store.addNotification({
      title: "",
      message: "This Service is only available in DELHI NCR",
      type: "info",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  }, []);

  const [show, setShow] = useState(false);

  function MyVerticallyCenteredModal(props) {

    const [fullname, setName] = useState("");
    const [phoneNumber, setMobile] = useState("");


    const handleSubmit = async(e)=>{
      e.preventDefault();
      const url = "https://akashdeep12.vercel.app/call/request-callback";
      try{
        const res = await axios.post(url, {
          fullname, phoneNumber
        })
        console.log(res?.data);
        alert("Call back requested !");
      }catch(err){
        alert(err.response.data.message);
      }

    }

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
              <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" onChange={(e) => setMobile(e.target.value)} />
            </Form.Group>
            <Button variant="outline-success" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const [show2, setShow2] = useState(false);
  function MyVerticallyCenteredModal2(props) {

    const [alert, setAlert] = useState("");
    const [currency, setCurrencyt] = useState("");
    const [product, setProduct] = useState("");
    const [city, setCityt] = useState("");
    const [isBetterThan, setIsBetter] = useState("");
    const [emailAt, setEmail] = useState("");
    const [call_sms, setCall] = useState("");

    const handleSubmit = async(e)=>{
      e.preventDefault();
      const url = "https://akashdeep12.vercel.app/alert/alerts";
      try{
        const res = await axios.post(url, {
          alert, currency, product, city, isBetterThan, emailAt,
           call_sms
        })
        console.log(res?.data);
        alert("Alert Set Up successfully !");
      }catch(err){
        alert(err.response.data.message);
      }

    }

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
            <Form.Control as="select" onChange={(e)=>setAlert(e.target.value)}>
            <option value="">Select</option>
              <option value="buying rate">Buying Rate</option>
              <option value="selling rate">Selling Rate</option>
              <option value="remittance rate">Remittance Rate</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formSelect">
            <Form.Label>Currency</Form.Label>
            <Form.Control as="select" onChange={(e)=>setCurrencyt(e.target.value)}>
              <option value="">Select</option>
              {
                currencyt?.map((ele,i)=>(
                  <option value={ele?.addcurrency}>{ele?.addcurrency}</option>
                ))
              } 
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formSelect">
            <Form.Label>Product</Form.Label>
            <Form.Control as="select" onChange={(e)=>setProduct(e.target.value)}>
            <option value="">Select</option>
              <option value="currency notes">Currency Notes</option>
              <option value="forex card">Forex Card</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formSelect">
            <Form.Label>City</Form.Label>
            <Form.Control as="select" onChange={(e)=>setCityt(e.target.value)}>
            <option value="">Select</option>
            {
              citys?.map((ele,i)=>(
                <option value={ele?.selectcity}>{ele?.selectcity}</option>
              ))
            }
            </Form.Control>
          </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Is Better Than</Form.Label>
              <Form.Control type="text" onChange={(e) => setIsBetter(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email me at</Form.Label>
              <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Call/Sms me at</Form.Label>
              <Form.Control type="text" onChange={(e) => setCall(e.target.value)} />
            </Form.Group>
            <Button variant="outline-success" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const [show3, setShow3] = useState(false);

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
          orderType, currency,product, Forexamount,INRAmount,   name, email, city, 
          phone,
        });
        console.log(res?.data);
        alert("Better Rate requested !");
      } catch (err) {
        alert(err.response.data.message);
      }
    };
    const [selectedValue, setSelectedValue] = useState('');

    const handleForexConvert = async(amt)=>{
      setForex(amt);
      const url = `https://akashdeep12.vercel.app/betterRate/convertRate/${currency}/${amt}`;
      try{
        const res = await axios.get(url);
        console.log(res?.data);
        setINR(res?.data?.inrAmount);
      }catch(err){
        console.log(err.message);
      }
    }

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
            checked={selectedValue === 'buy'}
            onChange={handleRadioChange}
          />
          <Form.Check
            type="radio"
            label="Sell"
            name="options"
            value="sell"
            checked={selectedValue === 'sell'}
            onChange={handleRadioChange}
          />
          <Form.Check
            type="radio"
            label="Remit"
            name="options"
            value="remit"
            checked={selectedValue === 'remit'}
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
                onChange={(e)=>handleForexConvert(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>INR Amount</Form.Label>
              <Form.Control
                type="text"
                placeholder={INRAmount}
              />
            </Form.Group>
            <Form.Group controlId="formSelect">
              <Form.Label>City</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setCityt(e.target.value)}
              >
                <option value="">Select</option>
                {citys?.map((ele, i) => (
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

  const [loginst, setLoginSt] = useState(false);

  return (
    <>
      <BookOrderModal show={loginst} onHide={() => setLoginSt(false)} />
      <Header />
      <Fixed />
      <MyVerticallyCenteredModal
        show={show}
        onHide={() => setShow(false)}
      />
      <MyVerticallyCenteredModal2
        show={show2}
        onHide={() => setShow2(false)}
      />
      <MyVerticallyCenteredModal3
        show={show3}
        onHide={() => setShow3(false)}
      />
      <div className="currency_Container">
        <div className="Form_Container">
          <div className="two_btns">
            <button className="btn-fst">Buy Ipsom Card & Currency</button>
            <button className="btn-2nd">Sell Foreign Currency Notes</button>
          </div>

          <div className="form-part-2">
            <div className="row1">
              <div className="col1">
                <select className="ip" id="timezone" name="timezone" required>
                  <option>Select City</option>
                  {citys?.map((ele, i) => (
                    <option value={ele?.selectcity}>{ele?.selectcity}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row1">
              <div className="col1">
                <label>Currency you have</label>
                <select className="ip" id="timezone" onChange={(e)=>setFromCurr(e.target.value)} name="timezone" required>
                  <option value="">Select</option>
                  {currencyt?.map((ele, i) => (
                    <option value={ele?.addcurrency}>{ele?.addcurrency}</option>
                  ))}
                </select>
              </div>
              <div className="col1">
                <label>Currency you want</label>
                <select className="ip" id="timezone" name="timezone" onChange={(e)=>setToCurr(e.target.value)} required>
                  <option value="">Select</option>
                  {currencyt?.map((ele, i) => (
                    <option value={ele?.addcurrency}>{ele?.addcurrency}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row1">
              <div className="col1">
                <input placeholder="Foreign Currency" type="text" />
              </div>
              <div className="col1">
                <input placeholder="Entered  Amount" type="text" onChange={(e)=>handleConversion(e.target.value)}/>
              </div>
            </div>
            <div className="row1">
              <div className="col1"></div>
              
            </div>
            <div className="row1">
              <div className="col1">
              <label>Converted Amount</label>
                <input placeholder={convertedAmt} type="text" />
              </div>
    
            </div>
            {/* <div className="row1">
              <div className="col1 col1-alt">
                <div className="col1-indiv">
                  <p>ZERO</p>
                </div>
                <p>Commission</p>
              </div>
            </div> */}
            <div className="row1">
              <div className="col1 col1-alt-2">
                <h6>Total Amount</h6>
                <div className="img-r-cont">
                  <img src={img2} alt="" />
                  <p>{convertedAmt}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="main2-bot-cont">
            <button>BOOK THIS ORDER</button>
          </div>
        </div>
      </div>

 

      <div className="Index-currency_cont">
        <CurrencySlider />
      </div>

      <div className="Index_center_button" onClick={() => navigate("/rate")}>
        <i className="fa-solid fa-bars"></i>
        <p>See Full Rate Card</p>
      </div>

      <div className="Index_center_Div">
        <img src={logo} alt="" className="logo" />

        <p>The Lorem ipsum Advantage</p>
        <hr />
      </div>

      <div className="Index_First_Motion">
        <IndexFirstMotion />
      </div>

      <div className="Index_Second_Motion">
        <IndexSecondMotion />
      </div>

      <div className="Index_First_Motion">
        <IndexThirdMotion />
      </div>

      <div>
        <CountTestimonial />
      </div>

      <div className="Index_testimonial">
        <p className="Head">Testimonials</p>
        <TestimonialSlider />
      </div>

      <div className="Index_News_testimonial">
        <p className="Head">Media Mentions</p>
        <NewsTestimonia />
      </div>

      <Footer />
    </>
  );
};

export default ForeignCurrency;
