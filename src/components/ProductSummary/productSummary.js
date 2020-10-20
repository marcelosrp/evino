import React from "react";
import PropTypes from "prop-types";
import ProductDetails from "../ProductDetails/productDetails";
import { formatCurrency } from "../../helpers/helpers";
import {
  Wrapper,
  Thumb,
  Title,
  Sku,
  Infos,
  Price,
  Discount,
  AboutWine,
} from "./styles";

const ProductSummary = ({
  thumb,
  sku,
  name,
  countryIcon,
  country,
  region,
  type,
  grapeList,
  priceRecommended,
  priceSale,
  discount,
  aboutThisWine,
}) => {
  return (
    <Wrapper>
      <Thumb>
        <Title>{name}</Title>
        <Sku>{sku}</Sku>
        <img src={thumb} alt={name} />
      </Thumb>
      <Infos>
        <ProductDetails
          country={country}
          countryIcon={countryIcon}
          region={region}
          type={type}
          grapeList={grapeList}
        />
        <Price>
          <small>{formatCurrency(priceRecommended)}</small>
          <p>{formatCurrency(priceSale)}</p>
          {discount && <Discount>{discount}% OFF</Discount>}
        </Price>
      </Infos>
      {aboutThisWine && (
        <AboutWine>
          <p>{aboutThisWine}</p>
        </AboutWine>
      )}
    </Wrapper>
  );
};

ProductSummary.propTypes = {
  thumb: PropTypes.string.isRequired,
  sku: PropTypes.string,
  countryIcon: PropTypes.string,
  country: PropTypes.string,
  region: PropTypes.string,
  type: PropTypes.string,
  grapeList: PropTypes.string,
  priceRecommended: PropTypes.number.isRequired,
  priceSale: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  aboutThisWine: PropTypes.string,
};

export default ProductSummary;
