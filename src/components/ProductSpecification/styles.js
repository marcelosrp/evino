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
    margin: 0 0 20px 20px;
    width: 100%;
  }
`;

export const Item = styled.div`
  margin: 20px;
  min-width: 200px;

  @media (max-width: 660px) {
    min-width: 140px;
  }

  h3 {
    font-size: 15px;
    margin: 0 0 5px 0;
  }

  p {
    font-size: 13px;
  }
`;
