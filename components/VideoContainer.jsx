import { CogIcon, PlayIcon } from "@heroicons/react/solid";
import { NextPage } from "next";
import { TimelineLite } from "gsap";
import { useEffect, useState } from "react";

// interface props {}

function VideoContainer(data) {
  const [isPlaying, setPlaying] = useState(false);

  const tl = new TimelineLite({ delay: 0.3 });
  // console.log("From VideoConvertor: " + JSON.stringify(data));
  useEffect(() => {
    if (isPlaying) {
      tl.fromTo("#mainVideoName", { y: 0, opacity: 1 }, { y: -20, opacity: 0 });
    } else {
      tl.fromTo("#mainVideoName", { y: -20, opacity: 0 }, { y: 0, opacity: 1 });
    }
  }, [isPlaying, data]);
  return (
    // {/*  <div className="relative w-full h-full">
    //      <img
    //       // src="https://www.immersiv.io/wp-content/uploads/2020/07/what-is-augmented-reality-1.jpg"
    //       src={data.data.imageSrc}
    //       alt={data.data.name}
    //       className={data.data.name}
    //     /> */}

    // {/* <div className="flex items-center justify-center h-screen p-4 bg-indigo-700">
    <div className="bg-black rounded-none aspect-w-16 aspect-h-8 md:aspect-h-10 lg:aspect-h-8 sm:aspect-h-5 ">
      <div
        id="mainVideoName"
        className="items-center object-cover absolute top-0 bg-gray-300 left-0   z-[40] w-full h-[25px]"
      >
        <h2
          className="flex items-center justify-center px-2 font-bold text-gray-800 text-md"
          dir="rtl"
        >
          نام پروژه: {data.data.name}
        </h2>
      </div>
      <video
        // src={data.data.imageSrc}
        src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
        controls
        playsInline
        title="Mehdi Minaee"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className=""
      ></video>
    </div>
    // </div>
    // {/* <video
    //   // src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    //   src={data.data.imageSrc}
    //   controls
    //   height="90%"
    //   playsInline

    //   className="min-w-full min-h-full"
    //   onPlay={() => setPlaying(true)}
    //   onPause={() => setPlaying(false)}
    // ></video> */}

    //   {/* <div  id="mainVideoPlayIcon" className="items-center bg-red-500 absolute justify-center  z-30 w-[40px] h-[40px] bg-opacity-40"> */}
    //     {/* <PlayIcon onClick={() => {
    //       alert();
    //       {setPlaying(true)}
    //     }} className="absolute items-center w-20 h-20 cursor-pointer hover:animate-ping left-1/2 top-1/2"/> */}
    //     {/* <h2 className="flex items-center justify-center px-2 text-2xl font-bold text-gray-800" dir="rtl">
    //      نام پروژه: {data.data.name}
    //     </h2> */}
    //   {/* </div>
    //  </div> */}
  );
}

export default VideoContainer;
