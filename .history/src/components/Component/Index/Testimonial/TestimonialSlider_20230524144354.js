/** @format */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestimonialSlider = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };
  

  
    return (
      <>
        <div className="Index_testimonial_Slider" >
        <p className="head">What our Client Says</p>
          <Slider {...settings} className='Slider_Cont' >
            <div >
                <img src={'https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A='} alt='' style={{width : '200px'}} />
            </div>
    
            <div >
                <img src={'https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A='} alt='' style={{width : '200px'}} />
            </div>
    
            <div >
                <img src={'https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A='} alt='' style={{width : '200px'}} />
            </div>     
          </Slider>
    
        </div>
      </>
    );
  };
  
export default TestimonialSlider;
