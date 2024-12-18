import React from "react";
import SectionHeaders from "../section-headers";
import LimitedOfferCard from "../limited-offer-card";
import { LuShirt } from "react-icons/lu";

const LatestProduct = () => {
  return (
    <section className="w-full flex flex-col space-y-36 px-5 py-10 md:space-y-20 md:px-36">
      <SectionHeaders
        showMore={true}
        subTitle="Latest Products"
        title="Here's our Latest Products"
      />

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
