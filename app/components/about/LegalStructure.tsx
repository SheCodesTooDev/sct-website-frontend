"use client";
import Image from "next/image";
import YellowLine from "../common/YellowLine";
import IraqLogo from "@/app/assets/logos/iraq.svg";
import UKLogo from "@/app/assets/logos/uk.svg";
import LegalIllustration from "@/app/assets/illustrations/legal.svg";
import ContractIllustration from "@/app/assets/illustrations/contract.svg";
import LocationIllustration from "@/app/assets/illustrations/location.svg";

const LegalStructure = () => {
  return (
    <>
      <p className="mt-8 md:mt-24 text-center font-bold text-4xl leading-loose">
        Our Legal Structure
      </p>

      <div>
        <YellowLine />
      </div>

      <p className="font-medium text-start text-base md:text-md mb-16 leading-loose text-secondary">
        She Codes Too operates under official registrations in both Iraq and the
        United Kingdom.
      </p>

      <div className="bg-gray-200 pb-10 w-full border border-t-1 rounded-lg shadow-md py-2 px-10 md:px-10 lg:px-16 xl:px-16 justify-center items-center md:grid md:grid-cols-2 place-items-center">
        {/* Iraq Registration */}
        <div>
          <Image
            blurDataURL="data:image/jpeg..."
            placeholder="blur"
            loading="lazy"
            src={IraqLogo}
            className="mt-10"
            alt="iraq-logo"
          />
          <p className="text-3xl font-semibold mt-3">Iraq Registration</p>
          <hr className="border-2 border-black w-8 mt-5 rounded-xl" />

          <section>
            <div className="flex items-center gap-8">
              <Image
                blurDataURL="data:image/jpeg..."
                src={LegalIllustration}
                className="mt-10"
                alt="legal-illustration"
              />
              <p className="text-lg font-semibold text-sctblue mt-10">
                Legal Name
              </p>
            </div>
            <p className="text-sm font-semibold mt-5">
              Women of Tomorrow Foundation for Education Development
            </p>
            <hr className="border-1 border-secondary w-52 mt-8 rounded-xl" />
          </section>

          <section>
            <div className="flex items-center gap-8">
              <Image
                blurDataURL="data:image/jpeg..."
                src={ContractIllustration}
                className="mt-10"
                alt="contract-illustration"
              />
              <p className="text-lg font-semibold text-sctblue mt-10">
                NGO Registration Number
              </p>
            </div>
            <p className="text-sm font-semibold mt-5">1EO2406019</p>
            <hr className="border-1 border-secondary w-52 mt-8 rounded-xl" />
          </section>

          <section>
            <div className="flex items-center gap-8">
              <Image
                blurDataURL="data:image/jpeg..."
                src={LocationIllustration}
                className="mt-10"
                alt="location-illustration"
              />
              <p className="text-lg font-semibold text-sctblue mt-10">
                Headquarters
              </p>
            </div>
            <p className="text-sm font-semibold mt-5">Baghdad, Iraq</p>
          </section>
        </div>

        {/* UK Registration */}
        <div className="pt-8 md:pt-0">
          <Image
            blurDataURL="data:image/jpeg..."
            placeholder="blur"
            loading="lazy"
            src={UKLogo}
            className="mt-10"
            alt="uk-logo"
          />
          <p className="text-3xl font-semibold mt-3">UK Registration</p>
          <hr className="border-2 border-black w-8 mt-5 rounded-xl" />

          <section>
            <div className="flex items-center gap-8">
              <Image
                blurDataURL="data:image/jpeg..."
                src={LegalIllustration}
                className="mt-10"
                alt="legal-illustration"
              />
              <p className="text-lg font-semibold text-sctblue mt-10">
                Legal Name
              </p>
            </div>
            <p className="text-sm font-semibold mt-5">She Codes Too</p>
            <hr className="border-1 border-secondary w-52 mt-8 rounded-xl" />
          </section>

          <section>
            <div className="flex items-center gap-8">
              <Image
                blurDataURL="data:image/jpeg..."
                src={ContractIllustration}
                className="mt-10"
                alt="contract-illustration"
              />
              <p className="text-lg font-semibold text-sctblue mt-10">
                Charity Registration Number
              </p>
            </div>
            <p className="text-sm font-semibold mt-5">1209658</p>
            <hr className="border-1 border-secondary w-52 mt-8 rounded-xl" />
          </section>

          <section>
            <div className="flex items-center gap-8">
              <Image
                blurDataURL="data:image/jpeg..."
                src={LocationIllustration}
                className="mt-10"
                alt="location-illustration"
              />
              <p className="text-lg font-semibold text-sctblue mt-10">
                Registered Address
              </p>
            </div>
            <p className="text-sm font-semibold mt-5">Dorset, United Kingdom</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default LegalStructure;
