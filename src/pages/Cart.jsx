import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productData from "../assets/fake-data/product";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Helmet from "../components/Helmet";
import { cartItemsSelector } from "../redux/selector";

const Cart = () => {
  const cartItems = useSelector(cartItemsSelector);

  const [cartProduct, setCartProduct] = useState(
    productData.getCartItemsDetails(cartItems)
  );

  const [totalProduct, setTotalProduct] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalProduct = () =>
    cartItems.reduce(
      (total, item) => total + Number.parseInt(item.quantity),
      0
    );

  const getTotalPrice = () =>
    cartItems.reduce(
      (total, item) => total + Number(item.quantity) * Number(item.price),
      0
    );

  useEffect(() => {
    setCartProduct(productData.getCartItemsDetails(cartItems));
    setTotalProduct(getTotalProduct());
    setTotalPrice(getTotalPrice());
  }, [cartItems]);

  return (
    <Helmet title="Cart">
      <div className="cart">
        {cartProduct.length > 0 ? (
          <div className="cart__info">
            <div className="cart__info__txt">
              <p>You have {totalProduct} products in your cart</p>
              <div className="cart__info__txt__price">
                <span>Total</span>
                <span>${totalPrice} USD</span>
              </div>
              <div className="cart__info__actions">
                <Button size={100}>Proceed to checkout</Button>
                <Link to="/catalog">
                  <Button>Continue Shopping</Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="cart__list">
          {cartProduct.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>
      {cartProduct.length <= 0 ? (
        <div className="wishlist__null">
          <i className="bx bxs-ghost"></i>
          Bạn chưa có sản phẩm yêu thích nào
          <Link to="/catalog" style={{ marginTop: "20px" }}>
            <Button backgroundColor={"black"} color="white">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </Helmet>
  );
};

export default Cart;
