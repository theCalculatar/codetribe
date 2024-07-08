import React, { useEffect, useRef } from 'react'
import './song.css'
import { BsThreeDotsVertical } from "react-icons/bs";

function Song({song,setSong}) {
  const songRef = useRef()

  useEffect(()=>{
      songRef.current.addEventListener("click", ()=>{
        setSong({song})
      });
      return ()=>{
        // songRef.current.removeEventListener("click")
      }
  })
  
  return (
    <div className='song' ref={songRef} >
      <div className='song-row'>
        <img className='icon'  src={song.image} alt="image art work" />
        <p>{song.title}</p>
        <p>{song.artist}</p>         
        <p>{song.genre}</p>  
      </div>    
      <BsThreeDotsVertical  onContextMenu={(e)=>{
        e.preventDefault()
        console.log("yipabee");}} className='btn'/>   
    </div>
  )
}

export default Song