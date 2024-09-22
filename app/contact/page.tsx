import React from "react";
import YellowLine from "../components/common/YellowLine";
const contact = () => {
  return (
    <div className="flex flex-col items-center pt-20 px-5 text-center bg-gray-100  ">
      <p className="font-bold text-sctblue text-5xl leading-tight mb-4">
        Contact Us
      </p>
      <YellowLine />
      <p className="font-medium text-2xl md:text-lg leading-loose mb-8">
        Get in touch with us. We're here to assist you.{" "}
      </p>
    </div>
  );
};

export default contact;
