import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { formatCurrency } from "../../helpers/helpers";

import {
  Wrapper,
  Thumb,
  Discount,
  Details,
  Name,
  Infos,
  BottomDetails,
  Price,
} from "./styles";

const ProductItem = ({
  name,
  thumb,
  priceSale,
  priceRecommended,
  discount,
  country,
  type,
  grapeList,
  url,
}) => {
  return (
    <Wrapper>
      <Thumb>
        {discount && <Discount>{discount}% OFF</Discount>}
        <Link href={`product/${url}`}>
          <a>
            <img src={thumb} alt={name} />
          </a>
        </Link>
      </Thumb>
      <Details>
        <Name>
          <Link href={`product/${url}`}>
            <a title={name}>{name}</a>
          </Link>
        </Name>
        <Infos>
          {country && <p>{country}</p>}
          {type && <p>{type}</p>}
          {grapeList && <p>{grapeList}</p>}
        </Infos>
        <BottomDetails>
          <Price>
            <small>{formatCurrency(priceRecommended)}</small>
            {formatCurrency(priceSale)}
          </Price>
        </BottomDetails>
      </Details>
    </Wrapper>
  );
};

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  priceSale: PropTypes.number.isRequired,
  priceRecommended: PropTypes.number.isRequired,
};

export default ProductItem;
