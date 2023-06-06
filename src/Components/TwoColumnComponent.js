import React from 'react';
import '../Css/TwoColumnComponent.css';

const TwoColumnComponent = ({newsData}) => {
  if (!newsData || newsData.length === 0) {
    return <h2>Loading...</h2>; 
  }

  const newsItemsWithImages = newsData.slice(53).filter(news => news.image_url);

  return (
    <div className="two-column-container">
      <div className="column">
        {newsItemsWithImages.slice(0, 2).map((newsItem, index) => (
          <React.Fragment key={index}>
            <a href={newsItem.link} target="_blank" rel="noreferrer">
              <img src={newsItem.image_url} alt={newsItem.title} />
              <h3>{newsItem.title}</h3>
            </a>
          </React.Fragment>
        ))}
      </div>
      <div className="column">
        {newsItemsWithImages.slice(2, 4).map((newsItem, index) => (
          <React.Fragment key={index}>
            <a href={newsItem.link} target="_blank" rel="noreferrer">
              <img src={newsItem.image_url} alt={newsItem.title} />
              <h3>{newsItem.title}</h3>
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TwoColumnComponent;



