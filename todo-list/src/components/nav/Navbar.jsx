import React, { useState } from 'react'
import style from './navbar.module.css'
import { TfiWorld } from "react-icons/tfi";
import { FaArrowRightLong } from "react-icons/fa6";
import Search from '../search/Search';
import { useLocation } from 'react-router-dom';

function Navbar(props,{todos,home}) {
  // const home = props.home
  const [isLoggenIn,setLogin] = useState(false)
  const location = useLocation()

  return (
    <div className={style.navbar} style={{}}>
        <div className={style.col_1}>
            <h2>inotes</h2>
            <hr />
            <a href='mailto:info@inotes.com'>info@inotes.com <FaArrowRightLong/></a>
        </div>
        {isLoggenIn && <Search todos={todos}/>}
        <div className={style.row_1}>
            <ul>
                <li><a className={style.yyyy} href=""><TfiWorld/></a></li>
                {!isLoggenIn&&<li>{location.pathname=='/login'?<a href="/register">Sign up</a>:<a href="login">Sign in</a>}</li>}
                <li><a id={style.demo} href="">Request Demo </a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar