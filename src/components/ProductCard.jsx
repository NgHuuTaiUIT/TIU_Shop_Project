import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import RatingStart from "./RatingStart";

const ProductCard = props => {
  const { title, images, price, slug, link } = props;
  const productSelected = useRef(null);
  const [color, setColor] = useState(0);
  const handleSelectColor = index => {
    setColor(index);
  };

  return (
    <div className="product-card">
      <div className="product-card__action">
        <div className="product-card__action__item add-wishlist">
          <i className="bx bx-heart"></i>
        </div>
        <div className="product-card__action__item add-to-card">
          <i className="bx bx-cart"></i>
        </div>
        <div className="product-card__action__item quick-view">
          <i className="bx bx-search"></i>
        </div>
      </div>
      <Link to={`/catalog/${slug}`}>
        <div className="product-card__images">
          <figure className="product-card__images__figure">New</figure>
          <figure className="product-card__images__figure">New</figure>

          {images.map((image, index) =>
            color === index ? (
              <img key={index} src={image} alt="product" className="show" />
            ) : (
              <img key={index} src={image} alt="product" />
            )
          )}
        </div>
      </Link>

      <div className="product-card__info">
        <RatingStart number={4} />
        <Link to={`/catalog/${slug}`}>
          <h3 className="item product-card__info__title">{title}</h3>
        </Link>
        <div className="item product-card__info__price">
          ${Math.floor(price * 0.8)}
          <span className="item product-card__info__price__old">
            <del>${price}</del>
          </span>
        </div>
        <div className="item product-card__info__select">
          <ul>
            {images.map((image, index) => {
              return color === index ? (
                <li
                  key={index}
                  onClick={() => handleSelectColor(index)}
                  className=" product-card__info__select__color selected"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover"
                  }}>
                  {/* <img src={image} alt="product" /> */}
                </li>
              ) : (
                <li
                  key={index}
                  onClick={() => handleSelectColor(index)}
                  className=" product-card__info__select__color"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover"
                  }}>
                  {/* <img src={image} alt="product" /> */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired
};

export default ProductCard;