import React from 'react';
import '../Css/ColumnComponent1.css';

const ColumnComponent1 = ({ newsData = [] }) => { 
  console.log(newsData)

  if (!newsData || newsData.length === 0) {
    return <h2>Loading...</h2>; 
  }
  
  const mainNews = newsData.find(news => news.image_url) || {};  
  const remainingNews = newsData.filter(news => news.title !== mainNews.title);

  return (
    <div className="column1">
      {mainNews.image_url && 
        <a href={mainNews.link} target="_blank" rel="noreferrer">
          <img className="big-image" src={mainNews.image_url} alt={mainNews.title} />
        </a>}
      {mainNews.title && 
        <a href={mainNews.link} target="_blank" rel="noreferrer">
          <h3 className="title">{mainNews.title}</h3>
        </a>}
      <div className="headlines">
        {remainingNews.slice(0, 8).map((news) => (
          <div className="headline" key={news.id}>
            <hr />
            <a href={news.link} target="_blank" rel="noreferrer">
              <p>{news.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnComponent1;

