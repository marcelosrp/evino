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

export const TextWrapper = styled.div`
  margin: 0 20px;
  width: 100%;

  > div {
    align-items: center;
    display: flex;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 20px;
`;

export const SommelierName = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

export const TextCommentary = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 20px;
`;
