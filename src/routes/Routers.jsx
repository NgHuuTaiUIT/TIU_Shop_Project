import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Catalog from "../pages/Catalog";
import News from "../components/News";
import Wishlist from "../pages/Wishlist";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog/:slug" element={<Product />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/news" element={<News />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};

export default Routers;
