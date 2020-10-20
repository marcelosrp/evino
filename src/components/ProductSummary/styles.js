import styled from "styled-components";

export const Wrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--gray);
  display: flex;
  flex-flow: row wrap;
  height: 450px;
  justify-content: space-between;
  padding-bottom: 30px;
  width: 100%;

  @media (max-width: 660px) {
    flex-flow: column;
    height: auto;
  }
`;

export const Thumb = styled.div`
  width: 420px;

  @media (max-width: 660px) {
    width: 100%;
  }

  img {
    display: block;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  color: var(--black);
  font-size: 22px;
  font-weight: 700;

  @media (max-width: 660px) {
    text-align: center;
  }
`;

export const Sku = styled.h3`
  color: var(--gray);
  font-size: 14px;
  font-weight: 400;
  margin: 5px 0 10px 0;

  @media (max-width: 660px) {
    text-align: center;
  }
`;

export const Infos = styled.div`
  @media (max-width: 660px) {
    margin: 30px 0;
    text-align: center;
  }
`;

export const Price = styled.div`
  position: relative;

  small {
    color: var(--red);
    display: inline-block;
    font-size: 85%;
    font-weight: 400;
    margin-bottom: 5px;
    text-decoration: line-through;
  }

  p {
    color: var(--green);
    font-size: 30px;
    font-weight: 600;
  }
`;

export const Discount = styled.span`
  background-color: var(--red);
  color: var(--white);
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  margin: 10px 0;
  padding: 5px 8px;
`;

export const AboutWine = styled.div`
  margin-top: 50px;
  width: 100%;
`;
