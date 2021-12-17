import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import RatingStart from "./RatingStart";
import CheckBox from "./CheckBox";
import Button from "./Button";
import randomNumber from "../assets/utils/randomNumber";

const ProductView = props => {
  const { product } = props;

  const [previewImg, setPreviewImg] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const [productSolded, setProductSolded] = useState(1);

  const [hour, setHour] = useState(1);

  const [size, setSize] = useState(0);

  const [color, setColor] = useState(null);

  useEffect(() => {
    setPreviewImg(0);
    setColor(null);
    setSize(0);
    setQuantity(1);
  }, [product]);

  const handleChangeMainImage = index => {
    setColor(index);
    setPreviewImg(index);
  };

  //random number

  useEffect(() => {
    const randomProductSold = setInterval(() => {
      setProductSolded(randomNumber());
      setHour(randomNumber());
    }, 5000);
    return () => {
      clearInterval(randomProductSold);
    };
  }, []);

  const increaseQuantity = () =>
    setQuantity(quantity + 1 === 100 ? quantity : quantity + 1);

  const decreaseQuantity = () =>
    setQuantity(quantity - 1 === 0 ? quantity : quantity - 1);

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          {product.images.map((item, index) => (
            <div
              key={index}
              style={{
                background: `url(${item}) no-repeat`,
                backgroundSize: "cover"
              }}
              className={`product__images__list__item ${
                index === previewImg ? "active" : ""
              }`}
              onClick={() => setPreviewImg(index)}>
              {/* <img src={item} alt="" /> */}
            </div>
          ))}
        </div>
        <div className="product__images__main">
          {product.images.map((item, index) => (
            <img
              key={index}
              src={item}
              alt=""
              className={`${previewImg === index ? "show" : ""}`}
            />
          ))}
        </div>
      </div>
      <div className="product__content">
        <div className="product__content__item product__content__item__title">
          {product.title}
        </div>
        <div className="product__content__item product__content__item__price">
          ${product.price} USD
        </div>
        <div className="product__content__item product__content__item__rating">
          <RatingStart number={5} />
        </div>
        <div className="product__content__item product__content__item__description">
          {product.description}
        </div>
        <div className="product__content__item product__content__item__offer">
          <ul>
            <li>
              <i className="bx bxs-right-arrow"></i>In Stock
            </li>
            <li>
              <i className="bx bxs-right-arrow"></i>Free Delivery
            </li>
            <li>
              <i className="bx bxs-right-arrow"></i>Sale 30% Off Use Code:
              Deal30
            </li>
          </ul>
        </div>
        <div className="product__content__item product__content__item__sold">
          <p className="random__product">
            <span className="product__sold"> {productSolded} </span>
            sold in last
            <span className="hour"> {hour} </span>
            Hour
          </p>
        </div>
        {/* <div className="product__content__item product__content__item__stock"></div> */}
        {/* <div className="product__content__item product__content__item__detail"></div> */}
        <div className="product__content__item product__content__item__size">
          <div className="product__content__item__label">SIZE</div>
          {product.size.map((item, index) => (
            <div
              key={index}
              className={`product__content__item__body size__item ${
                size === index ? "active" : ""
              }`}
              onClick={() => setSize(index)}>
              {item}
            </div>
          ))}
        </div>
        <div className="product__content__item product__content__item__color">
          <div className="product__content__item__label">COLOR</div>
          {product.color.map((item, index) => (
            // <div
            //   key={index}
            //   className={`product__content__item__body color__item bg-${item}`}></div>
            <div
              key={index}
              className={`product__content__item__body color__item`}>
              <CheckBox
                label={""}
                shape={"circle"}
                color={`bg-${item}`}
                checked={index === color}
                onChange={() => handleChangeMainImage(index)}
              />
            </div>
          ))}
        </div>
        <div className="product__content__item product__content__item__action">
          <div className="quantily">
            <span>{quantity}</span>
            <div className="chevron">
              <i
                className="bx bx-chevron-up"
                onClick={() => increaseQuantity()}></i>
              <i
                className="bx bx-chevron-down"
                onClick={() => decreaseQuantity()}></i>
            </div>
          </div>
          <Button
            backgroundColor={"black"}
            color={"white"}
            icon="bx bx-cart"
            animate={false}>
            Add to Cart
          </Button>
        </div>
        <div className="product__content__item product__content__item__btn-buy">
          <Button backgroundColor={"white"} icon="bx bx-cart" animate={true}>
            BUY IT NOW
          </Button>
        </div>

        <div className="product__content__item"></div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductView;