import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Images/26.png'

const Fixed = () => {
  return (
    <>
    <div className='Fixed_Contact_Img'>
    <Link to='/contact'
    <img src={img} alt='' />
    </div>
    </>
  )
}

export default Fixed