import React from "react";
import Image from "next/image";
import { LuCalendar } from "react-icons/lu";

interface Props {
  img: string;
  path: string;
  title: string;
  timestamp: string;
}

const BlogCard = ({ img, title, timestamp }: Props) => {
  return (
    <aside className="w-fit flex flex-col space-y-3 md:w-[23%] md:space-y-5">
      <div className="w-full h-56 overflow-hidden rounded-[3px]">
        <Image
          alt=""
          src={img}
          width={350}
          height={100}
          className="transition hover:scale-110"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex space-x-3">
          <LuCalendar className="text-xs font-bold" />
          <p className="text-xs text-gray-500">{timestamp}</p>
        </div>

        <p className="text-sm text-gray-800">{title}</p>
      </div>
    </aside>
  );
};

export default BlogCard;
