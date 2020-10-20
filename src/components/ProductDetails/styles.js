import styled from "styled-components";

export const List = styled.ul`
  margin: 0 0 20px 0;
  padding: 0;
  list-style-type: none;

  li {
    display: inline;
    margin-right: 25px;

    @media (max-width: 660px) {
      margin: 0 5px;
    }
  }

  img {
    margin-right: 5px;
    position: relative;
    top: 4px;
  }

  svg {
    margin-right: 5px;
    position: relative;
    top: 2px;
  }
`;
