import React from "react";
import { AiFillEye } from "react-icons/ai";
import { GiNoseFront } from "react-icons/gi";
import { GiLips } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { Wrapper, Item } from "./styles";

const ProductAbout = ({ color, mouth, nose, harmonization }) => {
  return (
    <Wrapper>
      <h1>Sobre o vinho</h1>
      {color && (
        <Item>
          <h3>
            <AiFillEye />
            Visual
          </h3>
          <p>{color}</p>
        </Item>
      )}
      {nose && (
        <Item>
          <h3>
            <GiNoseFront />
            Nariz
          </h3>
          <p>{nose}</p>
        </Item>
      )}
      {mouth && (
        <Item>
          <h3>
            <GiLips />
            Boca
          </h3>
          <p>{mouth}</p>
        </Item>
      )}

      {harmonization && (
        <Item>
          <h3>
            <GiKnifeFork />
            Visual
          </h3>
          <p>{harmonization}</p>
        </Item>
      )}
    </Wrapper>
  );
};

export default ProductAbout;
