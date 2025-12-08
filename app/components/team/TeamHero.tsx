"use client";

import YellowLine from "../common/YellowLine";

export default function TeamHero({ title }: any) {
  return (
    <div className="flex justify-center flex-col items-center">
      <p className="font-bold text-center text-4xl leading-loose text-sctblue">
        {title}
      </p>

      <div>
        <YellowLine />
      </div>
    </div>
  );
}
