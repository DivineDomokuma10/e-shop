import {
  RiMenu2Fill,
  RiSearch2Line,
  RiShoppingBag4Line,
  RiUser2Line,
} from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

import { poppins } from "@/fonts";
import { NAV_LINKS } from "@/lib/constants";

const Nav = () => {
  return (
    <nav className="w-full flex white items-center justify-between p-5 md:px-36 md:py-7">
      <RiMenu2Fill className="w-5 h-5 font-extrabold cursor-pointer md:hidden hover:text-[#ff6f61]" />

      <Image
        alt="logo"
        width={120}
        height={60}
        src={"/logo1.1.png"}
        className="md:hidden"
      />

      <Image
        alt="logo"
        width={150}
        height={50}
        src={"/logo1.1.png"}
        className="hidden md:block"
      />

      <div className="hidden space-x-7 md:flex">
        {NAV_LINKS.map(({ path, text }, i) => (
          <Link
            href={path}
            key={text + i}
            className={`${poppins.className} text-gray-700 text-sm hover:text-[#ff6f61] hover:font-bold`}
          >
            {text}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-5 text-xl  md:space-x-7">
        <RiSearch2Line className="font-bold cursor-pointer hover:text-[#ff6f61]" />

        <div className="relative">
          <span className="flex justify-center items-center font-bold text-xs text-[#ff6f61] rounded-full absolute -top-3 -right-1">
            3
          </span>
          <RiShoppingBag4Line className="font-bold cursor-pointer hover:text-[#ff6f61]" />
        </div>

        <RiUser2Line className="font-bold cursor-pointer hover:text-[#ff6f61]" />
      </div>
    </nav>
  );
};

export default Nav;
