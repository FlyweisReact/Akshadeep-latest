import React from 'react'
import Header from '../components/Layout/Header'
import img from '../Images/34.png'

const ThankYou = () => {
  return (
    <>
        <Header />
        <div className='ThankYou_Div'>
        <div>
        <img src={img} alt='' />
            <p></p>
        </div>

        </div>
    </>
  )
}

export default ThankYou