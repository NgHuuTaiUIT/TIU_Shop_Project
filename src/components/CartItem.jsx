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
    dispatch(updateItem({ ...item, quantity: quantity + 1 }));
    // setQuantity(quantity + 1 === 100 ? quantity : quantity + 1);
  };

  const decreaseQuantity = () => {
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
    // <div className="cart__item">
    //   <div className="cart__item__image">
    //     <img src={item.product.images[0]} alt="" />
    //   </div>
    //   <div className="cart__item__info">
    //     <div className="cart__item__info__name">
    //       <Link to={`/catalog/${item.slug}`}>
    //         {`${item.product.title} - ${item.color} - ${item.size}`}
    //       </Link>
    //     </div>
    //     <div className="cart__item__info__price">${price} USD</div>
    //     <div className="cart__item__info__quantity">
    //       <span>{quantity}</span>
    //       <div className="chevron">
    //         <i
    //           className="bx bx-chevron-up"
    //           onClick={() => increaseQuantity()}></i>
    //         <i
    //           className="bx bx-chevron-down"
    //           onClick={() => decreaseQuantity()}></i>
    //       </div>
    //     </div>
    //     <div className="cart__item__info__del">
    //       <i className="bx bx-trash" onClick={() => removeCartItem()}></i>
    //     </div>
    //   </div>
    // </div>
    <div className="cart__item">
      <div className="cart__item__header">
        <span>PRODUCT NAME</span>
        <span>PRICE</span>
        <span>ACTION</span>
        <span> </span>
      </div>
      <div className="cart__item__body">
        <div className="cart__item__body__item">
          <img src={item.product.images[0]} alt="" />
          <span>{item.product.title}</span>
        </div>
        <div className="cart__item__body__item">
          <span>${item.product.price} USD</span>
        </div>
        <div className="cart__item__body__item">
          <div className="cart__item__body__item__quantity">
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
          <i className="bx bx-x" onClick={() => removeItem()}></i>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {};

export default CartItem;
