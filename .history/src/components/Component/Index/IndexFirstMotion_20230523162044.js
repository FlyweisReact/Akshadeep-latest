import React from 'react'
import Fade from 'react-reveal/Fade';
import img from '../../../Images/a-7.png'

const IndexFirstMotion = () => {
  return (
    <>

<div>
        <Fade bottom>
          <h1>React Reveal</h1>
        </Fade>
      </div>
<div className="main-2-cont">
        <div className="main-2-left">
          <img src={img} alt="" />
        </div>
        <div className="main-2-right">
          <h2>
            Stay top on your <spam className="sp">Forex Exchange</spam>
          </h2>
          <p>Check your forex rates and learn way to use them</p>
          <div className="main-2-r-btn">
            <button className="main-2l-btn">Learn More</button>
            <button className="main-2r-btn">Learn More</button>
          </div>
        </div>
      </div> 

    </>
  )
}

export default IndexFirstMotion