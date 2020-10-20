import React from "react";
import {
  Wrapper,
  TextWrapper,
  Avatar,
  SommelierName,
  TextCommentary,
} from "./styles";

const ProductSommelier = ({ reviewer, picture, commentary }) => {
  return (
    <Wrapper>
      <h1>Sommelier da Evino</h1>
      <TextWrapper>
        <div>
          <Avatar src={picture} alt={reviewer} />
          <SommelierName>{reviewer}</SommelierName>
        </div>
        <TextCommentary>{commentary}</TextCommentary>
      </TextWrapper>
    </Wrapper>
  );
};

export default ProductSommelier;
