import React from "react";

import Helmet from "../components/Helmet";
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";

import sliderData from "../assets/Json/sliderData.json";
import bannerData from "../assets/Json/bannerData.json";
import productData from "../assets/fake-data/product";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* Slider*/}
      <Slider data={sliderData} />
      <Banner data={bannerData} />
      {/*End slider */}

      {/* Best Seller Section*/}
      <Section>
        <SectionTitle>Best Seller</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getAllProducts().map((item, index) => (
              <ProductCard
                key={index}
                title={item.title}
                images={item.images}
                slug={item.categorySlug}
                size={item.size}
                link={"/"}
                price={item.price}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/*End Best Seller Section*/}
    </Helmet>
  );
};

export default Home;
