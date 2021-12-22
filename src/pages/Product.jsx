import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import productData from "../assets/fake-data/product";
import policy from "../assets/fake-data/policy-product";

import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import PolicyCard from "../components/PolicyCard";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import SlideProduct from "../components/SlideProduct";
import ProductDetailView from "../components/ProductDetailView";

const Product = props => {
  const { slug } = useParams();

  const product = productData.getProductBySlug(slug);

  const relatedProducts = productData.getProducts(8);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Helmet title={product.title}>
      <div className="container">
        <Section>
          <SectionBody>
            <ProductView product={product} />
          </SectionBody>
        </Section>

        <Section>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {policy.map((item, index) => (
                <PolicyCard
                  key={index}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>

        <Section>
          <SectionBody>
            <ProductDetailView product={product} />
          </SectionBody>
        </Section>

        <Section>
          <SectionTitle>RELATED PRODUCTS</SectionTitle>
          <SectionBody>
            <SlideProduct
              data={relatedProducts}
              size={4}
              mdsize={2}
              smsize={2}
              _left={51}
              timeOut={5000}>
              {relatedProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  product={item}
                  link={"/"}
                  price={Number.parseFloat(item.price)}
                />
              ))}
            </SlideProduct>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default Product;
