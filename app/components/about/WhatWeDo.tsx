"use client";

import { about } from "@/app/data/about";
import YellowLine from "../common/YellowLine";
import NewsCard from "../common/cards/NewsCard";
import AboutCard from "../common/cards/AboutCard";

const WhatWeDo = () => {
  return (
    <div className="mt-24 flex justify-center flex-col items-center">
      <section className="grid grid-cols-1 md:grid-cols-2 sm:gap-x-5 gap-y-24">
        {about.map((item: any) => (
          <AboutCard key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
};

export default WhatWeDo;
