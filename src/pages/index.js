import React from "react";
import HeadSite from "../components/Head/head";
import Layout from "../components/Layout/layout";
import ProductItem from "../components/ProductItem/productItem";
import styled from "styled-components";

const ProductListWrrapper = styled.section`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  margin: 50px auto;
  max-width: 100%;
  padding: 15px;
  width: 1140px;
`;

const Home = ({ products }) => {
  return (
    <Layout>
      <HeadSite
        page="Home"
        description="Compre os melhores vinhos online na Evino. Produtos rigorosamente selecionados por nossos especialistas, com preços exclusivos e inferiores aos de mercado."
        keywords="Vinho, uva, vinho tinto, vinho branco"
      />
      <ProductListWrrapper>
        {products.data.products.map((wine) => {
          return (
            <ProductItem
              key={wine.sku}
              name={wine.name}
              thumb={wine.images.medium}
              priceSale={wine.prices.sale}
              priceRecommended={wine.prices.recommended}
              discount={wine.discounts.sale}
              country={wine.producer.country}
              type={wine.type}
              grapeList={wine.grapeList}
              url={wine.url}
            />
          );
        })}
      </ProductListWrrapper>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const products = await fetch("https://api.evino.com.br/catalog/v2/product")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Deu problema");
    })
    .then((response) => response)
    .catch((err) => {
      console.log(err);
    });

  return {
    props: { products },
  };
}

export default Home;
