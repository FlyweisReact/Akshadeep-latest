/** @format */

import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img3 from "../Images/a-12.png";
import img4 from "../Images/a-11.png";
import img5 from "../Images/a-10.png";
import Header from "../components/Layout/Header";
import logo from "../Images/logo.png";
import IndexFirstMotion from "../components/Component/Index/IndexFirstMotion";
import IndexSecondMotion from "../components/Component/Index/IndexSecondMotion";
import IndexThirdMotion from "../components/Component/Index/IndexThirdMotion";
import CountTestimonial from "../components/Component/Index/Testimonial/CountTestimonial";
import TestimonialSlider from "../components/Component/Index/Testimonial/TestimonialSlider";
import NewsTestimonia from "../components/Component/Index/Testimonial/NewsTestimonial";
import CurrencySlider from "../components/Component/Index/CurrencySlider";
import Fixed from "../components/Component/Fixed";
import Footer from "../components/Layout/footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal, Form, Button } from "react-bootstrap";


const Travel = () => {
  const navigate = useNavigate();
  const [citys, setCitys] = useState([]);
  const [currencyt, setCurrencyt] = useState([]);
  
  /* ==== fields for travel form ==== */

  const [destination, setDestination] = useState("");
  const [ageOfTraveller, setAge] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const getCities = async () => {
    const url = "https://akashdeep12.vercel.app/selectcity/cities";
    try {
      const res = await axios.get(url);
      console.log(res?.data);
      setCitys(res?.data);
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

  useEffect(() => {
    window.scrollTo(0, 0);
    getCities();
    getCurrencies();
    window.scrollTo(0, 0);
    Store.addNotification({
      title: "",
      message: "This Service is only available in PAN INDIA",
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

  const [show2, setShow2] = useState(false);
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
                {citys?.map((ele, i) => (
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

  const handleTravelClick = async(e)=>{
    e.preventDefault();
    const url = "https://akashdeep12.vercel.app/travelInsurance";
    try{
      const res = await axios.post(url, {
        destination, ageOfTraveller, startDate, endDate
      })
      console.log(res?.data);
      navigate("/thanks");
    }catch(err){
      console.log(err.message);
    }
  }

  return (
    <>
      <Header />

      <Fixed />
      <MyVerticallyCenteredModal show={show} onHide={() => setShow(false)} />
      <MyVerticallyCenteredModal2 show={show2} onHide={() => setShow2(false)} />
      <div className="travel_Container">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={3000}
          transitionTime={1000}
          stopOnHover={true}
          showArrows={false}
          showIndicators={false}
        >
          <div className="carousel1"></div>
          <div className="carousel2"></div>
          <div className="carousel3"></div>
        </Carousel>

        <div className="main6-form-cont">
          <div className="mb-3">
            <p>Destination</p>
            <select onChange={(e)=>setDestination(e.target.value)}>
              <option>Select</option>
              {citys?.map((ele, i) => (
                <option value={ele?.selectcity}>{ele?.selectcity}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <p>AGE OF TRAVELLER(S)</p>
            <div className="two-sec_container">
              <input type="text"  onChange={(e)=>setAge(e.target.value)} />
              <button>Add Member</button>
            </div>
          </div>
          <div className="mb-3">
            <p>TRIP START DATE</p>
            <div className="two-sec">
              <input type="date" onChange={(e)=>setStartDate(e.target.value)}/>
              <input type="date" onChange={(e)=>setEndDate(e.target.value)}/>
            </div>
          </div>

          <button className="latBtn" onClick={handleTravelClick} >
            Continue
          </button>
        </div>
      </div>

      <div className="convertor_three_component">
        <div>
          <img src={img3} alt="" />
          <button onClick={() => setShow(true)}>Request Call Back</button>
        </div>
        <div>
          <img src={img4} alt="" />
          <button onClick={() => setShow2(true)}>Set Rate Alert</button>
        </div>
        <div>
          <img src={img5} alt="" />
          <button>Request Better Rate</button>
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

export default Travel;
