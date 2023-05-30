import React from 'react'

const Remittance = () => {
  return (
    <div className="continer_Div">
    <div className="header_Div">
      <Headers />
    </div>
    <div className="content_Div">
    <Fixed />
  <div className="upper-two-component">
    <div className="left-component">
      <UpperForm />
    </div>
    <div className="right-component">
      <UpperSlider />
    </div>
  </div>

  <div className="Index-currency_cont">
    <CurrencySlider />
  </div>

  <div className="Index_center_button">
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
  
    </div>

    <div className="footer_Div">
      <Footer />
    </div>
  </div>
  )
}

export default Remittance