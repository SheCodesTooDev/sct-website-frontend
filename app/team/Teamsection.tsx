import React from "react";
import Image from "next/image";
import ibrahim from "../assets/illustrations/ibrahim.svg";
import Patrick from "../assets/illustrations/Patrik.svg";
import aya from "../assets/illustrations/aya.svg";
import moh from "../assets/illustrations/mohammed.svg";
import ayaS from "../assets/illustrations/ayaS.svg";
import jafar from "../assets/illustrations/jaafar.svg";
import athraa from "../assets/illustrations/athraa.svg";
import LinkedinIcon from "../components/common/LinkedinIcon";
import GmailIcon from "../components/common/gmailIcon";
import ragad from "../assets/illustrations/raghad.svg";

export default function Teamsection() {
  return (
    <div
      className="text-center mt-3 
 md:mt-14
 lg:mt-20 "
    >
      <div
        className=" flex justify-center flex-wrap
md:flex md:justify-center md:items-center md:gap-5
lg:flex lg:justify-center lg:items-center lg:gap-5 "
      >
        <div
          className="flex items-center justify-around w-72 h-28 border-2 border-solid border-gray-300 rounded-lg my-5
md:w-40 md:h-56 md:inline
lg:w-56 lg:text-center lg:h-fit "
        >
          <Image
            src={ragad}
            alt=""
            className=" h-auto w-20
 md:w-24 md:mx-auto
 lg:w-36 lg:ml-auto lg:mr-auto lg:-mt-3"
          />

          <div>
            <p
              className="mt-4 font-bold text-sm
 md:text-sm md:mt-3
 lg:text-lg"
            >
              Raghad Al-Abboodi
            </p>
            <p
              className="text-xs mt-1 pb-2 
md:mb-3 md:text-xs
lg:mb-0 lg:pb-0"
            >
              Founder of SheCodesToo
            </p>
            <p
              className="text-xs mt-1 px-1 leading-4 mb-4 hidden
 md:hidden 
 lg:inline"
            >
              Raghad aims to empower women in technology through coding
              education.
            </p>
            <div className="flex justify-center items-center">
              <LinkedinIcon /> <GmailIcon />
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-around w-72 h-28 border-2 border-solid border-gray-300 rounded-lg my-5
md:w-40 md:h-56 md:inline
lg:w-56 lg:text-center lg:h-fit "
        >
          <Image
            src={ibrahim}
            alt=""
            className=" h-auto w-20 mr-3
 md:w-24 md:mx-auto md:mt-1 md:mr-0
 lg:w-36 lg:ml-auto lg:mr-auto"
          />

          <div>
            <p
              className="mt-4 font-bold text-sm
 md:text-sm md:mt-3
 lg:text-lg"
            >
              Ibrahim Jamal
            </p>
            <p
              className="text-xs mt-1 pb-2 
md:mb-4 md:text-xs
lg:mb-0 lg:pb-0"
            >
              Project manager
            </p>
            <p
              className="text-xs mt-1 px-1 leading-4 mb-4 hidden
 md:hidden 
 lg:inline"
            >
              Ibrahim is responsible for the day-to-day operations of the
              organisation.
            </p>
            <div className="flex justify-center items-center">
              <LinkedinIcon /> <GmailIcon />
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-around w-72 h-28 border-2 border-solid border-gray-300 rounded-lg my-5
md:w-40 md:h-56 md:inline
lg:w-56 lg:text-center lg:h-fit "
        >
          <Image
            src={Patrick}
            alt=""
            className=" h-auto w-20
 md:w-24 md:mx-auto md:mt-1
 lg:w-36 lg:ml-auto lg:mr-auto"
          />

          <div className="text-center">
            <p
              className="mt-4 font-bold text-sm
 md:text-sm md:mt-3
 lg:text-lg"
            >
              Patrick Atkinson
            </p>
            <p
              className="text-xs mt-1 pb-2 
md:mb-4 md:text-xs
lg:mb-0 lg:pb-0"
            >
              Technical Program Advisor
            </p>
            <p
              className="text-xs mt-1 px-1 leading-4 mb-4 hidden
 md:hidden 
 lg:inline"
            >
              guiding SheCodesToos strategies and innovation with expertise.
            </p>
            <div className="flex justify-center items-center">
              <LinkedinIcon /> <GmailIcon />
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-around w-72 h-28 border-2 border-solid border-gray-300 rounded-lg my-5
md:w-40 md:h-56 md:inline
lg:w-56 lg:text-center lg:h-fit "
        >
          <Image
            src={aya}
            alt=""
            className=" h-auto w-20
 md:w-24 md:mx-auto
 lg:w-32 lg:mx-auto "
          />

          <div className="text-center">
            <p
              className="mt-4 font-bold text-sm
 md:text-sm md:mt-3
 lg:text-lg lg:mt-0"
            >
              Aya Mohammed
            </p>
            <p
              className="text-xs mt-1 pb-2 
md:mb-3 md:text-xs
lg:mb-0 lg:pb-0 lg:mt-0"
            >
              Project Assistant
            </p>
            <p
              className="text-xs mt-1 px-1 leading-4 mb-4 hidden
 md:hidden 
 lg:inline lg:mb-0"
            >
              Point of Contact, aiding class activities, event coordination, and
              tech setup.
            </p>
            <div className="flex justify-center items-center">
              <LinkedinIcon /> <GmailIcon />
            </div>
          </div>
        </div>
      </div>

      <div
        className=" mb-40 flex justify-center flex-wrap
 md:mt-7 md:flex md:justify-center md:items-center md:gap-5
lg:mb-40 lg:mt-8 lg:flex lg:justify-center lg:items-center lg:gap-9"
      >
        <div
          className="flex items-center justify-around w-72 h-28 border-2 border-solid border-gray-300 rounded-lg my-5
md:w-40 md:h-56 md:inline
lg:w-56 lg:text-center lg:h-fit "
        >
          <Image
            src={moh}
            alt=""
            className=" h-auto w-20
 md:w-28 md:mx-auto 
 lg:w-36 lg:ml-auto lg:mr-auto"
          />

          <div className="text-center">
            <p
              className="mt-4 font-bold text-sm
 md:text-sm md:mt-3
 lg:text-lg lg:mt-1"
            >
              Mohammed Ali
            </p>
            <p
              className="text-xs mt-1 pb-2 
md:mb-3 md:text-xs
lg:mb-0 lg:pb-0"
            >
              Trainer
            </p>
            <p
              className="text-xs mt-1 px-1 leading-4 mb-4 hidden
 md:hidden 
 lg:inline"
            >
              SheCodesToo s Lead Trainer, excelling in front-end development and
              mentoring.
            </p>
            <div className="flex justify-center items-center">
              <LinkedinIcon /> <GmailIcon />
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-around w-72 h-28 border-2 border-solid border-gray-300 rounded-lg my-5
md:w-40 md:h-56 md:inline
lg:w-56 lg:text-center lg:h-fit "
        >
          <Image
            src={ayaS}
            alt=""
            className=" h-auto w-20 mr-5
 md:w-24 md:mx-auto
 lg:w-36 lg:ml-auto lg:mr-auto"
          />

          <div className="text-center">
            <p
              className="mt-4 font-bold text-sm
 md:text-sm md:mt-3
 lg:text-lg lg:mt-1"
            >
              Aya Salam
            </p>
            <p
              className="text-xs mt-1 pb-2 
md:mb-3 md:text-xs
lg:mb-0 lg:pb-0"
            >
              Trainer
            </p>
            <p
              className="text-xs mt-1 px-1 leading-4 mb-4 hidden
 md:hidden 
 lg:inline"
            >
              Trainer with 3+ years in software development, Re-coded graduate.
            </p>
            <div className="flex justify-center items-center">
              <LinkedinIcon /> <GmailIcon />
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-around w-72 h-28 border-2 border-solid border-gray-300 rounded-lg my-5
md:w-40 md:h-56 md:inline
lg:w-56 lg:text-center lg:h-fit "
        >
          <Image
            src={jafar}
            alt=""
            className=" h-auto w-20
 md:w-24 md:mx-auto
 lg:w-36 lg:ml-auto lg:mr-auto"
          />

          <div className="text-center">
            <p
              className="mt-4 font-bold text-sm
 md:text-sm md:mt-3
 lg:text-lg lg:mt-1"
            >
              Jaafar Mohammed
            </p>
            <p
              className="text-xs mt-1 pb-2 
md:mb-3 md:text-xs
lg:mb-0 lg:pb-0"
            >
              Teaching Assistant
            </p>
            <p
              className="text-xs mt-1 px-1 leading-4 mb-4 hidden
 md:hidden 
 lg:inline"
            >
              Jaafar works as the Teaching Assistant for She Codes Too
            </p>
            <div className="flex justify-center items-center">
              <LinkedinIcon /> <GmailIcon />
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-around w-72 h-28 border-2 border-solid border-gray-300 rounded-lg my-5
md:w-40 md:h-56 md:inline
lg:w-56 lg:text-center lg:h-fit "
        >
          <Image
            src={athraa}
            alt=""
            className=" h-auto w-20
 md:w-24 md:mx-auto
 lg:w-36 lg:ml-auto lg:mr-auto"
          />

          <div className="text-center">
            <p
              className="mt-4 font-bold text-sm
 md:text-sm md:mt-3
 lg:text-lg"
            >
              Athraa Mohammed
            </p>
            <p
              className="text-xs mt-1 pb-2 
md:mb-3 md:text-xs
lg:mb-0 lg:pb-0"
            >
              Teaching Assistant
            </p>
            <p
              className="text-xs mt-1 px-1 leading-4 mb-4 hidden
 md:hidden 
 lg:inline"
            >
              Athraa works as the Teaching Assistant for She Codes Too
            </p>
            <div className="flex justify-center items-center">
              <LinkedinIcon /> <GmailIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
