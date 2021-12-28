import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Aos from "aos";

const NewsItem = props => {
  const {
    title,
    image,
    description,
    timePost,
    slug,
    dataAos = "fade-up"
  } = props;

  return (
    <div className="news-item" data-aos={dataAos}>
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
