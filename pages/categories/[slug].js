import Seo from "../../components/seo";
import Layout from "../../components/layout";
// import Articles from "../../components/articles";
import Header from '../../components/Header';
import { fetchAPI } from "../../lib/api";

const Category = ({ category, categories }) => {
    const articles = category.attributes.articles.data;

    return (
       
          <div >
            <Header />
              <h1>{category.attributes.title}</h1>
              {/* <Articles articles={category.attributes.articles.data} /> */}
              {articles.map((article) => (
                    <>
                    <h1>fdfdfd:{article.attributes.title}</h1>
                    <h2>{article.attributes.description}</h2>
                    </>
              )
              )
              }
            
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