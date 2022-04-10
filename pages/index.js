import React from "react";
// import Articles from "../components/articles";
import Layout from "../components/layout";
// import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{categories.attributes.slug}</h1>
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