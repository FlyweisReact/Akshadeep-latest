/** @format */
import { useState } from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img5 from "../../../Images/15.png";
import img6 from "../../../Images/16.png";

const CurrencySlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(5); 

  useEffect(() => {
    const updateSlidesToShow = () => {
      // Adjust the number of slides to show based on the device width
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };


  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="currency_slider_cont">
        <Slider {...settings} ref={sliderRef} className="currency_slider">
          <div className="Item">
            <p className="head">US Dollar</p>
            <div className="two_sec">
              <p>Buy</p>
              <p>82.87</p>
            </div>
            <div className="two_sec">
              <p>Sell</p>
              <p>82.6564</p>
            </div>
          </div>

          <div className="Item">
            <p className="head">British Pound</p>
            <div className="two_sec">
              <p>Buy</p>
              <p>82.87</p>
            </div>
            <div className="two_sec">
              <p>Sell</p>
              <p>82.6564</p>
            </div>
          </div>

          <div className="Item">
            <p className="head">Euro</p>
            <div className="two_sec">
              <p>Buy</p>
              <p>82.87</p>
            </div>
            <div className="two_sec">
              <p>Sell</p>
              <p>82.6564</p>
            </div>
          </div>

          <div className="Item">
            <p className="head">Australian Dollar</p>
            <div className="two_sec">
              <p>Buy</p>
              <p>82.87</p>
            </div>
            <div className="two_sec">
              <p>Sell</p>
              <p>82.6564</p>
            </div>
          </div>

          <div className="Item">
            <p className="head">Canadian Dollar</p>
            <div className="two_sec">
              <p>Buy</p>
              <p>82.87</p>
            </div>
            <div className="two_sec">
              <p>Sell</p>
              <p>82.6564</p>
            </div>
          </div>
          <div className="Item">
            <p className="head">US Dollar</p>
            <div className="two_sec">
              <p>Buy</p>
              <p>82.87</p>
            </div>
            <div className="two_sec">
              <p>Sell</p>
              <p>82.6564</p>
            </div>
          </div>

          <div className="Item">
            <p className="head">British Pound</p>
            <div className="two_sec">
              <p>Buy</p>
              <p>82.87</p>
            </div>
            <div className="two_sec">
              <p>Sell</p>
              <p>82.6564</p>
            </div>
          </div>

          <div className="Item">
            <p className="head">Euro</p>
            <div className="two_sec">
              <p>Buy</p>
              <p>82.87</p>
            </div>
            <div className="two_sec">
              <p>Sell</p>
              <p>82.6564</p>
            </div>
          </div>

          <div className="Item">
            <p className="head">Australian Dollar</p>
            <div className="two_sec">
              <p>Buy</p>
              <p>82.87</p>
            </div>
            <div className="two_sec">
              <p>Sell</p>
              <p>82.6564</p>
            </div>
          </div>

          <div className="Item">
            <p className="head">Canadian Dollar</p>
            <div className="two_sec">
              <p>Buy</p>
              <p>82.87</p>
            </div>
            <div className="two_sec">
              <p>Sell</p>
              <p>82.6564</p>
            </div>
          </div>
        </Slider>
        <div className="Prev-Next_cont">
          <img src={img5} onClick={prevSlide} className="PrevImg" alt="" />
          <img src={img6} onClick={nextSlide} className="NextImg" alt="" />
        </div>
      </div>
    </>
  );
};

export default CurrencySlider;
