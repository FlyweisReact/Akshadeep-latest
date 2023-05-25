/** @format */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../../Images/9.png";

const UpperSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings} className="Slick-Slider">
        <div className="slider-container-div">
          <p>
            "Introducing India's First Travel Card with Zero Currency <br />{" "}
            Conversion Markup: The Interbank Rate{" "}
            <span style={{ color: "#0099ff" }}>Forex Card</span> "
          </p>
          <img src={img} alt="" />
        </div>
        <div className="slider-container-div">
          <p>
            Travel Abroad <br /> Pay Like in India
          </p>
          <div className="two-comp">
            <div className="left-comp">
              
            </div>

          </div>
        </div>
        <div className="slider-container-div">
          <p>
            Loren Epsom student offer <br /> is Now Live
          </p>
          <img src={img} alt="" />
        </div>
        <div className="slider-container-div">
          <p>
            Buy & Sell foreign currencyp notes online at best <br /> rates with
            loren Ipsom
          </p>
          <img src={img} alt="" />
        </div>
      </Slider>
    </>
  );
};

export default UpperSlider;
