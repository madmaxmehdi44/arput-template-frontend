import Link from "next/link";
import { useEffect } from "react";

function ActionLink({ icon, urlPath }) {
  function handleClick(event) {
    event.preventDefault();
    // console.log("The link was clicked.");
  }
  return (
    <Link replace href={`/${urlPath}`}>
      <a
      //handleClick
      >
        {icon}
      </a>
    </Link>
  );
}

function MenuItem({
  icon,
  urlPath,
  name,
}) {
  return (
    <div className="relative flex items-center text-gray-400 cursor-pointer group">
      <i>
        {<ActionLink icon={icon} urlPath={urlPath} />}

        <span className="text-xs font-bold text-center text-red-400 ">
          {name}
        </span>
      </i>

      <div className="w-[100px] h-[150px] absolute z-[250] hidden px-4 py-1 rounded-md group-hover:block bg-neutral-700 left-8 ">
        {/* <ModalMain /> */}
        {/* <p
          className="before:absolute before:w-[15px] before:h-[15px] before:rounded 
      before:left-[-7px] before:top-2 before:rotate-45 
      after:absolute after:w-[150px] after:h-[15px] after:rounded after:bg-textColor
      after:right-[-7px] after:top-2 "
        >
          <p>تماس با ما</p> <br />
             <div>

    

      </div>

        </p> */}
      </div>
    </div>
  );
}

export default MenuItem;
