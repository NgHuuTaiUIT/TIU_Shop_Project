import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import Button from "./Button";

import Grid from "./Grid";

import ProductView from "./ProductView";

import productData from "../assets/fake-data/product";

import { remove } from "../redux/product-modal/productModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { productSlugSelector } from "../redux/selector";

const QuickView = props => {
  const productSlug = useSelector(productSlugSelector);

  const dispatch = useDispatch();

  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  return (
    <div
      className={`product__quick-view ${
        product === undefined ? "" : "active"
      }`}>
      <div className="product__quick-view__content">
        <ProductView product={product} isFullSize={false} />
        <div
          className="product__quick-view__content__close"
          onClick={() => dispatch(remove())}>
          <i className="bx bx-x"></i>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
