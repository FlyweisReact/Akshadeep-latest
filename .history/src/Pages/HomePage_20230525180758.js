import React from 'react'
import Fixed from '../components/Component/Fixed'
import Header from '../components/Layout/Header'

const HomePage = () => {
  return (
    <>
        <Header />
        <Fixed />
        <div className="upper-two-component">
        <div className="left-component">
          <UpperForm />
        </div>
        <div className="right-component">
          <UpperSlider />
        </div>
      </div>
    </>
  )
}

export default HomePage