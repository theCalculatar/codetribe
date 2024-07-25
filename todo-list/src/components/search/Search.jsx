import React, { useEffect, useState } from 'react'
// import './search.module.css'
import styles from './search.module.css'
import axios from 'axios'
function Search() {
    const BASE_URL = 'http://localhost:3001'

    const [inputText, setInputText] = useState('')
    const inputHandler = (e) =>{
        let lowerCase = e.target.value.toLowerCase()
        setInputText(lowerCase)
    }
    const [todos,setTodos] = useState([])

    const datafiltered = todos?.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            // return []
        }
        //return the item which contains the user input
        else {
            return el.todo.toLowerCase().includes(inputText)
        }
    })       
    
    // const response = axios.get(`${BASE_URL}/todo`)
    // const local = response.data

    useEffect(()=>{
        const  search = async ()=>{ 
            const response = await axios.get(`${BASE_URL}/todo`)
            const local = response.data
            setTodos(local)
        }
        search()
    },[])

  return (
    <div className={styles.content}>
        <input type="text" onChange={inputHandler} placeholder='Search' />
        <ul className='float-items'>
            {datafiltered?.map(value=>{
                return <li>
                            <div className={styles.todo}>
                                <div>
                                    <h4>{value.todo}</h4>
                                    <p>{value.description}</p>
                                </div>
                            </div>
                        </li>
            })}
            
        </ul>
    </div>
  )
}

export default Search