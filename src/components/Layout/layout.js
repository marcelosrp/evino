import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/header";
import styled from "styled-components";

const Main = styled.main`
  height: 100vh;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <Header />
      {children}
    </Main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
