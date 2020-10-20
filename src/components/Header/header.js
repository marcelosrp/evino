import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <a>
          <img src="/logo-red.svg" alt="logo" />
        </a>
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
