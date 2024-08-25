import React from "react";
import YellowLine from '../components/common/YellowLine';
import Image from 'next/image';
import Ragadsection from "./Ragadsection";
import Reactangle from '../assets/illustrations/Rectangle.svg'
import Teamsection from "./Teamsection";
import Background from '../components/common/background'
import arrow1 from '../assets/illustrations/arrow1.svg'


const TeamPage = () => {
  return (
    <div className="flex items-center justify-center">
     <div className="w-4/5">
     <h1 className="text-center text-5xl tracking-widest font-semibold text-sctblue mt-32 ">
        Who is behind SheCodesToo;
        </h1>
       <div className="flex items-center justify-center ">
       <YellowLine />
       </div>
      <Image src={Reactangle} alt="" className="absolute right-0 h-auto w-80 "/>
        <Ragadsection />
<Image src={arrow1} alt="arrow" className="absolute right-44"/>
        <h1 className="text-center text-4xl tracking-widest font-semibold text-sctblue mt-32 ">
        Meet the team
        </h1>
        <div className="flex items-center justify-center ">
       <YellowLine />
       </div>
<Teamsection />

       </div>
       <Background />
     </div>
  );
};

export default TeamPage;
