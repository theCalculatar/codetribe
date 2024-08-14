import {React, useEffect,useState} from 'react'
import style from './style.module.css'
import { LuDot } from 'react-icons/lu'
import axios from 'axios'
import {postedDate,timeToRead} from '../../utils/Utils.js'

function MustRead() {
    const [latest, setLatest] = useState([])

    useEffect(()=>{
        const getNews = async () =>{
            try {
                const newsApi = await axios.get(`https://newsapi.org/v2/everything?q=world&pageSize=4&sortBy=relevancy&from=2024-08-08&apiKey=${import.meta.env.VITE_API_KEY}`)
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
            <h1>Must read</h1> 
            <a href="">See all</a>
        </div>
            <div className={style.content}>
                <div className={style.left}>
                    <img src={latest[0]?.urlToImage} alt="" />
                    <div className={style.source}>
                        <img src={latest[0]?.urlToImage} alt="" />
                        <p>{latest[0]?.author}</p>
                        <LuDot/>
                        <p>{postedDate(latest[0]?.publishedAt)}</p>
                    </div>
                    <h3>{latest[0]?.title}</h3>
                    <p>{latest[0]?.description}</p>
                    <div className={style.catg}>
                        <p className={style.p_catg}>Movies</p>
                        <LuDot/>
                        <p>{latest[0]?timeToRead(latest[0]?.content):''}</p>
                    </div>
                </div>
            {/* MIDDLE PART */}
                <div className={style.middle}>
                    <img src={latest[1]?.urlToImage} alt="" />
                    <div className={style.abs}>
                        <div className={style.source}>
                        <img src="../public/me_pic.jpg" alt="" />
                        <p>{latest[1]?.author}</p>
                            <LuDot/>
                            <p>{postedDate(latest[1]?.publishedAt)}</p>
                        </div>
                        <h3>{latest[1]?.title}</h3>
                        <p>{latest[1]?.description}</p>

                        <div className={style.catg}>
                        <p className={style.p_catg}>{latest[1]?.source.name}</p>
                        <LuDot/>
                        <p>{latest[1]?timeToRead(latest[1]?.content):''}</p>
                    </div>                     
                    </div>
                </div>

            {/* RIGHT PART */}
                <div className={style.right}>
                    <div className={style.card}>
                        <img src={latest[2]?.urlToImage} alt="" />
                        <div className={style.source}>
                        <p>{latest[2]?.author}</p>
                            <LuDot/>
                            <p>{postedDate(latest[2]?.publishedAt)}</p>
                        </div>
                        <h3>{latest[2]?.title}</h3>
                        <div className={style.catg}>
                            <p className={style.p_catg}>{latest[2]?.source.name}</p>
                            <LuDot/>
                            {/* <p>{latest[2]?timeToRead(latest[2]?.content):''}</p> */}
                            </div>
                    </div>
                    <div className={style.card}>
                        <img src={latest[3]?.urlToImage} alt="" />
                        <div className={style.source}>
                        <p>{latest[3]?.author}</p>
                            <LuDot/>
                            <p>{postedDate(latest[3]?.publishedAt)}</p>
                        </div>
                        <h3>{latest[3]?.title}</h3>
                        <div className={style.catg}>
                        <p className={style.p_catg}>{latest[3]?.source.name}</p>
                        <LuDot/>
                            {/* <p>{(latest[3]?timeToRead(latest[3].content):'')}</p> */}
                            </div>
                    </div>

                </div>
        </div>
    </div>
  )
}

export default MustRead