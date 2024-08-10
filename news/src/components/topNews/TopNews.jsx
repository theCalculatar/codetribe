import React, { useEffect, useState } from 'react'
import style from './topNews.module.css'
import { LuDot } from "react-icons/lu";
import axios from 'axios';

function TopNews() {
    const API_KEY = '7d098d91d1234b9393a9a4ca62806d8e'

    const [latest, setLatest] = useState([])

    const [news, setTopPart] = useState(null)
    useEffect(()=>{
        const getNews = async () =>{
            try {
                const newsApi = await axios.get(`https://newsapi.org/v2/everything?q=netflix&pageSize=1&sortBy=relevancy&from=2024-08-08&apiKey=${API_KEY}`)
                    setLatest(newsApi.data.articles)
                    setTopPart(newsApi.data.articles[0])
            } catch (error) {
                console.log(error)
            }
        } 
        getNews()
    },[])
  return (
    <div className={style.top_news}>
        <img className={style.img_left} src={news?.urlToImage} alt="img" />
        <div className={style.right}>
            <div className={style.source}>
                <img src={news?.urlToImage} alt="" />
                <p>{news?.author}</p>
                <LuDot/>
                <p>12 minutes ago</p>
            </div>
            <h1>{news?.title}</h1>
            <p>{news?.description}</p>
            <div className={style.catg}>
                <p >{news?.source.name}</p>
                <LuDot/>
                <p>4 min read</p>
            </div>
        </div>
        
    </div>
  )
}

export default TopNews