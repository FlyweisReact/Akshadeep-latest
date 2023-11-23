/** @format */

import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/footer";
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
import { Store } from "react-notifications-component";
import {
  all_currencies,
  foriegn_currency_convertor,
  get_all_types,
} from "../Respository/Repo";

const ForeignCurrency = () => {
  const navigate = useNavigate();
  const [citys, setCitys] = useState([]);
  const [currencyt, setCurrencyt] = useState([]);
  const [type, setType] = useState("BUY");

  // Form Payload
  const fixedCountry = currencyt?.filter((i) => i.addcurrency === "INR");
  const fromCurrency = fixedCountry?.[0]?.addcurrency;
  const [toCurrency, setToCurr] = useState("");
  const [amount, setAmount] = useState(0);
  const [convertedAmt, setConvertedAmt] = useState(0);

  const convertor_payload = {
    fromCurrency,
    toCurrency,
    amount,
  };

  const getCities = () => {
    get_all_types(setCitys, "city");
  };

  const getCurrencies = () => {
    all_currencies(setCurrencyt);
  };

  useEffect(() => {
    if (amount > 0) {
      foriegn_currency_convertor(convertor_payload, setConvertedAmt);
    }
  }, [amount]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getCities();
    getCurrencies();
    // Store.addNotification({
    //   title: "",
    //   message: "This Service is only available in DELHI NCR",
    //   type: "info",
    //   insert: "top",
    //   container: "top-right",
    //   animationIn: ["animate__animated", "animate__fadeIn"],
    //   animationOut: ["animate__animated", "animate__fadeOut"],
    //   dismiss: {
    //     duration: 5000,
    //     onScreen: true,
    //   },
    // });
  }, []);

  return (
    <>
      <Header />
      <Fixed />
      <div className="currency_Container">
        <div className="Form_Container">
          <div className="two_btns">
            <button className="btn-fst" onClick={() => setType("BUY")}>
              Buy Ipsom Card & Currency
            </button>
            <button className={``} onClick={() => setType("SELL")}>
              Sell Foreign Currency Notes
            </button>
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
            {type === "BUY" ? (
              <div className="row1">
                <div className="col1">
                  <label>Currency you have</label>
                  <select className="ip">
                    <option value="">Select</option>
                    {fixedCountry?.map((ele) => (
                      <option value={ele?.addcurrency}>
                        {ele?.addcurrency}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col1">
                  <label>Currency you want</label>
                  <select
                    className="ip"
                    onChange={(e) => setToCurr(e.target.value)}
                  >
                    <option value="">Select</option>
                    {currencyt?.map((ele) => (
                      <option key={ele?._id} value={ele?.addcurrency}>
                        {ele?.addcurrency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              <div className="row1">
                <div className="col1">
                  <label>Currency you have</label>
                  <select className="ip">
                    <option value="">Select</option>
                    {fixedCountry?.map((ele) => (
                      <option value={ele?.addcurrency}>
                        {ele?.addcurrency}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col1">
                  <label>Currency you want</label>
                  <select
                    className="ip"
                    onChange={(e) => setToCurr(e.target.value)}
                  >
                    <option value="">Select</option>
                    {currencyt?.map((ele) => (
                      <option key={ele?._id} value={ele?.addcurrency}>
                        {ele?.addcurrency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div className="row1">
              <div className="col1">
                <input placeholder="Foreign Currency" type="text" />
              </div>
              <div className="col1">
                <input
                  placeholder="Entered Amount"
                  type="number"
                  onChange={(e) => setAmount(e.target.value)}
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
            {/* <div className="row1">
              <div className="col1 col1-alt-2">
                <h6>Total Amount</h6>
                <div className="img-r-cont">
                  <img src={img2} alt="" />
                  <p>{convertedAmt}</p>
                </div>
              </div>
            </div> */}
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
