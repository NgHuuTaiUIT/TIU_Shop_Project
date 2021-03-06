import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { set } from "../redux/product-modal/productModalSlice";

import RatingStart from "./RatingStart";
import { addItem } from "../redux/shopping-cart/cartItemsSlice";
import {
  addWishListItem,
  removeWishListItem
} from "../redux/wish-list/wishlistItemsSlice";
import { wishListItemsSelector } from "../redux/selector";
import { addAlertItem } from "../redux/alert-popup/alertPopupItemsSlice";
// import Aos from "aos";

const ProductCard = props => {
  const { link, product, dataAos } = props;

  const { title, images, price, slug } = product;

  const dispatch = useDispatch();

  const wishListItems = useSelector(wishListItemsSelector);

  const productSelected = useRef(null);

  const [color, setColor] = useState(0);

  const [isWishListItem, setisWishListItem] = useState(false);

  useEffect(() => {
    setisWishListItem(wishListItems.find(item => item.slug === slug));
  }, [wishListItems]);

  const handleSelectColor = index => {
    setColor(index);
  };

  // useEffect(() => {
  //   // Aos.init({ duration: 2000 });
  //   Aos.init({
  //     offset: 50,
  //     duration: 1000,
  //     easing: "linear",
  //     // delay: 100
  //     once: true
  //   });
  // }, []);

  const addToCard = () => {
    dispatch(
      addItem({
        price: product.price,
        color: product.color[0],
        size: product.size[0],
        slug: slug,
        quantity: 1
      })
    );

    dispatch(
      addAlertItem({
        content: "The Product has been added to cart"
      })
    );
    // alert("Đã thêm");
  };

  const addToWishList = () => {
    dispatch(
      addWishListItem({
        slug: slug
      })
    );
    dispatch(
      addAlertItem({
        content: "The Product has been added to wish list"
      })
    );
    // alert("Đã thêm");
  };

  const removeWishList = () => {
    dispatch(removeWishListItem({ slug: slug }));
    // alert("Đã thêm");
  };

  return (
    <div data-aos={dataAos}>
      <div
        className="product-card"
        //  data-aos={dataAos}
      >
        <div className="product-card__action">
          <div
            className={`product-card__action__item add-wishlist ${
              isWishListItem ? "active" : ""
            }`}
            onClick={() => {
              !isWishListItem ? addToWishList() : removeWishList();
            }}>
            <i className="bx bx-heart"></i>
          </div>
          <div
            className="product-card__action__item add-to-card"
            onClick={() => addToCard()}>
            <i className="bx bx-cart"></i>
          </div>
          <div
            className="product-card__action__item quick-view"
            onClick={() => dispatch(set(slug))}>
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
          <div style={{ padding: "0 10px" }}>
            <RatingStart number={4} />
          </div>
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
