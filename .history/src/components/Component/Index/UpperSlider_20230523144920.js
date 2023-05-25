/** @format */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../../Images/9.png";
import img1 from "../../../Images/10.png";
import img2 from '../../../Images/11.png'

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
      </Slider>
    </>
  );
};

export default UpperSlider;
