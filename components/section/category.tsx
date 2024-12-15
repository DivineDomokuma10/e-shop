import {
  HiBookOpen,
  HiComputerDesktop,
  HiMiniDevicePhoneMobile,
} from "react-icons/hi2";
import Link from "next/link";
import { MdEarbuds } from "react-icons/md";
import { BiHeadphone, BiCar } from "react-icons/bi";
import { LuGamepad2, LuShirt, LuSofa } from "react-icons/lu";

import { CATEGORIES } from "@/lib/constants";

const categoriesIcon = [
  <HiMiniDevicePhoneMobile
    key="phones"
    className="w-7 h-7 font-light group-hover:text-gray-900 md:w-5 md:h-5"
  />,
  <HiComputerDesktop
    key="computer"
    className="w-7 h-7 font-light group-hover:text-gray-900 md:w-5 md:h-5"
  />,

  <LuSofa
    key="furnitures"
    className="w-7 h-7 font-light group-hover:text-gray-900 md:w-5 md:h-5"
  />,
  <BiHeadphone
    key="headphone"
    className="w-7 h-7 font-light group-hover:text-gray-900 md:w-5 md:h-5"
  />,
  <BiCar
    key="automobile"
    className="w-7 h-7 font-light group-hover:text-gray-900 md:w-5 md:h-5"
  />,
  <MdEarbuds
    key="accesories"
    className="w-7 h-7 font-light group-hover:text-gray-900 md:w-5 md:h-5"
  />,
  <LuGamepad2
    key="pc gaming"
    className="w-7 h-7 font-light group-hover:text-gray-900 md:w-5 md:h-5"
  />,
  <LuShirt
    key="clothes"
    className="w-7 h-7 font-light group-hover:text-gray-900 md:w-5 md:h-5"
  />,
  <HiBookOpen
    key="stationaries"
    className="w-7 h-7 font-light group-hover:text-gray-900 md:w-5 md:h-5"
  />,
];

const Category = () => {
  return (
    <main className="w-full flex flex-col px-5 py-10 md:px-36">
      <aside className="w-full flex flex-col space-y-12">
        <section className="w-full flex items-end justify-between">
          <div className="flex flex-col space-y-2">
            <h5 className="text-sm font-extrabold text-[#ff6f61]">
              Categories
            </h5>

            <h3 className="text-base text-[#333] font-medium md:text-2xl">
              Browse by Category
            </h3>
          </div>

          <button className="w-fit px-3 py-2 text-xs text-[#222] shadow-md font-normal transition bg-[#ff6f61] rounded-[5px] hover:scale-105">
            See more
          </button>
        </section>

        <section className="flex justify-between">
          {CATEGORIES.map(({ link, text }, i) => (
            <Link
              href={link}
              key={`desktop-${i}`}
              className="group hidden w-fit h-fit p-4 rounded-[5px] text-gray-600 flex-col items-center space-y-3 shadow-md md:flex"
            >
              {categoriesIcon[i]}
              <span className="text-xs">{text}</span>
            </Link>
          ))}

          {CATEGORIES.slice(0, 4).map(({ link, text }, i) => (
            <Link
              href={link}
              key={`mobile-${i}`}
              className="group w-fit h-fit p-2 rounded-[5px] text-gray-600 flex flex-col items-center space-y-3 shadow-md"
            >
              {categoriesIcon[i]}
              <span className="text-xs">{text}</span>
            </Link>
          ))}
        </section>
      </aside>
    </main>
  );
};

export default Category;
