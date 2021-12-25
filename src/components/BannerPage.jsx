import React from "react";
import { Link } from "react-router-dom";

const BannerPage = props => {
  const { imgBackground = "", title = "" } = props;
  return (
    <div className="banner-page">
      <div
        className="banner-page__background"
        style={{
          background: `url(${imgBackground}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
      <div className="banner-page__title">
        <h1>{title}</h1>
        <div className="banner-page__title__chevron">
          {/* Home {">"} {title} */}
          <Link to="/">Home</Link>
          <i className="bx bxs-chevrons-right"></i>
          <span>{title}</span>
          {/* <Link to="/">Home</Link> */}
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
