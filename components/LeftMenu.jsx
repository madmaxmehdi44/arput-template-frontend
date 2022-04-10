import {
  ChatAltIcon,
  CubeIcon,
  EyeIcon,
  FilmIcon,
  GlobeIcon,
  MapIcon,
} from "@heroicons/react/outline";
import MenuItem from "./MenuItem";

export default function LeftMenu() {
  return (
    <>
      {/* Left Menu */}
      <div
        id="leftMenu"
        className="z-10 sm:w-[60px] min-w-[60px] md:w-[10%] h-full flex flex-col items-center justify-evenly"
      >
        {/* <FirstPost /> */}
        <MenuItem
          icon={<MapIcon className="hover:text-textColor w-[40px] h-[40px]" />}
          urlPath="posts/"
          name="Home"
        />
        <MenuItem
          icon={<EyeIcon className="hover:text-textColor w-[40px] h-[40px]" />}
          urlPath="auth/login"
          name="Login"
        />
        <MenuItem
          icon={<FilmIcon className="hover:text-textColor w-[40px] h-[40px]" />}
          urlPath="posts/1"
          name="Videos"
        />
        <MenuItem
          icon={<CubeIcon className="hover:text-textColor w-[40px] h-[40px]" />}
          urlPath="live-client"
          name="Client"
        />
        <MenuItem
          icon={
            <ChatAltIcon className="hover:text-textColor w-[40px] h-[40px]" />
          }
          urlPath="posts/first-post"
          name="Home"
        />
        <MenuItem
          icon={
            <GlobeIcon className="hover:text-textColor w-[40px] h-[40px]" />
          }
          urlPath="
            posts/first-post"
          name="Home"
        />
      </div>
    </>
  );
}
