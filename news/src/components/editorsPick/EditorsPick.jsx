import React, { useEffect, useState } from 'react'
import style from './editors.module.css'
import { LuDot } from 'react-icons/lu'
import axios from 'axios'

function EditorsPick() {

    const API_KEY = '7d098d91d1234b9393a9a4ca62806d8e'

    const [latest, setLatest] = useState([])

    const [topPart, setTopPart] = useState(null)
    useEffect(()=>{
        const getNews = async () =>{
            try {
                const newsApi = await axios.get(`https://newsapi.org/v2/everything?q=general&pageSize=5&from=2024-08-08&apiKey=${API_KEY}`)
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
            <h1>Latest news</h1> 
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
                    <p>{topPart?.publishedAt}</p>
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
                    console.log(element)
                    return(
                        <div key={key} className={style.card}>
                            <img src={element.urlToImage} alt="" />
                            <div className={style.source}>
                                <img src={element.urlToImage} alt="" />
                                <p>{element.author}</p>
                                <LuDot/>
                                <p>{element.publishedAt}</p>
                            </div>
                            <h3>{element.title}</h3>
                            <div className={style.catg}>
                                <p className={style.p_catg}>{element.source.name}</p>
                                <LuDot/>
                                <p>4 min read</p>
                            </div>
                        </div>)
                })
            }
        </div>

    </div>
  )
}

export default EditorsPick