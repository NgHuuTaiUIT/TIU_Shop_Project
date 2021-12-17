import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Grid from "./Grid";

const QuickView = props => {
  const { title, images, price, slug, link, description, size } = props;

  return (
    <div className="quick-view">
      <div className="quick-view__main">
        <div className="quick-view__main__images">
          <div className="main-image">
            <img src={images[0]} alt="" />
          </div>
          <div className="mini-image">
            <Grid col={images.length} gap={20}>
              {images.map((item, index) => (
                <img src={item} alt="" />
              ))}
            </Grid>
          </div>
        </div>
        <div className="quick-view__main__info">
          <div className="info__item quick-view__main__info__title">
            <h3>{title}</h3>
          </div>
          <div className="info__item quick-view__main__info__price">
            ${price} USD
          </div>
          <div className="info__item quick-view__main__info__description">
            {description}
            Material Polyester/Rayon or customizedFeature
            Anti-shrink,Anti-static,breathable,Eco-friendColor Your color or
            customMOQ 2 pieceWe are a manufacturer accepting OEM &amp;
            ODM.Service Customers provide...
          </div>
          <div className="info__item quick-view__main__info__size">
            <div className="label__size">SIZE</div>
            {size.map((item, index) => (
              <div key={index} className="size__item">
                {item}
              </div>
            ))}
          </div>
          <div className="info__item quick-view__main__info__size">
            <div className="label__size">COLOR</div>
            {size.map((item, index) => (
              <div key={index} className="size__item">
                {item}
              </div>
            ))}
          </div>
          <div className="info__item quick-view__main__info__action">
            <div className="quantily">
              <span>1</span>
              <div className="chevron">
                <i className="bx bx-chevron-up"></i>
                <i className="bx bx-chevron-down"></i>
              </div>
            </div>
            <Button backgroundColor={"#fff"} icon="bx bx-cart" animate={true}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="quick-view__close">
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

QuickView.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired
};

export default QuickView;
