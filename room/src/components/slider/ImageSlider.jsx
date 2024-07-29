import React, { useState } from 'react'
// import '.'

 function ImageSlider ({list}) {

    const [index,setIndex] = useState(0)
    
    console.log(list.length, ' here')
    console.log(index===(list.length-1), ' here')

    const backBtn = () =>{
        setIndex(index===0?list.length-1:index-1)
    }
    const forwardBtn = () =>{
        setIndex(index===(list.length-1)?0:index+1)
    }

    const sliderStyle = {

    }

    const data = list[index]
    
  return (
    <div className='container-hero'>
        <img src={data?.image} alt="img" />
        <div className='col-hero'>
        <div className='text-description'>
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
            <a className='shop-a' href="">Shop now <img src={'/src/assets/images/icon-arrow.svg'} alt='shop now image'/></a>
        </div>
        <div className='a-pagers'>
            <a className='icon-a' onClick={backBtn}><img src={'/src/assets/images/icon-angle-left.svg'} className='icon'/></a>
            <a className='icon-a' onClick={forwardBtn}><img src={'/src/assets/images/icon-angle-right.svg'} className='icon'/></a>
        </div>
        </div>        
</div>
  )
}

 export default ImageSlider 
