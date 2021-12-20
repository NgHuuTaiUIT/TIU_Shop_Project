import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Helmet from "../components/Helmet";
import Button from "../components/Button";
import BannerPage from "../components/BannerPage";
import productData from "../assets/fake-data/product";
import { useSelector } from "react-redux";
import { wishListItemsSelector } from "../redux/selector";
import WishListItem from "../components/WishListItem";
const Wishlist = props => {
  const wishListItems = useSelector(wishListItemsSelector);

  const [wishListProduct, setWishListProduct] = useState(
    productData.getCartItemsDetails(wishListItems)
  );

  useEffect(() => {
    setWishListProduct(productData.getCartItemsDetails(wishListItems));
  }, [wishListItems]);
  return (
    <Helmet title="Wishlist">
      <BannerPage
        imgBackground={
          "https://cdn.shopify.com/s/files/1/0550/6665/6987/files/page-7.jpg?v=1633319262"
        }
        title={"Wish List"}
      />
      <div className="container">
        {wishListProduct.map((item, index) => (
          <WishListItem index={index} item={item} />
        ))}
        {wishListProduct.length <= 0 ? (
          <div className="wishlist__null">
            <i class="bx bxs-ghost"></i>
            Bạn chưa có sản phẩm yêu thích nào
          </div>
        ) : (
          ""
        )}
        <div className="wishlist__btn">
          <Button>Continue Shopping</Button>
        </div>
      </div>
    </Helmet>
  );
};

Wishlist.propTypes = {};

export default Wishlist;
