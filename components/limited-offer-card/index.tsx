"use client";
import CountDown from "../count-down";
import Image from "next/image";
import { Button } from "../ui/button";

import { ReactNode } from "react";

interface Props {
  img: string;
  maintext: string;
  badgeIcon: ReactNode;
  countDownTimer: [number, number, number, number];
}

const LimitedOfferCard = ({
  maintext,
  badgeIcon,
  countDownTimer,
  img,
}: Props) => {
  return (
    <aside className="w-full flex flex-col-reverse -space-y-14 bg-gray-100 p-5 rounded-[5px] md:relative md:-space-y-0 md:flex-row md:p-12">
      <section className="w-full flex flex-col pt-10 item-center space-y-5 md:items-start md:space-y-7 md:w-1/2">
        <div className="flex items-center justify-center space-x-2 md:justify-normal">
          <div className="w-6 h-6 rounded-full shadow-md flex items-center justify-center bg-[#ff6f61]">
            {badgeIcon}
          </div>

          <p className="text-[#ff6f61] text-sm font-semibold">Limited Offer</p>
        </div>

        <h2 className="font-medium text-2xl text-center text-gray-700 md:text-start md:text-5xl">
          {maintext}
        </h2>

        <CountDown
          startTimers={countDownTimer}
          classStyles="w-full h-14 md:w-[57%] md:h-14"
        />

        <Button className="py-5 px-7 bg-blue-500 text-xs rounded-[7px] font-light md:w-fit ">
          Check it Out
        </Button>
      </section>

      <section className="w-full flex items-center justify-center md:w-1/2">
        <Image
          alt=""
          src={img}
          width={370}
          height={370}
          className="hidden -top-20 md:absolute md:block"
        />

        <Image
          alt=""
          src={img}
          width={200}
          height={200}
          className="md:hidden"
        />
      </section>
    </aside>
  );
};

export default LimitedOfferCard;
