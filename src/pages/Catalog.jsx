import React from "react";
import Helmet from "../components/Helmet";
import QuickView from "../components/QuickView";
import BannerPage from "../components/BannerPage";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import CollectionList from "../components/CollectionList";

import productData from "../assets/fake-data/product";
import categoryData from "../assets/fake-data/category";
import size from "../assets/fake-data/product-size";
import colors from "../assets/fake-data/product-color";
import price from "../assets/fake-data/price";

const Catalog = () => {
  return (
    <Helmet title="Catalog">
      <BannerPage
        imgBackground={
          "https://cdn.shopify.com/s/files/1/0550/6665/6987/files/page-1.jpg?v=1633331587"
        }
        title={"Products"}
      />
      <div className="container">
        <CollectionList
          productData={productData.getAllProducts()}
          category={categoryData}
          size={size}
          color={colors}
          price={price}
        />
      </div>
    </Helmet>
  );
};

export default Catalog;
