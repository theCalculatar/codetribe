import React, { useEffect, useState } from 'react';
import style from './navbar.module.css';
import { TfiWorld } from "react-icons/tfi";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { useLocation } from 'react-router-dom';
import Search from '../search/Search';

function Navbar({setInput}) {
  const location = useLocation()
  const currentPath = location.pathname
  const [isLoggedIn, setLogin] = useState(false)

  useEffect(()=>{
    //init cloud data
    const isLoggedIn = localStorage.getItem('isLoggedIn') !== null
    setLogin(isLoggedIn)
},[])
  return (
    <div className={style.navbar} style={{}}>
        <div className={style.col_1}>
            <h2>Shopping list</h2>
        </div>
        <Search setInput={setInput}/>
        <div className={style.row_1}>
            <ul>
                <li><a className={style.yyyy} href=""><TfiWorld/></a></li>
                {!isLoggedIn && <li>{currentPath=='/login'?<a href="/register">Sign up</a>:
                                  <a href="login">Sign in</a>}
                                </li>
                  }
                  {isLoggedIn && <li><a onClick={()=>{
                    localStorage.removeItem('isLoggedIn')
                    window.location.reload()
                  }}><LiaSignOutAltSolid/></a></li>}
            </ul>
        </div>
    </div>
  )
}

export default Navbar