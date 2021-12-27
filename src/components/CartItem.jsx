import React, { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { removeItem, updateItem } from "../redux/shopping-cart/cartItemsSlice";
import { useDispatch } from "react-redux";

const CartItem = props => {
  const dispatch = useDispatch();

  const [item, setItem] = useState(props.item);

  const [price, setPrice] = useState(0);

  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    if (quantity + 1 < 100)
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
  };

  const decreaseQuantity = () => {
    if (quantity - 1 > 0)
      dispatch(updateItem({ ...item, quantity: quantity - 1 }));
    // setQuantity(quantity + 1 === 100 ? quantity : quantity - 1);
  };

  const removeCartItem = () => {
    dispatch(removeItem({ ...item }));
  };
  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
    setPrice(Number(props.item.quantity) * Number(props.item.price));
  }, [props.item]);

  console.log(props.item);
  return (
    <div className="cart__item">
      <div className="cart__item__header">
        <span>PRODUCT NAME</span>
        <span>PRICE</span>
        <span>ACTION</span>
        <span> </span>
      </div>
      <div className="cart__item__body">
        <div className="cart__item__body__item cart__item__body__item__image">
          <img src={item.product.images[0]} alt="" />
          <Link
            to={`/catalog/${item.slug}`}
            style={{
              display: "flex",
              flexDirection: "column"
            }}>
            {`${item.product.title}`}

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: "10px"
              }}>
              <div
                className={`bg-${item.color}`}
                style={{
                  display: "inline-block",
                  borderRadius: "50%",
                  height: "20px",
                  width: "20px"
                }}></div>

              <div
                className={`product__content__item__body size__item`}
                style={{
                  color: "black"
                }}>
                {item.size}
              </div>
            </div>
          </Link>
        </div>
        <div className="cart__item__body__item cart__item__body__item__price">
          <span>${price.toFixed(2)} USD</span>
        </div>
        <div className="cart__item__body__item">
          <div className=" cart__item__body__item__quantity">
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
        </div>
        <div className="cart__item__body__item">
          <i className="bx bx-x" onClick={() => removeCartItem()}></i>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {};

export default CartItem;
