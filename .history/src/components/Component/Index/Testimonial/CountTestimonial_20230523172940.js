import React from 'react'
import img from '../../../../Images/a-33.png'
import img from '../../../../Images/a-34.png'
import img from '../../../../Images/a-35.png'

const CountTestimonial = () => {
  return (
    <div className="bot-part-1">
    <div className="bot-cont-imgs">
      <div>
        <img src={img} alt='' />
        <h6>USD 1 Billion+</h6>
        <p>Exchanged so far</p>
      </div>
      <div>
        <img src={img2} alt='' />
        <h6>3,00,000+</h6>
        <p>Happy Customers</p>
      </div>
      <div>
        <img src={img3} alt='' />
        <h6>5000+</h6>
        <p>Banks and Money Exchangers</p>
      </div>
    </div>
  </div>
  )
}

export default CountTestimonial