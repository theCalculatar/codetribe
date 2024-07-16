import React, { useRef, useState } from 'react'
import style from './register.module.css'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Register() {
    const [Username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const unameRef = useRef()
    const passRef = useRef()
    
  return (
    <div className={style.container}>
        <div className={style.content}>
            <h1>Register</h1>
            <div className={style.form}>
                <div className={style.input_col}>
                    <input  type="text" onChange={event=>{
                        setUsername(event.target.value)
                    }} placeholder='Username' />
                    <label ref={unameRef} className='error-input hide'>Username error!</label>
                </div>
                <div className={style.input_col}>
                    <input  type="email" onChange={event=>{
                        setEmail(event.target.value)
                    }} placeholder='Email' />
                    <label ref={unameRef} className='error-input hide'>Invalid email!</label>
                </div>
                <div className={style.input_col}>
                    <input  type="password" onChange={event=>{
                        setPassword(event.target.value)
                    }} placeholder='Password' />
                    <label ref={passRef} className='error-input hide'>Invalid password!</label>
                </div>
            </div>
            <a href='/'>Having trouble register?</a>
            <a href="/" id={style.sign_btn}>Register</a>
            <div className={style.sign_in_options}>
                <p>-- Or Sign up with --</p>
                <ul>
                    <li><FaGoogle/><a href="">Google</a></li>
                    <li><FaApple/><a href="">Apple ID</a></li>
                    <li><FaFacebookF/><a href="">Facebook</a></li>
                </ul>
            </div>
            <p className={style.no_acc}>Already have an accoount? <a href="/">Register</a></p>

        </div>
    </div>
  )
}

export default Register