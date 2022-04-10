import Head from "next/head";
import {
  BellIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  UserIcon,
} from "@heroicons/react/outline";
// import MedModal from "./MedModal";
import React, { useState } from "react";
import { DarkLight } from "../components/DarkLight";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <div
      dir="ltr"
      className="bg-gray-900 flex items-center w-full shadow-md px-2 py-4 h-[80px] "
    >
      {/* <MedModal /> */}
      {/* Logo */}
      <svg
        id="logo"
        className="md:w-[130px] md:h-[80px] sm:w-[140px] sm:h-[80px] lg:w-[150px] lg:h-[80px]"
        viewBox="0 0 420 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="svgGroup"
          strokeLinecap="round"
          fillRule="evenodd"
          stroke="#f35"
          strokeWidth="0.25mm"
          fill="#21f"
        >
          <path
            d="M 154.737 15.43 L 154.737 23.535 A 30.105 30.105 0 0 1 154.477 27.588 A 22.448 22.448 0 0 1 153.663 31.299 A 23.351 23.351 0 0 1 152.024 35.257 A 19.698 19.698 0 0 1 150.757 37.329 A 20.479 20.479 0 0 1 146.534 41.797 A 25.451 25.451 0 0 1 141.529 44.849 A 24.216 24.216 0 0 1 136.588 46.513 A 22.54 22.54 0 0 1 136.255 46.582 A 27.952 27.952 0 0 1 133.362 47.017 A 22.413 22.413 0 0 1 131.251 47.119 L 157.764 70.02 L 138.135 70.02 L 111.67 47.119 L 102.54 47.119 L 102.54 34.424 L 131.251 34.424 A 15.722 15.722 0 0 0 134.079 33.942 A 13.242 13.242 0 0 0 135.621 33.423 Q 137.598 32.617 139.039 31.25 A 9.287 9.287 0 0 0 141.26 27.954 A 10.473 10.473 0 0 0 141.91 25.484 A 13.878 13.878 0 0 0 142.042 23.535 L 142.042 15.528 Q 142.042 14.453 141.773 13.892 A 2.48 2.48 0 0 0 141.532 13.486 Q 141.337 13.222 141.089 13.062 A 2.017 2.017 0 0 0 140.397 12.773 A 1.921 1.921 0 0 0 140.21 12.744 A 9.366 9.366 0 0 0 139.765 12.708 A 7.178 7.178 0 0 0 139.356 12.696 L 97.461 12.696 L 97.461 70.02 L 84.766 70.02 L 84.766 6.397 A 6.409 6.409 0 0 1 85.254 3.906 Q 85.743 2.735 86.597 1.856 A 6.022 6.022 0 0 1 88.624 0.489 A 6.434 6.434 0 0 1 90.824 0.008 A 7.46 7.46 0 0 1 91.163 0 L 139.356 0 Q 143.131 0 145.865 1.215 A 11.366 11.366 0 0 1 146.534 1.538 A 15.74 15.74 0 0 1 149.617 3.632 A 13.35 13.35 0 0 1 151.294 5.396 Q 153.126 7.715 153.931 10.401 A 20.157 20.157 0 0 1 154.535 13.001 A 15.357 15.357 0 0 1 154.737 15.43 Z M 237.256 23.535 L 237.256 29.297 A 30.105 30.105 0 0 1 236.996 33.35 A 22.448 22.448 0 0 1 236.182 37.061 A 23.351 23.351 0 0 1 234.544 41.019 A 19.698 19.698 0 0 1 233.277 43.091 A 20.479 20.479 0 0 1 229.053 47.559 A 24.69 24.69 0 0 1 224.374 50.437 A 23.036 23.036 0 0 1 224.048 50.586 A 24.913 24.913 0 0 1 218.817 52.287 A 23.275 23.275 0 0 1 218.775 52.295 A 27.952 27.952 0 0 1 215.882 52.729 A 22.413 22.413 0 0 1 213.77 52.832 L 185.059 52.832 L 185.059 40.137 L 213.77 40.137 Q 216.211 39.942 218.189 39.136 A 10.948 10.948 0 0 0 220.717 37.707 A 9.847 9.847 0 0 0 221.583 36.963 A 9.416 9.416 0 0 0 223.73 33.787 A 10.768 10.768 0 0 0 223.78 33.667 A 10.56 10.56 0 0 0 224.451 31.056 A 13.615 13.615 0 0 0 224.561 29.297 L 224.561 23.535 A 17.749 17.749 0 0 0 224.019 20.597 A 15.051 15.051 0 0 0 223.536 19.141 A 10.955 10.955 0 0 0 222.277 16.778 A 9.579 9.579 0 0 0 221.412 15.723 A 9.494 9.494 0 0 0 218.298 13.559 A 10.873 10.873 0 0 0 218.165 13.501 A 9.959 9.959 0 0 0 215.767 12.839 A 13.328 13.328 0 0 0 213.77 12.696 L 185.157 12.696 A 7.834 7.834 0 0 0 183.689 12.824 Q 182.206 13.108 181.299 14.014 A 4.239 4.239 0 0 0 180.242 15.837 Q 180.046 16.494 179.997 17.283 A 8.7 8.7 0 0 0 179.981 17.823 L 179.981 70.02 L 167.286 70.02 L 167.286 17.823 Q 167.286 13.393 168.753 10.169 A 13.407 13.407 0 0 1 169.068 9.522 A 18.415 18.415 0 0 1 171.315 6.136 A 15.191 15.191 0 0 1 173.511 4.004 Q 176.172 1.905 179.297 0.952 A 23.682 23.682 0 0 1 182.12 0.269 Q 183.658 0 185.059 0 L 213.77 0 A 28.928 28.928 0 0 1 217.847 0.275 A 22.014 22.014 0 0 1 221.485 1.099 A 23.925 23.925 0 0 1 225.44 2.757 A 20.114 20.114 0 0 1 227.515 4.029 A 20.104 20.104 0 0 1 231.697 7.919 A 18.9 18.9 0 0 1 231.959 8.252 A 26.122 26.122 0 0 1 234.986 13.257 A 24.216 24.216 0 0 1 236.65 18.198 A 22.54 22.54 0 0 1 236.719 18.531 A 27.952 27.952 0 0 1 237.154 21.424 A 22.413 22.413 0 0 1 237.256 23.535 Z M 70.02 6.397 L 70.02 70.02 L 57.325 70.02 L 57.325 52.832 L 12.696 52.832 L 12.696 70.02 L 0.001 70.02 L 0.001 35.01 A 38.917 38.917 0 0 1 1.123 25.528 A 34.052 34.052 0 0 1 2.637 20.899 A 33.11 33.11 0 0 1 9.242 10.551 A 31.809 31.809 0 0 1 9.961 9.815 A 33.345 33.345 0 0 1 21.045 2.588 A 35.878 35.878 0 0 1 32.199 0.092 A 42.436 42.436 0 0 1 35.01 0 L 63.624 0 A 6.409 6.409 0 0 1 66.114 0.489 A 6.291 6.291 0 0 1 68.165 1.856 A 6.291 6.291 0 0 1 69.532 3.906 A 6.409 6.409 0 0 1 70.02 6.397 Z M 304.395 17.237 L 304.395 63.623 A 6.727 6.727 0 0 1 304.126 65.545 A 6.147 6.147 0 0 1 303.907 66.162 A 6.207 6.207 0 0 1 302.564 68.189 Q 301.71 69.043 300.562 69.531 A 6.211 6.211 0 0 1 298.178 70.019 A 7.077 7.077 0 0 1 298.096 70.02 L 269.385 70.02 A 23.261 23.261 0 0 1 266.411 69.82 A 29.064 29.064 0 0 1 264.38 69.483 A 23.623 23.623 0 0 1 259.131 67.749 A 26.992 26.992 0 0 1 254.432 64.95 A 29.956 29.956 0 0 1 254.127 64.722 Q 251.71 62.891 249.903 60.279 A 21.504 21.504 0 0 1 247.753 56.306 A 26.112 26.112 0 0 1 246.998 54.248 A 22.366 22.366 0 0 1 246.109 50.125 A 29.463 29.463 0 0 1 245.899 46.533 L 245.899 17.237 L 258.594 17.237 L 258.594 46.533 A 12.457 12.457 0 0 0 258.835 49.035 A 9.997 9.997 0 0 0 259.449 51.001 A 10.466 10.466 0 0 0 261.493 54.119 A 9.999 9.999 0 0 0 261.768 54.395 Q 263.233 55.811 265.21 56.568 Q 267.188 57.324 269.483 57.324 L 291.7 57.324 L 291.7 17.237 L 304.395 17.237 Z M 364.307 17.237 L 364.307 29.932 L 342.139 29.932 L 342.139 70.02 L 329.297 70.02 L 329.297 29.932 L 312.793 29.932 L 312.793 17.237 L 329.297 17.237 L 329.297 0 L 342.139 0 L 342.139 17.237 L 364.307 17.237 Z M 12.696 35.01 L 12.696 40.137 L 57.325 40.137 L 57.325 12.696 L 35.01 12.696 Q 34.424 12.696 32.544 12.866 A 19.154 19.154 0 0 0 30.854 13.102 Q 29.97 13.263 28.985 13.512 A 36.264 36.264 0 0 0 28.199 13.721 A 23.967 23.967 0 0 0 25.421 14.688 A 31.69 31.69 0 0 0 22.999 15.821 A 17.681 17.681 0 0 0 18.994 18.689 A 20.838 20.838 0 0 0 17.969 19.727 Q 15.674 22.217 14.185 25.952 A 19.56 19.56 0 0 0 13.119 29.785 Q 12.802 31.575 12.722 33.619 A 35.837 35.837 0 0 0 12.696 35.01 Z"
            vectorEffect="non-scaling-stroke"
          />
        </g>{" "}
      </svg>
      {/* Search Box */}
      <div
        id="searchBox"
        className="hidden md:flex items-center h-[40px] px-2 ml-20 overflow-hidden rounded-md bg-searchBg"
      >
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="search..."
          className="w-full h-full px-2 placeholder-gray-400 bg-transparent border-none outline-none text-textColor"
        />
      </div>
      {/* Profile Container */}
      <div
        className="flex p-1 items-center justify-evenly h-[40px] lg:w-[25%] ml-auto"
        id="profileContainer"
      >
        <BellIcon className="w-[30px] h-[30px] text-gray-300 hover:text-sky-400 cursor-pointer " />
        <MoonIcon className="w-[30px] h-[30px] text-gray-300 hover:text-sky-400 cursor-pointer " />
        <DarkLight />

        <div className="flex items-center" id="loginIcon">
          <img
            src="https://lh3.googleusercontent.com/ogw/ADea4I4IObJfW4zzID_tkG_mAEOCkD4V0UymOFBoLve-ng=s192-c-mo"
            alt=""
            className="w-[40px] h-[40px] rounded-full object-cover min-w-[40px]"
          />
          <p className="text-textColor text-[16px] font-bold ml-2">
            Mehdi Minaee
            <span className="block text-[12px]">Product Designer</span>
          </p>
        
          <UserIcon className="w-[30px] h-[30px] text-gray-300 hover:text-sky-400 cursor-pointer " />
        </div>
      </div>
    </div>
  );
}