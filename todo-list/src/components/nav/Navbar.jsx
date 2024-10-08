import React, { useState } from 'react'
import style from './navbar.module.css'
import { TfiWorld } from "react-icons/tfi";
import { FaArrowRightLong } from "react-icons/fa6";
import Search from '../search/Search';
import { redirect, useLocation } from 'react-router-dom';
import { LiaSignOutAltSolid } from "react-icons/lia";

function Navbar({isLoggedIn,setLogin}) {
  // const home = props.home
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div className={style.navbar} style={{}}>
        <div className={style.col_1}>
            <h2>inotes</h2>
            <hr />
            <a href='mailto:info@inotes.com'>info@inotes.com <FaArrowRightLong/></a>
        </div>
        {isLoggedIn && <Search/>}
        <div className={style.row_1}>
            <ul>
                <li><a className={style.yyyy} href=""><TfiWorld/></a></li>
                {!isLoggedIn && <li>{currentPath=='/login'?<a href="/register">Sign up</a>:
                                  <a href="login">Sign in</a>}
                                </li>
                  }
                  {isLoggedIn && <li><a onClick={()=>{setLogin(false)
                    window.location.reload()
                  }}><LiaSignOutAltSolid/></a></li>}
                <li><a id={style.demo} href="">Request Demo </a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar