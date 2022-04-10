import React from "react";
// import Articles from "../components/articles";
import Layout from "../components/layout";
// import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Head from "next/head";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import Collection from "../components/Collection";
import LeftMenu from "../components/LeftMenu";
import VideoContainer from "../components/VideoContainer";


const Home = ({ articles, categories }) => {
  const tl = gsap.timeline({ delay: 0.3 });
  const selectedItemRecommended = useState(0);
  const [isImage, setImage] = useState({
    name: "مهدی مینایی",
    imageSrc:
      ("https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" || "") &&
      "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  });
  useEffect(() => {
    const scrollContainerId = document.querySelector("#scrollContainerId");
    scrollContainerId?.addEventListener(
      "wheel",
      (e) => {
        // console.log(event);

        scrollContainerId.scrollLeft += (e).deltaY;
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
            <div className="relative items-start justify-center p-0 overflow-hidden md:col-span-2 sm:col-span-6">
              <VideoContainer data={isImage} />
            </div>
            {/* Recommended List */}
            <div className="overflow-y-auto bg-searchBg text-textColor md:col-span-1 sm:col-span-6 scrollbar scrollbar-thin scrollbar-thumb-gray-800">
              <div className="sticky -top-0.5 w-full">
                <p className="text-textColor justify-center items-center bg-gray-800 relative text-[18px] font-bold my-2 px-2 text-right ">
                  نمونه کارها
                </p>
              </div>
              {articles.data &&
                articles.data.map((data) => (
                  <div
                    key={data.id}
                    onClick={() => {
                      // console.log(
                      //   "from Index -> Recommended Component => " +
                      //     data.attributes.video
                      // );
                      const imageSource =
                        process.env.API_URL +
                        data.attributes.Video.data.attributes.url;
                      setImage({
                        name: data.attributes.title,
                        imageSrc: data.attributes.Video.data && imageSource,
                      });
                    }}
                  >
                    <RecommendedList data={data} key={data.id} />
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
              {categories.data &&
                categories.data.map((data) => (
                  <div
                    key={data.id}
                    // onClick={() => {
                    //   console.log(
                    //     "from Index -> Collection Component => " +
                    //       data.attributes.video
                    //   );
                    //   setImageCat({
                    //     name: data.attributes.name,
                    //     imageSrc:
                    //       data.attributes.cover.data &&
                    //       process.env.API_URL +
                    //         data.attributes.cover.data.attributes.url,
                    //   });
                    // }}
                  >
                    {/* {console.log(JSON.stringify(data.attributes.cover.data[0].attributes))} */}
                    <Link href={`/categories/${data.attributes.slug}`}>
                     <a>
                        <Collection
                          data={data.attributes.cover.data[0].attributes}
                          slug={data.attributes.slug}
                        />
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