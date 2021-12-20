import products from "../Json/productData.json";
const getAllProducts = () => products;

const getProducts = count => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getProductBySlug = slug => products.find(e => e.slug === slug);

const productData = {
  getAllProducts,
  getProducts,
  getProductBySlug
};

export default productData;
