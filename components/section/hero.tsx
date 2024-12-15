"use client";
import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { FaCartShopping } from "react-icons/fa6";

import { HERO_CAROUSEL_DATA } from "@/lib/constants";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Hero = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {HERO_CAROUSEL_DATA.map(({ desp, image, mainText }, i) => (
          <CarouselItem key={i}>
            <section className="w-screen h-[75dvh] bg-gray-100 flex p-5 md:h-screen md:px-36">
              <aside className="w-full h-full flex flex-col justify-center items-center space-y-7 md:items-start md:space-y-7 md:w-1/2">
                <h2 className="text-[#444] text-6xl text-center font-medium md:text-start md:text-7xl">
                  {mainText}
                </h2>

                <p className="text-[#888] text-lg text-center md:w-1/2 md:text-start md:text-lg">
                  {desp}
                </p>

                <button className="w-fit flex items-center space-x-2 rounded-[5px] px-7 py-2 transition bg-[#ff6f61] md:px-5 hover:scale-110">
                  <FaCartShopping />
                  <span className="text-sm">Shop Now</span>
                </button>
              </aside>

              <aside className="w-1/2 h-full hidden items-center justify-center md:flex">
                <Image alt="" width={400} height={400} src={image} />
              </aside>
            </section>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Hero;
