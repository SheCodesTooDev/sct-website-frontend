"use client";
import Image from "next/image";
import { partners } from "@/app/data/partners";
import YellowLine from "../common/YellowLine";

const Partners = () => (
  <div className="flex flex-col w-full justify-center items-center py-20 px-5 text-center">
    <p className="font-medium text-3xl leading-loose">
      Our Partners and Donors
    </p>

    <YellowLine />

    <p className="text-lg md:text-base leading-loose w-60 sm:w-72 md:w-full mb-10">
      Thank you to our valued partners and donors for believing in and
      supporting our mission.
    </p>

    <div className="bg-white border rounded-xl shadow-md flex flex-wrap justify-center items-center gap-6 py-6 px-6 sm:px-8 md:px-16 lg:px-20">
      {partners.map((ptr) => (
        <div
          key={ptr.id}
          className="flex justify-center items-center flex-1 min-w-[80px] max-w-[180px]"
        >
          <Image
            blurDataURL="data:image/jpeg..."
            className="w-full h-auto object-contain"
            src={ptr.image}
            alt="partner"
          />
        </div>
      ))}
    </div>
  </div>
);

export default Partners;
