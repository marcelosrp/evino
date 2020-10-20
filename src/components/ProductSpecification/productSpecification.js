import React from "react";
import { Wrapper, Item } from "./styles";

const ProductSpecification = ({
  type,
  closureType,
  grapeList,
  country,
  producerName,
  vintage,
  region,
  servingTemperature,
  alcoholContent,
  volume,
}) => {
  const Specification = [
    {
      specification: "Tipo de Vinho",
      value: type,
    },
    {
      specification: "Tipo de fechamento",
      value: closureType,
    },
    {
      specification: "Uvas",
      value: grapeList,
    },
    {
      specification: "País",
      value: country,
    },
    {
      specification: "Produtor",
      value: producerName,
    },
    {
      specification: "Safra",
      value: vintage,
    },
    {
      specification: "Região",
      value: region,
    },
    {
      specification: "Serviço",
      value: servingTemperature,
    },
    {
      specification: "Teor alcoólico",
      value: alcoholContent,
    },
    {
      specification: "Volume",
      value: volume,
    },
  ];

  return (
    <Wrapper>
      <h1>Ficha técnica</h1>
      {Specification.map((item) => {
        return (
          <Item key={item.specification}>
            <h3>{item.specification}</h3>
            <p>{item.value}</p>
          </Item>
        );
      })}
    </Wrapper>
  );
};

export default ProductSpecification;
