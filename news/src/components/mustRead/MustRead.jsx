import React from 'react'
import style from './style.module.css'
import { LuDot } from 'react-icons/lu'

function MustRead() {
  return (
    <div className={style.container}>
        <div className={style.top}>
            <h1>Must read</h1> 
            <a href="">See all</a>
        </div>         <div className={style.content}>
            <div className={style.left}>
                <img src="../public/me_pic.jpg" alt="" />
                <div className={style.source}>
                    <img src="../public/me_pic.jpg" alt="" />
                    <p>Netflix</p>
                    <LuDot/>
                    <p>12 minutes ago</p>
                </div>
                <h3>Where To Watch 'John Wick: Chapter 4'</h3>
                <p>There's been no official announcement regarding John Wick:
                    Chapter 4's streaming release. However, given it's a Lionsgate
                    film, John Wick: Chapter 4 will eventually be released on Starz,.</p>
                <div className={style.catg}>
                    <p className={style.p_catg}>Movies</p>
                    <LuDot/>
                    <p>4 min read</p>
                </div>
            </div>
            {/* MIDDLE PART */}
            <div className={style.middle}>
                <img src="../public/me_pic.jpg" alt="" />
                <div className={style.abs}>
                    <div className={style.source}>
                    <img src="../public/me_pic.jpg" alt="" />
                        <p>Netflix</p>
                        <LuDot/>
                        <p>12 minutes ago</p>
                    </div>
                    <h3>Where To Watch 'John Wick: Chapter 4'</h3>
                    <p>There's been no official announcement regarding John Wick:
                        Chapter 4's streaming release. However, given it's a Lionsgate
                        film, John Wick: Chapter 4 will eventually be released on Starz,.</p>
                    <div className={style.catg}>
                        <p className={style.p_catg}>Movies</p>
                        <LuDot/>
                        <p>4 min read</p>
                    </div>                     
                </div>
            </div>
            <div className={style.right}>
                <div className={style.card}>
                    <img src="../public/me_pic.jpg" alt="" />
                    <div className={style.source}>
                        <p>Netflix</p>
                        <LuDot/>
                        <p>12 minutes ago</p>
                    </div>
                    <h3>Where To Watch 'John Wick: Chapter 4'</h3>
                    <div className={style.catg}>
                        <p className={style.p_catg}>Movies</p>
                        <LuDot/>
                        <p>4 min read</p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="../public/me_pic.jpg" alt="" />
                    <div className={style.source}>
                        <p>Netflix</p>
                        <LuDot/>
                        <p>12 minutes ago</p>
                    </div>
                    <h3>Where To Watch 'John Wick: Chapter 4'</h3>
                    <div className={style.catg}>
                        <p className={style.p_catg}>Movies</p>
                        <LuDot/>
                        <p>4 min read</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MustRead