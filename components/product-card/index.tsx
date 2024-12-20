import React from "react";
import Image from "next/image";

import { Button } from "../ui/button";

interface Props {
  img: string;
  name: string;
  price: string;
}

const ProductCard = ({ img, name, price }: Props) => {
  return (
    <aside className="w-full flex flex-col space-y-5 overflow-hidden md:w-fit">
      <div className="flex justify-center items-center bg-gray-200 px-10 py-3 rounded-xl">
        <Image
          alt=""
          src={img}
          width={200}
          height={100}
          className="transition md:hidden hover:scale-110"
        />

        <Image
          alt=""
          src={img}
          width={150}
          height={100}
          className="hidden transition md:block hover:scale-110"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <div className="flex justify-between px-1 text-sm">
          <p className="font-extralight">{name}</p>

          <h4 className="font-semibold">${price}</h4>
        </div>

        <Button className="w-full font-normal rounded-[5px] bg-blue-400">
          View Product
        </Button>
      </div>
    </aside>
  );
};

export default ProductCard;
