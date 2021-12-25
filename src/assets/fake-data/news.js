import news from "../Json/newsData.json";
const getAllnews = () => news;

const getNews = count => {
  const max = news.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return news.slice(start, start + count);
};

const getNewsBySlug = slug => news.find(e => e.slug === slug);

const getNewsItemsDetails = cartItems => {
  let res = [];
  // console.log(cartItems);
  if (cartItems.length > 0) {
    cartItems.forEach(item => {
      res.push({
        ...item,
        product: getNewsBySlug(item.slug)
      });
    });
  }
  return res;
};

const newsData = {
  getAllnews,
  getNews,
  getNewsBySlug,
  getNewsItemsDetails
};

export default newsData;
