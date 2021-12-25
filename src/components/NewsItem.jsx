import React from "react";
import { Link } from "react-router-dom";

const NewsItem = props => {
  const { title, image, description, timePost, slug } = props;
  return (
    <div className="news-item">
      <div
        className="news-item__image"
        style={{
          background: `url("${image}") no-repeat`,
          backgroundSize: "cover"
        }}>
        <Link to={`/news/${slug}`}></Link>
      </div>
      <div className="news-item__title">
        <span className="news-item__blogs">
          <Link to="/blogs/news-item">{timePost}</Link>
        </span>
        <h3>
          <Link to={`/news/${slug}`}>{title}</Link>
        </h3>
      </div>
      <div className="news-item__description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
