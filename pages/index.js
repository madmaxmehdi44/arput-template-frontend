import React from "react";
import Link from "next/link";
// import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Head from "next/head";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import Collection from "../components/Collection";
import LeftMenu from "../components/LeftMenu";
import VideoContainer from "../components/VideoContainer";
import RecommendedList from "../components/RecommendedList";

const Home = ({ articles, categories }) => {
  const tl = gsap.timeline({ delay: 0.3 });
  const selectedItemRecommended = useState(0);
  const [isArticle, setArticle] = useState(articles[0].attributes);
  useEffect(() => {
    const scrollContainerId = document.querySelector("#scrollContainerId");
    scrollContainerId?.addEventListener(
      "wheel",
      (e) => {
        // console.log(event);

        scrollContainerId.scrollLeft += e.deltaY;
      },
      { passive: true }
    );

    // tl.from(
    //   "#logo",
    //   { x: -50, opacity: 0, ease: "back.out(1.7)", duration: 1.5 },
    //   "Start"
    // )
    // .from(
    //   "#searchBox",
    //   { x: -50, opacity: 0, ease: "back.out(1.7)", duration: 0.5 },
    //   "Start"
    // )
    // .from(
    //   "#profileContainer",
    //   { x: -50, opacity: 0, ease: "back.out(1.7)", duration: 0.5 },
    //   "Start"
    // )
    // .from(
    //   "#leftMenu div",
    //   {
    //     xPercent: -100,
    //     opacity: 0,
    //     stagger: 0.03,
    //     ease: "back.out(1.7)",
    //     duration: 0.5,
    //   },
    //   "Start"
    // );
  }, []);
  // console.log(JSON.stringify(categories.attributes));
  return (
    // <Layout categories={categories}>
    <div
      className="flex flex-col w-screen h-screen overflow-hidden bg-mainBg"
      data-theme="cupcake"
    >
      {/* <Head>
        <title>تیم آرپوت</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <MainModal /> */}
      <Header />
      {/* <Handle categories /> */}
      {/* {posts.data.map(({ id, attributes }: any) => {
        <div key={id}>
          {attributes.title}

          {console.log("Imagelink: " + attributes)}
        </div>;
      })} */}
      {/* MainContainer */}

      <div className="flex w-full h-[calc(100%-80px)] overflow-hidden">
        <LeftMenu />

        {/* Main Container */}
        <div className="sm:w-[calc(100%-60px)] md:w-[90%] h-full">
          {/* Top Section */}
          <div className=" w-full h-[72%] grid max-h-[480px] bg-searchBg grid-cols-3 p-0.5 gap-x-0.5">
            {/* Video Container */}
            <div className="relative items-start justify-center p-0 pb-20 overflow-hidden md:col-span-2 sm:col-span-6 h-50">
              <VideoContainer article={isArticle} />
            </div>
            {/* Recommended List */}
            <div className="overflow-y-auto bg-searchBg text-textColor md:col-span-1 sm:col-span-6 scrollbar scrollbar-thin scrollbar-thumb-gray-800">
              <div className="sticky -top-0.5 w-full">
                <p className="text-textColor justify-center items-center bg-gray-800 relative text-[18px] font-bold my-2 px-2 text-right ">
                   بلاگ آرپوت
                </p>
              </div>
              {articles &&
                articles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => {
                      // console.log(
                      //   "from Index -> Recommended Component => " +
                      //     data.attributes.video
                      // );
                      setArticle( article.attributes );
                    }}
                  >
                    <RecommendedList article={article} key={article.id} />
                  </div>
                ))}
            </div>
          </div>
          {/* Bottom Section */}
          <div dir="rtl" className="w-full h-[28%]">
            <div
              className="flex items-center py-2 overflow-x-scroll scrollbar-none "
              id="scrollContainerId"
            >
              {categories &&
                categories.map((category) => (
                  <div key={category.id}>
                    <Link href={`/categories/${category.attributes.slug}`}>
                      <a>
                        <Collection category={category} />
                      </a>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      // homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
