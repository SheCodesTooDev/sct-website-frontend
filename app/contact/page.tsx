"use client";
import YellowLine from "../components/common/YellowLine";
import Button from "../components/common/Button";

const Contact = () => {
  return (
    <div className="sct-bg flex flex-col w-full justify-center items-center py-20 px-8 xl:px-32 text-start pb-10">
      {/* Heading */}
      <div className="flex flex-col items-center mb-16">
        <p className="font-bold text-4xl leading-loose text-sctblue">
          Contact Us
        </p>
        <YellowLine />

        <div className="green-square-contact lg:mt-32 flex items-center mt-10"></div>
      </div>

      {/* Offices */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-20 w-full">
        {/* Info Section */}
        <div className="flex flex-col w-full mt-3 mb-8">
          <p className="font-thin text-sm">Location Info</p>
          <p className="font-extrabold text-2xl">
            Find Us: Discover our Global Presence and Local Offices
          </p>
        </div>

        {/* Iraq Office */}
        <div className="flex flex-col">
          <p className="text-sm my-1">Iraq Office</p>
          <div className="w-6 h-[3px] bg-black mb-3"></div>
          <p className="text-xl text-sctblue">
            Women of Tomorrow Foundation for Education Development
          </p>
          <p className="mt-1">Baghdad, Iraq.</p>
        </div>

        {/* UK Office */}
        <div className="flex flex-col">
          <p className="text-sm my-1">UK Office</p>
          <div className="w-6 h-[3px] bg-black mb-3"></div>
          <p className="text-xl text-sctblue">She Codes Too</p>
          <p className="mt-1">
            LYTCHETT HOUSE 3 FREELAND PARK WAREHAM ROAD DORSET, BH16 6FA, UK
          </p>
        </div>
      </div>

      {/* Contact Button */}
      <div className="flex flex-col items-center justify-center pt-8">
        <a href="mailto:info@shecodestooiq.com">
          <div className="text-center mb-4 font-sans text-lg text-gray-800">
            For any questions, please reach out to us at:
          </div>
          <div className="flex justify-center pt-1">
            <Button color="bg-sctyellow">info@shecodestooiq.com</Button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
