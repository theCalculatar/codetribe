import React from 'react'
import style from './navbar.module.css'
import { TfiWorld } from "react-icons/tfi";
import { FaArrowRightLong } from "react-icons/fa6";

function Navbar() {
  return (
    <div className={style.navbar}>
        <div className={style.col_1}>
            <h2>inotes</h2>
            <hr />
            <a href='mailto:a@i.com'>info@inotes.com <FaArrowRightLong/></a>
        </div>
        <div className={style.row_1}>
            <ul>
                <li><a className={style.yyyy} href=""><TfiWorld/></a></li>
                <li><a href="">Sign up</a></li>
                <li><a id={style.demo} href="">Request Demo </a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar