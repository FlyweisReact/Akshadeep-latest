import React from 'react'
import Header from '../components/Layout/Header'

const Rate = () => {
  return (
    <>
        <Header />

        <div className="exch-below-cont-6">
        <div className="exch-below-cont-6-1">
          <h4>US Dollars Rates In Other Cities</h4>
          <img src={img9} alt="" />
        </div>

        <div className="form-group-2">
          <select className="ip" id="timezone" name="timezone" required>
            <option value="">Select City</option>
            <option value="EST">Mumbai</option>
            <option value="CST">Delhi</option>
            <option value="PST">Ghaziabad</option>
            <option value="PST">Pune</option>
            <option value="PST">Chennai</option>
            <option value="PST">Banglore</option>
          </select>
        </div>

        <div className="exch-below-6-last">
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
          <img src={img13} alt="" />
          <img src={img14} alt="" />
          <img src={img15} alt="" />
          <img src={img16} alt="" />
        </div>
      </div>
      
    </>
  )
}

export default Rate