import React from "react";
import PropTypes from "prop-types";
import { FaWineGlassAlt } from "react-icons/fa";
import { GiGrapes } from "react-icons/gi";
import { MdPlace } from "react-icons/md";
import { List } from "./styles";

const ProductDetails = ({ country, countryIcon, region, type, grapeList }) => {
  return (
    <List>
      {country && (
        <li>
          {countryIcon && <img src={countryIcon} alt={country} width="20" />}
          {country}
        </li>
      )}
      {region && (
        <li>
          <MdPlace />
          {region}
        </li>
      )}
      {type && (
        <li>
          <FaWineGlassAlt />
          {type}
        </li>
      )}
      {grapeList && (
        <li>
          <GiGrapes />
          {grapeList}
        </li>
      )}
    </List>
  );
};

ProductDetails.propTypes = {
  countryIcon: PropTypes.string,
  country: PropTypes.string,
  region: PropTypes.string,
  type: PropTypes.string,
  grapeList: PropTypes.string,
};

export default ProductDetails;
