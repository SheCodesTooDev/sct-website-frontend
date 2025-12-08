"use client";

import ImageWithBg from "../ImageWithBackground";

const TeamCard = ({ name, position, image, index }: any) => {
  return (
    <div className="border bg-white border-t-2 border-r-2 border-l-2 rounded-xl shadow-xl flex py-2 px-8 justify-center">
      <div className="my-5">
        <ImageWithBg index={index} image={image} />

        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-nowrap text-lg lg:text-xl mt-2 my-3 text-center">
            {name}
          </p>

          <div className="font-medium text-lg lg:text-xl mt-2 my-3">
            <p className="text-start font-medium text-sm line-clamp-1 sm:text-md md:text-base w-full leading-loose text-secondary">
              {position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
