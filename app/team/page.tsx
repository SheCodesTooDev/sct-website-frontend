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
    <div className="">
      <div className="">
        <h1
          className="text-center text-sctblue mt-20 text-xl font-bold 
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
      md:hidden
     lg:-right-4 lg:w-72 lg:top-36 lg:inline"
        />

        <Image
          src={arrow2}
          alt="arrow"
          className="absolute left-24 -bottom-56 hidden
 md:hidden
    lg:w-40 lg:h-auto lg:left-28 lg:inline lg:-bottom-36"
        />

        <Image
          src={arrow3}
          alt="arrow"
          className="absolute right-44 -bottom-52 hidden
 md:hidden
 lg:-bottom-36 lg:w-16 lg:h-auto lg:right-52 lg:inline"
        />

       
          <Teamsection />

      </div>
      <Background />
    </div>
  );
};

export default TeamPage;
