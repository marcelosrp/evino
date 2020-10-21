import React from "react";
import Error from "next/error";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import HeadSite from "../../components/Head/head";
import Layout from "../../components/Layout/layout";
import ProductSummary from "../../components/ProductSummary/productSummary";
import ProductSpecification from "../../components/ProductSpecification/productSpecification";
import ProductSommelier from "../../components/ProductSommelier/productSommelier";
import ProductAbout from "../../components/ProductAbout/productAbout";
import KitAbout from "../../components/KitAbout/kitAbout";
import Loading from "../../components/Helpers/loading";
import styled from "styled-components";

const MainProduct = styled.section`
  margin: 0 auto;
  max-width: 100%;
  padding: 0 15px;
  width: 1140px;
`;

const Product = ({ error, product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  if (error) return <Error statusCode={error} />;

  return (
    <Layout>
      <HeadSite
        page={
          product.data.seo.pageTitle
            ? product.data.seo.pageTitle
            : product.data.name
        }
        description={product.data.seo.pageDescription}
        keywords={product.data.seo.pageKeywords}
      />

      <MainProduct>
        <ProductSummary
          thumb={product.data.images.medium}
          sku={product.data.sku}
          name={product.data.name}
          countryIcon={product.data.countries[0].icon}
          country={product.data.producer.country}
          region={product.data.producer.region}
          type={product.data.type}
          grapeList={product.data.grapeList}
          priceRecommended={product.data.prices.recommended}
          priceSale={product.data.prices.sale}
          discount={product.data.discounts.sale}
          aboutThisWine={product.data.aboutThisWine}
        />

        {product.data.classification !== null ? (
          <>
            <ProductSpecification
              type={product.data.type}
              closureType={product.data.closureType}
              grapeList={product.data.grapeList}
              country={product.data.producer.country}
              producerName={product.data.producer.name}
              vintage={product.data.vintage}
              region={product.data.producer.region}
              servingTemperature={product.data.servingTemperature}
              alcoholContent={product.data.alcoholContent}
              volume={product.data.volume}
            />
            <ProductSommelier
              reviewer={product.data.sommelier.reviewer}
              picture={product.data.sommelier.picture}
              commentary={product.data.sommelier.commentary}
            />
            <ProductAbout
              color={product.data.sommelier.color}
              mouth={product.data.sommelier.mouth}
              nose={product.data.sommelier.nose}
              harmonization={product.data.harmonization}
            />
          </>
        ) : (
          <KitAbout bundleProducts={product.data.bundleProducts} />
        )}
      </MainProduct>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://api.evino.com.br/catalog/v2/product")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Ocorreu uma erro na requisição.");
    })
    .then((response) => response);

  const paths = res.data.products.map((pathProjeto) => ({
    params: {
      name: pathProjeto.sku,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let error = "";
  let product = [];

  const res = await fetch(
    `https://api.evino.com.br/catalog/v2/product/${params.name}`
  );

  if (res.status === 404) {
    error = "Um erro foi encontrado, atualize a página para tentar novamente.";
  } else {
    product = await res.json();
  }

  return {
    props: { product, error },
    revalidate: 1,
  };
}

export default Product;
