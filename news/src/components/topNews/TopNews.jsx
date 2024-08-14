import React, { useEffect, useState } from 'react';
import style from './topNews.module.css';
import { LuDot } from "react-icons/lu";
import axios from 'axios';
import {postedDate, timeToRead} from '../../utils/Utils';

function TopNews() {
  const [news, setTopPart] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsApi = await axios.get(`https://newsapi.org/v2/everything?q=netflix&pageSize=1&sortBy=relevancy&from=2024-08-08&apiKey=${import.meta.env.VITE_API_KEY}`);
        // setLatest(newsApi.data.articles);
        setTopPart(newsApi.data.articles[0]);
      } catch (error) {
        setError(error.message);
      }
    };
    getNews();
  }, []);

  return (
    <div className={style.top_news}>
      {(
        <>
          <img className={style.img_left} src={news?.urlToImage} alt="img" />
          <div className={style.right}>
            <div className={style.source}>
              <img src={news?.urlToImage} alt="" />
              <p>{news?.author}</p>
              <LuDot />
              <p>{postedDate(news?.publishedAt)}</p>
            </div>
            <h1>{news?.title}</h1>
            <p>{news?.description}</p>
            <div className={style.catg}>
              <p>{news?.source.name}</p>
              <LuDot />
              <p>{news?timeToRead(news?.content):''}</p>
              </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TopNews;