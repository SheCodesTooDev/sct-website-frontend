"use client";
import YellowLine from "../common/YellowLine";

const NewsHero = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="font-bold text-4xl leading-loose text-sctblue">
        Latest News
      </p>

      <div className="my-4">
        <YellowLine />
      </div>

      <p className="font-medium text-lg md:text-md mb-16 leading-loose text-secondary w-60 sm:w-72 md:w-full">
        Latest News from She Codes Too
      </p>
    </div>
  );
};

export default NewsHero;
