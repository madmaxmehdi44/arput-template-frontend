import { CogIcon, PlayIcon } from "@heroicons/react/outline";
import { useEffect } from "react";

export default function Collection(data, slug) {
  const myData = data.data;

  const title =  myData.name;
  // console.log("Mehdi Post is: "+ JSON.stringify(myData));
  // const userName =post.author.data.attributes.name;
  const publishedAt = myData.publishedAt;
  
  //  console.log("Mehdi Post is: URL1"+ (process.env.API_URL + "/"+data.cover))
  const imageUrl = (process.env.API_URL + myData.url);
    // console.log(imageUrl)
  return (
    <div className="hover:animate-pulse hover:cursor-pointer relative min-w-[250px] max-h-[140px] w-[250px] mx-2 overflow-hidden h-[100px] rounded-xl">
      {/* {console.log(
        "\n My IMG URL: " +
          (imageUrl)
      )} */}

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcu_4crt2iriiyOGdBbPZSfcaSnl9z1IOf6Q&usqp=CAU"
        // src={imageUrl}
        alt={title}
        className="object-cover w-full h-full transform rotate-0 hover:scale-150 hover:rotate-12"
      />
      <div className="w-full h-[40px] bg-collectionBg absolute bottom-0 flex  items-center px-2">
        <h2 className="text-textColor text-[16px] font-bold">{title}</h2>
      </div>
    </div>
  );
}
