import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const HeadSite = ({ page, description, keywords }) => {
  return (
    <Head>
      <title>Evino | {page}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

HeadSite.propTypes = {
  page: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default HeadSite;
