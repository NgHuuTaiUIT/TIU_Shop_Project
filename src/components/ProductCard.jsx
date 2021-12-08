import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = props => {
  const { title, images, price, slug, link } = props;
  return (
    <div className="product-card">
      <div className="product-card__status">New</div>
      <Link to={link}>
        <div className="product-card__images">
          {images.map((image, index) => (
            <img src={image} alt="product" className="show" />
          ))}
        </div>
        <div className="product-card__info">
          <h3 className="item product-card__info__title">{title}</h3>
          <div className="item product-card__info__price">
            ${Math.floor(price * 0.8)}
            <span className="item product-card__info__price__old">
              <del>${price}</del>
            </span>
          </div>
          <div className="item product-card__info__select">
            <ul>
              {images.map((image, index) => (
                <li
                  className="item product-card__info__select__color"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover"
                  }}>
                  {/* <img src={image} alt="product" /> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
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
