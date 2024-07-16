import React, { useRef, useState } from 'react'
import style from './login.module.css'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import  {NavLink} from 'react-router-dom'

function Login() {
    const [Username, setUsername] = useState()
    const [password, setPassword] = useState()
    const unameRef = useRef()
    const passRef = useRef()
  return (
    <div className={style.container}>
        <div className={style.content}>
            <h1>Login</h1>
            <div className={style.form}>
                <div className={style.input_col}>
                    <input  type="text" onChange={event=>{
                        setUsername(event.target.value)
                    }} placeholder='Username' />
                    <label ref={unameRef} className='error-input hide'>Username error!</label>
                </div>
                <div className={style.input_col}>
                    <input  type="text" onChange={event=>{
                        setPassword(event.target.value)
                    }} placeholder='Password' />
                    <label ref={passRef} className='error-input hide'>Invalid password!</label>
                </div>
            </div>
            <a href='/'>Having trouble sign in?</a>
            <a href="/" id={style.sign_btn}>Sign in</a>
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