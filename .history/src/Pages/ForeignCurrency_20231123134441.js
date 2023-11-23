/** @format */

import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/footer";
import img2 from "../Images/i-1.png";
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
import { Store } from "react-notifications-component";

const ForeignCurrency = () => {
  const navigate = useNavigate();
  const [citys, setCitys] = useState([]);
  const [currencyt, setCurrencyt] = useState([]);

  const [toCurrency, setToCurr] = useState("");
  const [amount, setAmount] = useState("0");
  const [convertedAmt, setConvertedAmt] = useState("0");

  // Form Payload
  const [fromCurrency, setFromCurr] = useState("");

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

  const handleConversion = async (amt) => {
    setAmount(amt);
    const url = "https://akashdeep12.vercel.app/foriegncurrency/convert";
    try {
      const res = await axios.post(url, {
        fromCurrency,
        toCurrency,
        amount,
      });
      setConvertedAmt(res?.data?.convertedAmount);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getCities();
    getCurrencies();
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

  return (
    <>
      <Header />
      <Fixed />
      <div className="currency_Container">
        <div className="Form_Container">
          <div className="two_btns">
            <button className="btn-fst">Buy Ipsom Card & Currency</button>
            <button className="btn-2nd">Sell Foreign Currency Notes</button>
          </div>

          <div className="form-part-2">
            <div className="row1">
              <div className="col1">
                <select className="ip">
                  <option>Select City</option>
                  {citys?.map((ele) => (
                    <option value={ele?.selectcity} key={ele?._id}>
                      {ele?.selectcity}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row1">
              <div className="col1">
                <label>Currency you have</label>
                <select
                  className="ip"
                  onChange={(e) => setFromCurr(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  {currencyt?.map((ele) => (
                    <option value={ele?.addcurrency}>{ele?.addcurrency}</option>
                  ))}
                </select>
              </div>
              <div className="col1">
                <label>Currency you want</label>
                <select
                  className="ip"
                  id="timezone"
                  name="timezone"
                  onChange={(e) => setToCurr(e.target.value)}
                  required
                >
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
                <input
                  placeholder="Entered  Amount"
                  type="text"
                  onChange={(e) => handleConversion(e.target.value)}
                />
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
