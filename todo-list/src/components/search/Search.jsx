import React, { useEffect, useState } from 'react'
// import './search.module.css'
import styles from './search.module.css'
function Search() {
    const [inputText, setInputText] = useState('')
    const inputHandler = (e) =>{
        let lowerCase = e.target.value.toLowerCase()
        setInputText(lowerCase)
    }
    const [todos,setTodos] = useState( ()=>{ 
        const local = localStorage.getItem('todos')
        return local?JSON.parse(local):[]}
    )

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
    
    const local = localStorage.getItem('todos')

    useEffect(()=>{
        setTodos(JSON.parse(local))
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