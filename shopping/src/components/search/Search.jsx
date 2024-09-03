import React, { useEffect, useState } from 'react'
import styles from './search.module.css'
import axios from 'axios'

function Search({setInput}) {

    const inputHandler = (e) =>{
        let lowerCase = e.target.value.toLowerCase()
        setInput(lowerCase)
    }
    // useEffect(()=>{
    //     const  search = async ()=>{ 
    //         const response = await axios.get(`${BASE_URL}/todo`)
    //         const local = response.data
    //         setTodos(local)
    //     }
    //     search()
    // },[])

  return (
    <div className={styles.content}>
        <input type="text" onChange={inputHandler} placeholder='Search' />
    </div>
  )
}

export default Search