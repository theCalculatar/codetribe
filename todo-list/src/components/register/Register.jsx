import React, { useEffect, useRef, useState } from 'react'
import style from './register.module.css'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate} from 'react-router-dom'

function Register({setLogin,isLoggedIn}) {
    const [username, setUsername] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const unameRef = useRef()
    const passRef = useRef()
    const nameRef = useRef()
    const navigate = useNavigate()

    useEffect(()=>{
        if(isLoggedIn){
            navigate('/',{replace:true})
        }
    })

    const users = JSON.parse(localStorage.getItem('Users'))

    const register = () => {
        let valid = true

        if(username?.toString.trim=='' || !username){
            unameRef.current.classList.replace('hide','show')
            unameRef.current.innerText='Username cannot be empty!'
            valid = false
        }else{
            unameRef.current.classList.replace('show','hide')
        }
        if(name?.toString.trim=='' || !name){
            nameRef.current.classList.replace('hide','show')
            valid = false
        }else{
            nameRef.current.classList.replace('show','hide')
        }
        if(password?.toString.trim=='' || !password){
            passRef.current.classList.replace('hide','show')
            valid = false
        }else{
            passRef.current.classList.replace('show','hide')  
        }
        if(valid){
            let userExists = false
            if (users){
                users?.filter(element => {
                    !userExists?(userExists = element.username==username):''
                })
                if(userExists){
                    unameRef.current.innerText='Username already exists!'
                    unameRef.current.classList.replace('hide','show')
                    return
                }
                else{
                    localStorage.setItem('Users', JSON.stringify([...users,{name,username,password}]))
                }
            }
        }else {
            localStorage.setItem('Users', JSON.stringify([{name,username,password}]))
        }
            setLogin(true)
            navigate('/')
    }

    
  return (
    <div className={style.container}>
        <div className={style.content}>
            <h1>Register</h1>
            <div className={style.form}>
                <div className={style.input_col}>
                    <input  type="text" onChange={event=>{
                        setName(event.target.value)
                    }} placeholder='Name' />
                    <label ref={nameRef} className='error-input hide'>Field cannot be empty!</label>
                </div>
                <div className={style.input_col}>
                    <input  type="text" onChange={event=>{
                        setUsername(event.target.value)
                    }} placeholder='Username' />
                    <label ref={unameRef} className='error-input hide'></label>
                </div>

                <div className={style.input_col}>
                    <input  type="password" onChange={event=>{
                        setPassword(event.target.value)
                    }} placeholder='Password' />
                    <label ref={passRef} className='error-input hide'>Invalid password!</label>
                </div>
            </div>
            <a href='/'>Having trouble register?</a>
            <button  onClick={register} id={style.sign_btn}>Register</button>
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