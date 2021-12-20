import React from "react";
import { Link } from "react-router-dom";

const News = props => {
  const { title, image, description } = props;
  return (
    <div className="news">
      <div
        className="news__image"
        style={{
          background: `url("${image}") no-repeat`,
          backgroundSize: "cover"
        }}>
        <Link to="/"></Link>
      </div>
      <div className="news__title">
        <span className="news__blogs">
          <Link to="/blogs/news">NEWS</Link>
        </span>
        <h3>
          <Link to="/">{title}</Link>
        </h3>
      </div>
      <div className="news__description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default News;
