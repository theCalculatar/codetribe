import React, { useState,useEffect } from 'react'
import style from './latest.module.css'
import { LuDot } from 'react-icons/lu'
import axios from 'axios'

function LatestNews() {
    // const API_KEY = '7d098d91d1234b9393a9a4ca62806d8e'

    const [latest, setLatest] = useState([])

    useEffect(()=>{
        const getNews = async () =>{
            try {
                const newsApi = await axios.get(`https://newsapi.org/v2/everything?q=everything&pageSize=4&sortBy=relevancy&from=2024-08-08&apiKey=${import.meta.env.VITE_API_KEY}`)
                    setLatest(newsApi.data.articles)
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
        <div className={style.cards}>
            {
                latest.map(element=>{
                    return (<div className={style.card}>
                               <img src={element.urlToImage} alt="" />
                                <div className={style.source}>
                                    <img src={element.urlToImage} alt="" />
                                    <p>{element?.author}</p>
                                    <LuDot/>
                                    <p>12 minutes ago</p>
                                </div>
                                <h3>{element?.title}</h3>
                                <p>{element?.description}</p>
                                <div className={style.catg}>
                                    <p className={style.p_catg}>{element?.source.name}</p>
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

export default LatestNews