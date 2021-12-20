import React from "react";
import PropTypes from "prop-types";
import Helmet from "../components/Helmet";
import QuickView from "../components/QuickView";
import productData from "../assets/fake-data/product";

const News = props => {
  return (
    <Helmet title={"News"}>
      {productData
        .getAllProducts()
        .slice(0, 1)
        .map((item, index) => (
          <QuickView
            key={index}
            title={item.title}
            images={item.images}
            slug={item.categorySlug}
            size={item.size}
            link={"/"}
            price={Number.parseFloat(item.price)}
          />
        ))}
    </Helmet>
  );
};

News.propTypes = {};

export default News;
