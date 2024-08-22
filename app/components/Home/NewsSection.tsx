import Blueline from "../common/BlueLine";
import NewsHomeCard from "../common/cards/NewsHomeCard";
import { news } from "@/app/data/news";
import NewsCard from "../common/cards/NewsCard";
import BigNewsCard from "../common/cards/BigNewsCard";
import Student from "@/public/images/8 .jpeg";
import Button from "../common/Button";
import { getSCTArticles } from "@/app/services/api";
import { useEffect, useState } from "react";
import Link from "next/link";

const News = async () => {
  const articles = await getSCTArticles();

  return (
    <div className="flex flex-col w-full justify-center items-center py-20 px-10 xl:px-32 text-center">
      <p className="font-medium text-3xl leading-loose">News</p>

      <Blueline />
      <p className="font-medium text-lg md:text-sm mb-16  leading-loose text-secondary w-60 sm:w-72 md:w-full">
        Stay Updated with Expert Insights & Latest Trends in Web Development
      </p>
      <div className="xl:grid xl:grid-cols-2 items-center gap-20">
        <section className="order-2">
          <BigNewsCard articles={articles} />
        </section>
        <section>
          {news.slice(0, 3).map((news) => (
            <NewsHomeCard key={news.id} {...news} />
          ))}
        </section>
      </div>
      <div className="flex justify-center mt-5">
        <Button color="bg-sctblue text-white">More news</Button>
      </div>
    </div>
  );
};

export default News;
