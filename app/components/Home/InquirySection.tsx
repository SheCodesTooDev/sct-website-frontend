"use client";
import Button from "../common/Button";
import Line from "../../assets/illustrations/line.svg";
import Image from "next/image";
import Link from "next/link";

const InquirySection = () => (
  <div className="bg-lightblue flex flex-col w-full justify-center items-center py-20 px-5 text-center">
    <div className="bracet"></div>

    <p className="font-medium text-2xl md:text-3xl leading-loose mb-6">
      Have questions or need assistance? <br /> <br /> Get in touch with us
      today!
    </p>

    <div className="end-bracet"></div>

    <div className="flex flex-col items-center gap-4">
      <Image
        blurDataURL="data:image/jpeg..."
        placeholder="blur"
        loading="lazy"
        src={Line}
        alt="line"
      />
      <Link href="contact">
        <Button color="bg-sctyellow">Contact Us</Button>
      </Link>
    </div>
  </div>
);

export default InquirySection;
