"use client";
import Image from "next/image";
import Button from "../common/Button";
import { heroImages } from "@/app/data/heroSectionImages";
import Link from "next/link";

const ExploreGallery = () => {
  return (
    <div className="split-background md:px-20">
      <div className="content text-black mt-8">
        <Link href="/courses">
          <Button
            extrStyles="hover:bg-sctblue hover:text-white"
            color="bg-sctyellow text-black text-lg md:text-xl p-2 md:p-4 mb-12 md:mb-8"
          >
            Explore Our Courses
          </Button>
        </Link>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-5 mx-10 md:mx-0">
          {heroImages.map((image, index) => {
            let translateY = "";
            if (index % 2 === 1) translateY = "translate-y-10 sm:mb-16";
            if (index % 3 === 1) translateY = "md:translate-y-10";
            if (index % 5 === 1 || index % 5 === 3)
              translateY = "xl:translate-y-10";
            if (index % 5 === 2) translateY = "xl:translate-y-20";

            const hiddenClass = index >= 6 ? "hidden md:hidden xl:block" : "";
            const hiddenXL = index >= 10 ? "hidden xl:block" : "";

            return (
              <Image
                key={index}
                blurDataURL="data:image/jpeg..."
                className={`md:w-80 md:h-96 w-full h-60 mb-4 object-cover rounded-3xl ${translateY} ${hiddenClass} ${hiddenXL}`}
                src={image}
                alt="hero"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreGallery;
