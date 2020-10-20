import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fafafa;
  box-shadow: 0 2px 7px #dfdfdf;
  height: 500px;
  margin: 15px;
  position: relative;
  transition: transform 0.3s linear;
  width: 340px;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Thumb = styled.figure`
  align-items: center;
  background: #f0f0f0;
  display: flex;
  height: 300px;
  justify-content: center;
  padding: 30px;
  position: relative;

  img {
    max-height: 100%;
    max-width: 100%;
  }

  a {
    height: 100%;
    text-align: center;
    width: 100%;
  }
`;

export const Discount = styled.span`
  background-color: var(--red);
  color: var(--white);
  font-size: 12px;
  font-weight: 500;
  left: 0;
  padding: 5px 8px;
  position: absolute;
  top: 0;
`;

export const Details = styled.div`
  padding: 30px;
`;

export const Name = styled.h2`
  color: var(--preto);
  display: -webkit-box;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  overflow: hidden;
  text-align: center;
  text-transform: uppercase;
  transition: opacity 0.3s ease;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  &:hover {
    opacity: 0.5;
  }

  a {
    color: inherit;
  }
`;

export const Infos = styled.div`
  display: flex;
  justify-content: center;

  p {
    color: var(--gray);
    font-size: 14px;
    line-height: 22px;
    margin: 0 15px 20px 15px;
  }
`;

export const BottomDetails = styled.div`
  border-top: 1px solid #eee;
  overflow: hidden;
  padding-top: 20px;
`;

export const Price = styled.div`
  align-items: center;
  color: var(--green);
  display: flex;
  font-size: 18px;
  justify-content: flex-end;
  font-weight: 600;

  small {
    color: var(--red);
    display: inline-block;
    font-size: 80%;
    font-weight: 400;
    margin-right: 5px;
    text-decoration: line-through;
  }
`;
