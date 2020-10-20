import React from "react";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import GlobalStyle from "../globalStyles";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        {/* Import CSS NProgress */}
        <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
