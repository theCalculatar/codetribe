import React from 'react'
import style from './nav.module.css'
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegPenToSquare } from "react-icons/fa6";

function Nav() {
  return (
    <div className={style.nav}>
        <div className={style.row_1}>
            <a href="" className={style.title}>Blutin</a>
            <hr />
            <ul className={style.menu}>
                <li><a href="">Stories</a></li>
                <li><a href="">Creator</a></li>
                <li><a href="">Community</a></li>
                <li><a href="">Subscribe</a></li>
            </ul>
        </div>
        <div className={style.row_2}>
            <ul>
                <li><a href="" className={style.write}><FaRegPenToSquare/> write</a></li>
                <li><IoIosNotificationsOutline className={style.icon}/></li>
                <li><img src="../public/me_pic.jpg" className={style.user} alt="user pic" /></li></ul>
            
        </div>

    </div>
  )
}

export default Nav