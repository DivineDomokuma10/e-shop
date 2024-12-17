import {
  HiBookOpen,
  HiComputerDesktop,
  HiMiniDevicePhoneMobile,
} from "react-icons/hi2";
import Link from "next/link";
import { MdEarbuds } from "react-icons/md";
import { BiHeadphone, BiCar } from "react-icons/bi";
import { LuGamepad2, LuShirt, LuSofa } from "react-icons/lu";

import { Button } from "../ui/button";
import CountDown from "../count-down";
import { CATEGORIES } from "@/lib/constants";
import Image from "next/image";

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
    <main className="w-full flex flex-col space-y-36 px-5 py-10 md:space-y-44 md:px-36">
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
              className="group w-fit h-fit p-2 rounded-[5px] text-gray-600 flex flex-col items-center space-y-3 shadow-md md:hidden"
            >
              {categoriesIcon[i]}
              <span className="text-xs">{text}</span>
            </Link>
          ))}
        </section>
      </aside>

      <aside className="w-full flex flex-col-reverse -space-y-14 bg-gray-100 p-5 rounded-[5px] md:relative md:-space-y-0 md:flex-row md:p-12">
        <section className="w-full flex flex-col pt-10 item-center space-y-5 md:items-start md:space-y-7 md:w-1/2">
          <div className="flex items-center justify-center space-x-2 md:justify-normal">
            <div className="w-6 h-6 rounded-full shadow-md flex items-center justify-center bg-[#ff6f61]">
              <BiHeadphone className="text-white font-extrabold" />
            </div>

            <p className="text-[#ff6f61] text-sm font-semibold">
              Limited Offer
            </p>
          </div>

          <h2 className="font-medium text-2xl text-center text-gray-700 md:text-start md:text-5xl">
            Enhance Your Music Experience
          </h2>

          <CountDown
            startTimers={[15, 10, 56, 54]}
            classStyles="w-full h-14 md:w-[57%] md:h-14"
          />

          <Button className="py-5 px-7 bg-blue-500 text-xs rounded-[7px] font-light md:w-fit ">
            Check it Out
          </Button>
        </section>

        <section className="w-full flex items-center justify-center md:w-1/2">
          <Image
            alt=""
            width={370}
            height={370}
            src={"/headphone2.png"}
            className="hidden -top-20 md:absolute md:block"
          />

          <Image
            alt=""
            width={200}
            height={200}
            src={"/headphone2.png"}
            className="md:hidden"
          />
        </section>
      </aside>
    </main>
  );
};

export default Category;
