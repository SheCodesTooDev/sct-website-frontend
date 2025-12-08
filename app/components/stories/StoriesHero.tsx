"use client";
import YellowLine from "../common/YellowLine";

export default function StoriesHero() {
  return (
    <div className="flex justify-center flex-col items-center">
      <p className="font-bold text-center text-4xl leading-loose text-sctblue">
        Our Success Stories
      </p>

      <div>
        <YellowLine />
      </div>

      <div className="font-extralight text-center text-lg md:text-xl mb-16 leading-loose text-black">
        Over the years, She Codes Too bootcamp graduates have successfully
        transitioned into careers as web developers or related fields, often
        securing roles within just a few months of graduating. With over 90% of
        our alumni placed in tech jobs, their journeys are a testament to the
        power of dedication and skill development. Read their stories here.
      </div>
    </div>
  );
}
