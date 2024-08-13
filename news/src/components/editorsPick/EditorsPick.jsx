import React, { useEffect, useState } from 'react'
import style from './editors.module.css'
import { LuDot } from 'react-icons/lu'
import axios from 'axios'
import {postedDate, timeToRead } from '../../utils/Utils'
// import t from '../../utils/Utils'

function EditorsPick() {
    const [latest, setLatest] = useState([])

    const [topPart, setTopPart] = useState(null)
    useEffect(()=>{
        const getNews = async () =>{
            try {
                const newsApi = await axios.get(`https://newsapi.org/v2/everything?q=general&pageSize=5&from=2024-08-08&apiKey=${import.meta.env.VITE_API_KEY}`)
                    setLatest(newsApi.data.articles)
                    setTopPart(newsApi.data.articles[0])
            } catch (error) {
                console.log(error)
            }
        } 
        getNews()
    },[])

  return (
    <div className={style.container}>
        <div className={style.top}>
            <h1>Editors pick</h1> 
            <a href="">See all</a>
        </div> 
        {/* TOP PART */}
        <div className={style.middle}>
            <img src={topPart?.urlToImage} alt="image" />
            <div className={style.abs}>
                <div className={style.source}>
                <img src={topPart?.urlToImage} alt="" />
                    <p>{topPart?.author}</p>
                    <LuDot/>
                    <p>{postedDate(topPart?.publishedAt)}</p>
                </div>
                <h3>{topPart?.title}</h3>
                <p>{topPart?.description}</p>
                <div className={style.catg}>
                    <p className={style.p_catg}>{topPart?.source.name}</p>
                    <LuDot/>
                    <p>4 min read</p>
                </div>                     
            </div>
        </div>

        {/* BOTTOM PART */}
        <div className={style.cards}>
            {
                latest
                ?.filter((val,index)=>{
                    if(index>=1){
                        return val
                    }
                })
                ?.map((element,key)=>{
                    console.log()
                    return(
                        <div key={key} className={style.card}>
                            <img src={element.urlToImage} alt="" />
                            <div className={style.source}>
                                <img src={element.urlToImage} alt="" />
                                <p>{element.author}</p>
                                <LuDot/>
                                <p>{postedDate(element?.publishedAt)}</p>
                                </div>
                            <h3>{element.title}</h3>
                            <div className={style.catg}>
                                <p className={style.p_catg}>{element.source.name}</p>
                                <LuDot/>
                                <p>{element?timeToRead(element?.content):''}</p>
                                </div>
                        </div>)
                })
            }
        </div>

    </div>
  )
}

export default EditorsPick