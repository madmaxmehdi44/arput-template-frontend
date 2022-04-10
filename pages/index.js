import React from "react";
// import Articles from "../components/articles";
import Layout from "../components/layout";
// import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ categories }) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          {/* <h1>{homepage.attributes.hero.title}</h1> */}
          {/* <Articles articles={articles} /> */}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [categoriesRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
  ]);

  return {
    props: {
      // articles: articlesRes.data,
      categories: categoriesRes.data,
      // homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;