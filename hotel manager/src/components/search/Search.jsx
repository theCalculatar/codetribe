import React, { useState } from 'react'
import './search.css'

function Search({songs}) {
    const [inputText, setInputText] = useState('')
    const inputHandler = (e) =>{
        let lowerCase = e.target.value.toLowerCase()
        setInputText(lowerCase)
    }
    let datafiltered = songs.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            // return []
        }
        //return the item which contains the user input
        else {
            return el.title.toLowerCase().includes(inputText)
        }
    })

  return (
    <div className='content-1'>
        <input type="text" onChange={inputHandler} placeholder='Search' />
        <ul>
            {datafiltered.map(value=>{
                return <li>
                            <img src={value.image} alt="" />
                            <div className=''>
                                <p>{value.title}</p>
                                <p>{value.artist}</p>
                            </div>
                            
                        </li>
            })}
            
        </ul>
    </div>
  )
}

export default Search