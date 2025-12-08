"use client";
import Image from "next/image";
import Blueline from "../common/BlueLine";
import BlueBG from "../../assets/illustrations/blueBG.png";
import SupportIcon from "../../assets/illustrations/supportiveIcon.png";
import YellowBG from "../../assets/illustrations/yellowBG.png";
import EducationIcon from "../../assets/illustrations/educationalIcon.png";
import GreyBG from "../../assets/illustrations/greyBG.png";
import PersonIcon from "../../assets/illustrations/PersonIcon.png";

const EmpoweringSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative flex flex-col items-center w-full justify-center min-h-screen p-6 sm:p-4 my-10">
      <div className="absolute bottom-[20%] right-0 w-[400px] h-[200px] bg-gradient-to-bl from-[#00FFFF] to-[#FBBF31] rounded-full opacity-30 transform translate-x-1/1 translate-y-2/4  blur-3xl"></div>

      <div className="absolute top-1/3 left-20 w-[400px] h-[200px] bg-gradient-to-br from-[#00FFFF] to-[#FBBF31] rounded-full opacity-30 transform -translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <h1 className="text-2xl sm:text-4xl leading-tight text-center mt-20">
        Empowering Women,
        <br />
        Building Futures: Our Story
      </h1>

      <div className="flex items-center justify-center mb-0 sm:mb-0">
        <Blueline />
      </div>

      <p className="text-sm sm:text-lg font-light text-center mt-0 md:my-10">
        In a world where technology is everywhere, too many women are being left
        behind.
        <br />
        At She Codes Too, we’re here to change that. We’re building a supportive
        community where women can learn to code, discover their potential, and
        grow in confidence.
        <br />
        Every woman’s journey is unique, and we’re here to help her rise,
        connect, and make a meaningful impact in her community.
      </p>

      <div className="flex flex-wrap justify-center  mt-0 mb-0 sm:gap-y-12 sm:gap-x-16">
        {/* Card 1 */}

        <div className="relative flex flex-col items-center justify-center min-h-[70vh] p-2 sm:p-2">
          <div className="absolute -translate-x-16 translate-y-5">
            <Image src={BlueBG} alt="" className="w-[250px] h-auto" />
          </div>

          <div className="relative w-72 h-64 p-4 bg-white shadow-lg -rotate-2 rounded-3xl border-2">
            <Image
              src={SupportIcon}
              alt=""
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-[92px] h-auto"
            />

            <h1 className="text-center mt-10 font-black">
              Supportive Environment
            </h1>

            <p className="text-center mt-10 font-light">
              where these women can feel comfortable and empowered to pursue
              careers as professional programmers.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative flex flex-col items-center justify-center min-h-[50vh] p-2 sm:p-2">
          {/* Background Image */}
          <div className="absolute -translate-x-2.5 -translate-y-16">
            <Image
              src={YellowBG}
              alt="Background"
              className="w-[340px] h-auto"
            />
          </div>

          <div className="relative w-72 p-4 bg-white shadow-lg rotate-2 rounded-3xl border-2">
            <Image
              src={EducationIcon}
              alt="Education Icon"
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-[93px] h-auto"
            />

            <h1 className="text-center mt-10 font-black">
              Educational Approach
            </h1>

            <p className="text-center mt-10 font-light">
              with a diverse range of courses covering various programming
              topics, women are empowered to explore their areas of interest and
              passion.
            </p>
          </div>
        </div>

        {/* card3 */}
        {/* <div className="absolute transform translate-x-[-10px] translate-y-[-90px] "> */}
        <div className="relative flex flex-col items-center justify-center min-h-[30vh] mt-10 sm:mt-0">
          {/* Background Image */}
          <div className="absolute translate-x-14 translate-y-12">
            <Image src={GreyBG} alt="Background" className="w-[224px] h-auto" />
          </div>

          {/* Card */}
          <div className="relative w-72 h-64 p-4 bg-white shadow-lg -rotate-6 rounded-3xl border-2">
            {/* Icon on top */}
            <Image
              src={PersonIcon}
              alt="Mentor Icon"
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-[96px] h-auto"
            />

            {/* Title */}
            <h1 className="text-center mt-10 font-black">
              Personalised Mentoring
            </h1>

            {/* Description */}
            <p className="text-center mt-10 font-light">
              including valuable insights on career development, to ensure our
              participants maximise their learning experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpoweringSection;
