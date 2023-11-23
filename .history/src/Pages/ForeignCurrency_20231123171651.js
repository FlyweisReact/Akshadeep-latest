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
  book_foriegn_currency,
  foriegn_currency_convertor,
  getNCR,
  get_all_types,
} from "../Respository/Repo";

const ForeignCurrency = () => {
  const navigate = useNavigate();
  const [citys, setCitys] = useState([]);
  const [currencyt, setCurrencyt] = useState([]);
  const [type, setType] = useState("BUY");

  // Form Payload
  const [fromCurrency, setFromCurrency] = useState("");
  const fixedCountry = currencyt?.filter((i) => i.addcurrency === "INR");
  const [toCurrency, setToCurr] = useState("");
  const [amount, setAmount] = useState(0);
  const [convertedAmt, setConvertedAmt] = useState(0);

  // Book Forign Order
  const [selectCity, setSelectCity] = useState("");
  const [currencyYouHave, setCurrencyYouHave] = useState("");
  const [currencyYouWant, setCurrencyYouWant] = useState("");
  const [forexAmount, setForexAmount] = useState("");

  const forign_payload = {
    selectCity,
    currencyYouHave,
    currencyYouWant,
    forexAmount,
  };

  const handle_submit = () => {
    book_foriegn_currency(forign_payload, navigate);
  };

  const convertor_payload = {
    fromCurrency,
    toCurrency,
    amount,
  };

  const getCities = () => {
    getNCR(setCitys);
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

  const iHaveCurrency = (e) => {
    const data = JSON.parse(e);
    setFromCurrency(data?.addcurrency);
    setCurrencyYouHave(data?._id);
  };

  const i_want_currency = (e) => {
    const data = JSON.parse(e);
    setToCurr(data?.addcurrency);
    setCurrencyYouWant(data?._id);
  };

  return (
    <>
      <Header />
      <Fixed />
      <div className="currency_Container">
        <div className="Form_Container">
          <div className="two_btns">
            <button
              className={`${type === "BUY" ? "btn-fst" : "btn-2nd"} `}
              onClick={() => setType("BUY")}
            >
              Buy Ipsom Card & Currency
            </button>
            <button
              className={`${type === "SELL" ? "btn-fst" : "btn-2nd"} `}
              onClick={() => setType("SELL")}
            >
              Sell Foreign Currency Notes
            </button>
          </div>

          <div className="form-part-2">
            <div className="row1">
              <div className="col1">
                <select
                  className="ip"
                  onChange={(e) => setSelectCity(e.target.value)}
                >
                  <option>Select City</option>
                  {citys?.map((ele) => (
                    <option value={ele?._id} key={ele?._id}>
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
                  <select
                    className="ip"
                    onChange={(e) => iHaveCurrency(e.target.value)}
                  >
                    <option value="">Select</option>
                    {fixedCountry?.map((ele) => (
                      <option
                        value={JSON.stringify(ele)}
                        key={`Have${ele?._id}`}
                      >
                        {ele?.addcurrency}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col1">
                  <label>Currency you want</label>
                  <select
                    className="ip"
                    onChange={(e) => i_want_currency(e.target.value)}
                  >
                    <option value="">Select</option>
                    {currencyt?.map((ele) => (
                      <option
                        value={JSON.stringify(ele)}
                        key={`Give${ele?._id}`}
                      >
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
                  <select
                    className="ip"
                    onChange={(e) => iHaveCurrency(e.target.value)}
                  >
                    <option value="">Select</option>
                    {currencyt?.map((ele) => (
                      <option
                        value={JSON.stringify(ele)}
                        key={`Sell_have_${ele?._id}`}
                      >
                        {ele?.addcurrency}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col1">
                  <label>Currency you want</label>
                  <select
                    className="ip"
                    onChange={(e) => i_want_currency(e.target.value)}
                  >
                    <option value="">Select</option>
                    {fixedCountry?.map((ele) => (
                      <option
                        value={JSON.stringify(ele)}
                        key={`Sell_Give_${ele?._id}`}
                      >
                        {ele?.addcurrency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div className="row1">
              <div className="col1">
                <input
                  placeholder="Foreign Currency"
                  onChange={(e) => setForexAmount(e.target.value)}
                  type="number"
                  min={0}
                />
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
          </div>

          <div className="main2-bot-cont">
            <button onClick={() => handle_submit()}>BOOK THIS ORDER</button>
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
