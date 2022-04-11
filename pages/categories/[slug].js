import Seo from "../../components/seo";
import Layout from "../../components/layout";
// import Articles from "../../components/articles";
import Header from "../../components/Header";
import { fetchAPI } from "../../lib/api";
import Article from "../../components/Article";
const Category = ({ category, categories }) => {
  // const articles = category.attributes.articles.data;

  return (
    <div className="bg-white" dir="rtl">
      <Header />
      <h1>{category.attributes.title}</h1>
        
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {category.attributes.articles.data.map((article) => (

            <Article article={article} />
      
      ))}
        </div>
        </div>
    </div>
  );
};

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] });

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params.slug },
    populate: {
      articles: {
        populate: "*",
      },
    },
  });
  const allCategories = await fetchAPI("/categories");

  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories,
    },
    revalidate: 1,
  };
}

export default Category;
