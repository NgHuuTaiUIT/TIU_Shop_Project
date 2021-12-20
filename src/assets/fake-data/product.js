import products from "../Json/productData.json";
const getAllProducts = () => products;

const getProducts = count => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getProductBySlug = slug => products.find(e => e.slug === slug);

const getCartItemsDetails = cartItems => {
  let res = [];
  // console.log(cartItems);
  if (cartItems.length > 0) {
    cartItems.forEach(item => {
      res.push({
        ...item,
        product: getProductBySlug(item.slug)
      });
    });
  }
  return res;
};

const productData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
  getCartItemsDetails
};

export default productData;
