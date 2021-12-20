import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Banner = props => {
  const { data } = props;
  return (
    <div className="banner">
      {data.map((item, index) => (
        <div className="banner__item" key={index}>
          <div className="banner__item__image">
            <img src={item.path} alt="" />
          </div>
          <div className="banner__item__info">
            <div className="banner__item__info__discount">
              <h3>-{item.percentDiscount}%</h3>
            </div>
            <div className="banner__item__info__title">
              <h3>{item.title}</h3>
            </div>
            <div className="banner__item__info__link">
              <Link to={item.link}>View More</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
