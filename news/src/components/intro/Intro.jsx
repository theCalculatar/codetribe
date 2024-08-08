import React from 'react'
import style from './intro.module.css'


function Intro() {
  return (
    <div className={style.intro}>
        <h2>Welcome to buletin</h2>
        <p className={style.declr}>Craft narratives that ignite <p className={style.quotes}>Inspiration,</p> <p className={style.quotes}>Knowladge,</p> and <p className={style.quotes}>Entertainment.</p></p>
    </div>
  )
}

export default Intro