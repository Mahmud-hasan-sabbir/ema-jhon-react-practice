import React, { useEffect,useState } from 'react';
import News from '../Card/News';

const TopHeadLine = () => {


 const [news, setNews] = useState([]);

 useEffect(() => {
  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f9beecb564ea4ac3b01c57093e648902';
  fetch(url)
   .then(res => res.json())
   .then(data => setNews(data.articles))
   .catch(error => console.error('Error fetching data:', error));
 }, []);

 return (
  <div>
    <h1>HeadLine Count: {news.length} </h1>
    {
     news.map(artical => <News artical = {artical}></News>)
    }
  </div>
 );
};

export default TopHeadLine;