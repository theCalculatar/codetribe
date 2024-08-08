import React, { useState } from 'react'
import style from './latest.module.css'
import { LuDot } from 'react-icons/lu'

function LatestNews() {
    const latest = useState(()=>{return['','','','']})
    console.log(latest)
  return (
    <div className={style.container}>
        <div className={style.top}>
            <h1>Latest news</h1> 
            <a href="">See all</a>
        </div>   
        <div className={style.cards}>
            {
                latest[0].map(element=>{
                    return <div className={style.card}>
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
                })
            }
        </div>
    </div>
  )
}

export default LatestNews