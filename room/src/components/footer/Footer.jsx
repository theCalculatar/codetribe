import React from 'react'
import lightImg from'../../assets/images/image-about-light.jpg'
import darkImg from'../../assets/images/image-about-dark.jpg'
import './footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <img src={darkImg} alt="imh" />
      <div className='mid-div'>
        <h4>About our furniture</h4>
        <p>Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.
        </p>
      </div>
      <img src={lightImg} alt="light image" />
    </div>

  )
}

export default Footer