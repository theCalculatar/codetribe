import React, { useEffect, useRef, useState } from 'react'
import './form.css'
import pImg from '../../assets/vinyl.jpg'

function SongForm(props) {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbulm] = useState('')
    const [image, setImage] = useState(pImg)
    const [genre, setGenre] = useState('Amapiano')

    const artRef = useRef(null)
    const titleRef = useRef(null)
    const albulmRef = useRef(null)
    const imageRef = useRef(null)

    const updateImg = () =>{
        imageRef.current.click()
    }


    const addSongs = ()=>{
        props.add(title,artist,album,image,genre)
    }

    const handleImage = async (event) =>{
        const uploadedFile = event.target.files[0]
        const cachedUrl = URL.createObjectURL(uploadedFile)
        setImage(cachedUrl)
    }

    const validator = (value) => {
        const trimedValue = value.trim()
        return !(trimedValue.length<1)
    }

    const formValidator = () =>{
        let valid = true
        if(validator(title)){
            titleRef.current.classList.replace('show','hide')
        }else{
            titleRef.current.classList.replace('hide','show')
            valid = false
        }
        if(validator(album)){
            albulmRef.current.classList.replace('show','hide')
        }else{
            albulmRef.current.classList.replace('hide','show')
            valid = false
        }
        if(validator(artist)){
            artRef.current.classList.replace('show','hide')
        }else{
            artRef.current.classList.replace('hide','show')
            valid = false
        }
        if(valid){
            addSongs()
        }
    }
  return (

    <div className='form'>
        <div className='content'>
            <div className='col-1'>
                <input type="text"  onChange={event=>{
                    setTitle(event.target.value)
                }} placeholder='Song title'/>
                <label  ref={titleRef} className='error-input hide'>Please think about your life?</label>
            </div>
            <div className='col-1'>
                <input  type="text" onChange={event=>{
                    setArtist(event.target.value)
                }} placeholder='Artist' />
                <label ref={artRef} className='error-input hide'>Not the Artist too?</label>

            </div>
            <div  className='col-1 hide' >
                <input type="file"  
                onChange={handleImage} ref={imageRef} placeholder='Image' />

            </div>  
            <div className='col-1'>
                <input type="text" onChange={event=>{
                    setAlbulm(event.target.value)
                }}placeholder='Album name' />  
                <label ref={albulmRef} className='error-input hide'>Are you seriously going to leave me blank???</label>
            </div>  
            <select onChange={event=>{
                setGenre(event.target.value)
            }}>
                <option >Amapiano</option>
                <option >Hip Hop</option>
                <option >Jazz</option>
                <option >Gospel</option>
            </select>
            <div className={'row-1'}>
                <button className='button-save' onClick={formValidator}>Save</button>
                <img src={image} onClick={updateImg} className='picked_img' alt="" />
            </div>
        </div>            
    </div>
  )
}

export default SongForm