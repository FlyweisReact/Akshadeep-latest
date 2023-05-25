/** @format */
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../../Images/9.png";
import img1 from "../../../Images/10.png";
import img2 from "../../../Images/11.png";
import img4 from "../../../Images/12.png";
import img5 from '../../../Images/13.png'
import img6 from '../../../Images/14.png'

const UpperSlider = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };


  return (
    <>
    <div className="">

    </div>
      <Slider {...settings}  ref={sliderRef}  className="Slick-Slider">
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
              <img src={img1} alt="" />
            </div>
            <div className="right-comp">
              <div>
                <i class="fa-solid fa-check"></i>
                <p>
                  Horem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit.
                </p>
              </div>
              <div>
                <i class="fa-solid fa-check"></i>
                <p>
                  Horem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit.
                </p>
              </div>
              <div>
                <i class="fa-solid fa-check"></i>
                <p>
                  Horem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit.
                </p>
              </div>
              <div>
                <i class="fa-solid fa-check"></i>
                <p>
                  Horem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-container-div">
          <p>
            Loren Epsom student offer is <br />
            Now Live
          </p>
          <div className="two-comp">
            <div className="left-comp">
              <img src={img2} alt="" />
            </div>
            <div className="right-comp">
              <div>
                <i class="fa-solid fa-check"></i>
                <p>
                  Horem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit.
                </p>
              </div>
              <div>
                <i class="fa-solid fa-check"></i>
                <p>
                  Horem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit.
                </p>
              </div>
              <div>
                <i class="fa-solid fa-check"></i>
                <p>
                  Horem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit.
                </p>
              </div>
              <div>
                <i class="fa-solid fa-check"></i>
                <p>
                  Horem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-container-div">
          <p>
            Buy & Sell foreign currencyp notes online at best <br />
            rates with loren Ipsom
          </p>
          <div className="two-comp">
            <div className="left-comp">
              <img src={img4} alt="" />
            </div>
            <div className="right-comp">
              <div>
                <i class="fa-solid fa-check"></i>
                <p>
                  Horem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit.
                </p>
              </div>
              <div>
                <i class="fa-solid fa-check"></i>
                <p>
                  Horem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit.
                </p>
              </div>
              <div>
                <i class="fa-solid fa-check"></i>
                <p>
                  Horem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit.
                </p>
              </div>
              <div>
                <i class="fa-solid fa-check"></i>
                <p>
                  Horem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      

      </Slider>
      <img src={img5} onClick={prevSlide} alt='' />
      <img src={img6} onClick={nextSlide} alt='' />

    </>
  );
};

export default UpperSlider;
