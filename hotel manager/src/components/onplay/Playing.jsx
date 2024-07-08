import React from 'react'
import './playing.css'
import { FaPlay } from "react-icons/fa";


function Playing({song}) {
  // const song = {
  //   image:'/src/assets/vinyl.jpg',
  //   title:'Buterfly effect',
  //   artist:'Travis scott',
  //   album:'Beat of 2000'

  // }
  return (
    <div className={song?'playing-card':'hide'}>
        <p className='playing-p'>Playing.</p>
        <img className='icon' src={song?.image} alt="image art work" />
        <h2>{song?.title}</h2>
        <div className='row-3'>
          <div className='col-1c'>
            <p>{song?.artist}</p>
            <p>{song?.album}</p>
          </div>
          <FaPlay className='icon-1'/>
        </div>
  
    </div>
  )
}

export default Playing