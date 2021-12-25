import React, { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeWishListItem } from "../redux/wish-list/wishlistItemsSlice";
import Button from "./Button";
import { Link } from "react-router-dom";

const WishListItem = props => {
  const dispatch = useDispatch();

  const [item, setItem] = useState(props.item);

  const removeItem = () => {
    dispatch(removeWishListItem({ ...item }));
  };

  useEffect(() => {
    setItem(props.item);
  }, [props.item]);

  if (!props.item) return null;

  return (
    <div className="wishlist">
      <div className="wishlist__item">
        <div className="wishlist__item__header">
          <span>PRODUCT NAME</span>
          <span>PRICE</span>
          <span>ACTION</span>
          <span> </span>
        </div>
        <div className="wishlist__item__body">
          <div className="wishlist__item__body__item">
            <img src={item.product.images[0]} alt="" />
            <span>{item.product.title}</span>
          </div>
          <div className="wishlist__item__body__item">
            <span>${item.product.price} USD</span>
          </div>
          <div className="wishlist__item__body__item">
            <Link to={`/catalog/${item.slug}`}>
              <Button>SELECT OPTION</Button>
            </Link>
          </div>
          <div className="wishlist__item__body__item">
            <i className="bx bx-x" onClick={() => removeItem()}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

WishListItem.propTypes = {};

export default WishListItem;
