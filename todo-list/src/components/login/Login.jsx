import React, { useEffect, useRef, useState } from 'react'
import style from './login.module.css'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login({setLogin,isLoggedIn}) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const passRef = useRef()
    const navigate = useNavigate()

    const BASE_URL = 'http://localhost:3001'


    useEffect(()=>{
        console.log('here',isLoggedIn)
        if(isLoggedIn){
            navigate('/',{replace:true})
        }
        
    },[])

    const login = async () => {  

        let valid = true

        if(username?.toString.trim=='' || !username){
            passRef.current.classList.replace('hide','show')
            valid = false
        }
        if(password?.toString.trim=='' || !password){
            passRef.current.classList.replace('hide','show')
            valid = false
        }  
        if(valid){   
            const response = await axios.get(`${BASE_URL}/users?username=${username}&password=${password}`)
            console.log(response.status)
            if(response.status==200){
                setLogin(true)
                navigate('/',{replace:true})
                return 
            }        
            passRef.current.classList.replace('hide','show')
        }
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1>Login</h1>
                <div className={style.form}>
                    <div className={style.input_col}>
                        <input  type="text" onChange={event=>{
                            setUsername(event.target.value)
                        }} placeholder='Username' />
                    </div>
                    <div className={style.input_col}>
                        <input  type="text" onChange={event=>{
                            setPassword(event.target.value)
                        }} placeholder='Password' />
                        <label ref={passRef} className='error-input hide'>Invalid username or password!</label>
                    </div>
                </div>
                <a href='/'>Having trouble sign in?</a>
                <button onClick={login} id={style.sign_btn}>Sign in</button>
                <div className={style.sign_in_options}>
                    <p>-- Or Sign in with --</p>
                    <ul>
                        <li><FaGoogle/><a href="">Google</a></li>
                        <li><FaApple/><a href="">Apple ID</a></li>
                        <li><FaFacebookF/><a href="">Facebook</a></li>
                    </ul>
                </div>
                <p className={style.no_acc}>Don't have an accoount? <NavLink to="/register">Register</NavLink></p>

            </div>
        </div>
    )
}

export default Login