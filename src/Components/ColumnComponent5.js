import React from 'react';
import '../Css/ColumnComponent2.css';

const ColumnComponent5 = ({ newsData = [] }) => {

  if (!newsData || newsData.length === 0) {
    return <h2>Loading...</h2>; 
  }

  let slicedNews = newsData.slice(36, 43);

  const newsItemWithImage = slicedNews.find(news => news.image_url) || {};
  const remainingNews = slicedNews.filter(news => news.title !== newsItemWithImage.title);

  return (
    <div className="column2">
      {newsItemWithImage.image_url && 
        <a href={newsItemWithImage.link} target="_blank" rel="noopener noreferrer">
          <img className="medium-image" src={newsItemWithImage.image_url} alt={newsItemWithImage.title} />
        </a>}
      {newsItemWithImage.title &&
        <a href={newsItemWithImage.link} target="_blank" rel="noopener noreferrer">
          <h3 className="title">{newsItemWithImage.title}</h3>
        </a>}
      <div className="headlines">
        {remainingNews.map((news, index) => (
          <div className="headline" key={index}>
            <hr />
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              <p>{news.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnComponent5;

