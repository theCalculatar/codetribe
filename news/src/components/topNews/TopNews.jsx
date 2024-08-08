import React from 'react'
import style from './topNews.module.css'
import { LuDot } from "react-icons/lu";

function TopNews() {
  return (
    <div className={style.top_news}>
        <img className={style.img_left} src="../public/me_pic.jpg" alt="img" />
        <div className={style.right}>
            <div className={style.source}>
                <img src="../public/me_pic.jpg" alt="" />
                <p>Netflix</p>
                <LuDot/>
                <p>12 minutes ago</p>
            </div>
            <h1>Where To Watch 'John Wick: Chapter 4'</h1>
            <p>There's been no official announcement regarding John Wick:
                Chapter 4's streaming release. However, given it's a Lionsgate
                film, John Wick: Chapter 4 will eventually be released on Starz,.</p>
            <div className={style.catg}>
                <p >Movies</p>
                <LuDot/>
                <p>4 min read</p>
            </div>
        </div>
        
    </div>
  )
}

export default TopNews