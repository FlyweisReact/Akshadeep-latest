/** @format */
import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCenterIndex(next),
  };

  const data = [
    {
      img: "https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A=",
      star: 5,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU",
      star: 5,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72aEsvFKoRJpfaWB4G1ftrlpe8tN5O6rPhigr1s7UmPYWxH3PeYE2Z1Gqmv8VnT8qtsc&usqp=CAU",
      star: 5,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1XCuBjTSrvPgRK1cKpsGkdJsxjZzDBzR9Kaxund13Bumhryr2rGjdt10XtlMD3neFzY&usqp=CAU",
      star: 5,
    },
  ];

  return (
    <>
      <div className="Index_testimonial_Slider">
        <p className="head">What our Client Says</p>
        <Slider {...settings} className="Slider_Cont">
      
            <div  >
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1XCuBjTSrvPgRK1cKpsGkdJsxjZzDBzR9Kaxund13Bumhryr2rGjdt10XtlMD3neFzY&usqp=CAU' alt=""  className={centerIndex  === 0 ? 'active-slide' : ''}  />
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div  >
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1XCuBjTSrvPgRK1cKpsGkdJsxjZzDBzR9Kaxund13Bumhryr2rGjdt10XtlMD3neFzY&usqp=CAU' alt="" className={centerIndex  === 1 ? 'active-slide' : ''}  />
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div  >
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1XCuBjTSrvPgRK1cKpsGkdJsxjZzDBzR9Kaxund13Bumhryr2rGjdt10XtlMD3neFzY&usqp=CAU' alt=""  className={centerIndex  === 2 ? 'active-slide' : ''}  />
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div  >
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1XCuBjTSrvPgRK1cKpsGkdJsxjZzDBzR9Kaxund13Bumhryr2rGjdt10XtlMD3neFzY&usqp=CAU' alt=""  className={centerIndex  === 3 ? 'active-slide' : ''}  />
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            {/* <div key={index} >
              <img src={i.img} alt=""  className={activeIndex === 0 ? 'active-slide' : ''}  />
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div> */}
      
        </Slider>

        <div className="content_div">
          <p>
            Torem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc
            vulputate libero et velit <br /> interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
