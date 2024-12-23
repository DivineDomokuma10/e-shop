import React from "react";
import { LuShirt } from "react-icons/lu";

import ProductCard from "../product-card";
import SectionHeaders from "../section-headers";
import LimitedOfferCard from "../limited-offer-card";
import { TOP_PRODUCTS_DATA } from "@/lib/constants";

const LatestProduct = () => {
  return (
    <section className="w-full flex flex-col space-y-20 px-5 py-10 md:px-36">
      <SectionHeaders subTitle="Top Products" title="Here's our Top Products" />

      <section className="flex flex-col items-center space-y-10 md:flex-row md:space-y-0 md:flex-wrap md:justify-between">
        {TOP_PRODUCTS_DATA.slice(0, 8).map((product, i) => (
          <div key={`product-${i}`} className="w-11/12 md:pb-20 md:w-fit">
            <ProductCard {...product} />
          </div>
        ))}
      </section>

      <LimitedOfferCard
        img="/powerbank.png"
        countDownTimer={[4, 3, 7, 34]}
        maintext="Smooth Charging Experience"
        badgeIcon={<LuShirt className="text-white font-extrabold" />}
      />
    </section>
  );
};

export default LatestProduct;
