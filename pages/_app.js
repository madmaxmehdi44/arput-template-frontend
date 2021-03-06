import App from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { createContext } from "react";
import dynamic from 'next/dynamic'
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import "nprogress/nprogress.css";

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);
// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <div>
          <TopProgressBar />

      {/* <Head>
        <link
          rel="shortcut icon"
          // href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head> */}
      <GlobalContext.Provider value={pageProps}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </div>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
// MyApp.getInitialProps = async (ctx) => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(ctx);
//   // Fetch global site settings from Strapi
//   const globalRes = await fetchAPI("/global", {
//     populate: {
//       favicon: "*",
//       defaultSeo: {
//         populate: "*",
//       },
//     },
//   });
//   // Pass the data to our page via props
//   return { ...appProps, pageProps: { global: globalRes.data } };
// };

export default MyApp;