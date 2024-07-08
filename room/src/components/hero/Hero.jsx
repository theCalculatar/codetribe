import React from 'react'
import imege from '../../assets/images/desktop-image-hero-1.jpg'
import './hero.css'
import fowardE from '../../assets/images/icon-arrow.svg'
import Slider from 'react-slick'

function Hero() {
  var settings = {
        dots: false,
        infinite: false,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
        <Slider {...settings} className='slider'>
          <div className='container-hero'>
              <img src={imege} alt="img" />
              <div className='col-hero'>
                <div className='text-description'>
                  <h1>Discover innovative ways to decorate</h1>
                  <p>We provide unmatched quality, comfort, and style for property owners across the country. 
                    Our experts combine form and function in bringing your vision to life. Create a room in your 
                    own style with our collection and make your property a reflection of you and what you love.</p>
                    <a className='shop-a' href="">Shop now <img src={fowardE}/></a>
                </div>
                <div className='a-pagers'>
                  <a className='icon-a' href=""><img src={'/src/assets/images/icon-angle-left.svg'} width='100px' height='100px' className='icon'/></a>
                  <a className='icon-a' href=""><img src={'/src/assets/images/icon-angle-right.svg'} className='icon'/></a>
                </div>
              </div>        
          </div>
          <div className='container-hero'>
              <img src={imege} alt="img" />
              <div className='col-hero'>
                <div className='text-description'>
                  <h1>Discover innovative ways to decorate</h1>
                  <p>We provide unmatched quality, comfort, and style for property owners across the country. 
                    Our experts combine form and function in bringing your vision to life. Create a room in your 
                    own style with our collection and make your property a reflection of you and what you love.</p>
                    <a className='shop-a' href="">Shop now <img src={fowardE}/></a>
                </div>
                <div className='a-pagers'>
                  <a className='icon-a' href=""><img src={'/src/assets/images/icon-angle-left.svg'} width='100px' height='100px' className='icon'/></a>
                  <a className='icon-a' href=""><img src={'/src/assets/images/icon-angle-right.svg'} className='icon'/></a>
                </div>
              </div>        
          </div>
        </Slider>
    
  )
}


export default Hero
