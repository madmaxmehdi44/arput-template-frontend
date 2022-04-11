import { CogIcon, PlayIcon } from "@heroicons/react/outline";
import { useEffect } from "react";

export default function Collection({ children, category }) {
  const catAttr = category.attributes;
  const mediaAttr = category.attributes.media.data.attributes;
  return (
    <>
      <div className="hover:animate-pulse hover:cursor-pointer relative min-w-[250px] max-h-[140px] w-[250px] mx-2 overflow-hidden h-[100px] rounded-xl">
        <img
          //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcu_4crt2iriiyOGdBbPZSfcaSnl9z1IOf6Q&usqp=CAU"
          src={mediaAttr.url}
          alt={catAttr.title}
          className="object-cover w-full h-full transform rotate-0 hover:scale-150 hover:rotate-12"
        />
        <div className="w-full h-[40px] bg-collectionBg absolute bottom-0 flex  items-center px-2">
          <h2 className="text-textColor text-[16px] font-bold">
            {catAttr.title}
          </h2>
        </div>
      </div>
      {/* {children} */}
    </>
  );
}
