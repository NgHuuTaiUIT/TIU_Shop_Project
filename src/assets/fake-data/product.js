import products from "../Json/productData.json";
const getAllProducts = () => products;

const getProducts = count => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const productData = {
  getAllProducts,
  getProducts
};

export default productData;
