/** @format */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../../Images/card-img.png.png";

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
            "Introducing India's First Travel Card with Zero Currency Conversion
            Markup: The Interbank Rate{" "}
            <span style={{ color: "Forex Card" }}>Forex Card</span> "
          </p>

          <div className="slide-cont">
            <div className="left-slide-cont">
              <img src={img} alt="" className="slide-img" />
            </div>
            <div className="right-slide-cont">
              <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default UpperSlider;
