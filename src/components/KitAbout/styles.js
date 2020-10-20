import styled from "styled-components";

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  margin: 50px auto;
  max-width: 100%;
  width: 960px;

  h1 {
    font-size: 20px;
    font-weight: 400;
    margin: 0 0 70px 20px;
    width: 100%;

    @media (max-width: 660px) {
      margin: 0 0 20px 20px;
    }
  }
`;

export const SwipperContentWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 660px) {
    flex-flow: column;
  }

  > div {
    margin: 0 20px;

    @media (max-width: 660px) {
      margin: 20px 20px 0 20px;
    }
  }
`;

export const SwipperThumbWrapper = styled.div`
  width: 440px;

  img {
    display: block;
    margin: 0 auto;
  }
`;

export const SwiperInfoWrapper = styled.div`
  h2 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
  }
`;

export const SwiperInfoItens = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;

  > div {
    margin: 15px;
    width: 215px;
  }

  h3 {
    font-size: 15px;
    margin: 0 0 5px 0;
  }

  p {
    font-size: 13px;
  }

  svg {
    margin: 0 5px 0 0;
    position: relative;
    top: 2px;
  }
`;
