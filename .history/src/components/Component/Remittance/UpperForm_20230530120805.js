import React from 'react'

const UpperForm = () => {
  return (
    <div className="Index-Upper-Form">
    <form>
      <div className="form-cont">
        <div className="form-part-1">
          <div className="two-cont" style={{display : 'block'}}>
            <div style={{width : '100%'}} className='mb-3'>
              <label>Select The City You're Located In</label>
              <select>
                <option>Select City</option>
              </select>
            </div>

            <div className='mb-3' style={{width : '100%'}}>
              <label>Please select the option that best describes you</label>
              <select>
                <option>Please select the option that best describes you</option>
              </select>
            </div>
          </div>

          <div className="two-cont">
            <div>
              <label>Enter Forex Amount</label>
              <input type="number" placeholder="Organization/ Individual name" />
            </div>
            <div>
              <label>Enter INR Amount</label>
              <input type="number" placeholder="INR Amount" />
            </div>
          </div>

    
     
        </div>
        <button className="ord-btn">Book this order</button>
      </div>
    </form>
  </div>
  )
}

export default UpperForm