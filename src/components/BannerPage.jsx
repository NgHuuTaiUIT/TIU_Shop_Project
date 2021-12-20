import React from "react";

const BannerPage = props => {
  const { imgBackground, title } = props;
  return (
    <div className="banner-page">
      <div
        className="banner-page__background"
        style={{
          background: `url(${imgBackground}) no-repeat`,
          backgroundSize: "cover"
        }}></div>
      <div className="banner-page__title">
        <h1>{title}</h1>
        <p>
          Home {">"} {title}
        </p>
      </div>
    </div>
  );
};

export default BannerPage;
