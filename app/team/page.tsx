import React from "react";
import YellowLine from "../components/common/YellowLine";
import Image from "next/image";
// import Ragadsection from "./Ragadsection";
import Reactangle from "../assets/illustrations/Rectangle.svg";
import Teamsection from "./Teamsection";
import Background from "../components/common/background";
import arrow1 from "../assets/arrows/teamarrows/teamarrow1.svg";
import arrow2 from "../assets/arrows/teamarrows/teamarrow2.svg";
import arrow3 from "../assets/arrows/teamarrows/teamarrow3.svg";

const TeamPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-4/5">
        <h1
          className="text-center text-sctblue mt-20 text-2xl font-semibold 
      md:text-4xl
     lg:text-5xl lg:tracking-widest lg:mt-32"
        >
          Who is behind SheCodesToo;
        </h1>
        <div className="flex items-center justify-center ">
          <YellowLine />
        </div>

        <Image
          src={arrow1}
          alt="arrow"
          className="absolute hidden
        md:w-44 md:h-auto md:-right-6 md:top-48 md:inline 
         lg:right-36 lg:top-56 lg:inline lg:w-60"
        />

        <Image
          src={Reactangle}
          alt=""
          className="absolute -right-7 h-auto w-20 top-28 hidden
       md:w-36 md:top-32 md:right-0 md:inline
     lg:-right-4 lg:w-72 lg:top-36 "
        />

        <Image
          src={arrow2}
          alt="arrow"
          className="absolute left-24 -bottom-56 hidden
 md:w-20 md:h-auto md:left-3 md:inline md:bottom-1/3 
    lg:w-40 lg:h-auto lg:left-28 lg:inline lg:-bottom-36"
        />

        <Image
          src={arrow3}
          alt="arrow"
          className="absolute right-44 -bottom-52 hidden
 md:bottom-80 md:w-9 md:h-auto md:right-1 md:inline
 lg:-bottom-36 lg:w-16 lg:h-auto lg:right-52 lg:inline"
        />

        <div className="flex justify-center">
          <Teamsection />
        </div>
      </div>
      <Background />
    </div>
  );
};

export default TeamPage;
