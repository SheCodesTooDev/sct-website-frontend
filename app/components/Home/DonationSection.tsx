import Link from "next/link";
import Button from "../common/Button";

const donationUrl = "https://buy.stripe.com/8wM8zDadbcfZgso5kl";

const Donation = () => (
  <div className="donation-background md:px-20 flex flex-col md:flex-row justify-between items-center p-6 text-center md:text-left">
    <div className="donation-shape"></div>
    <p className="donation-text text-2xl md:text-4xl leading-loose w-full md:w-2/3 lg:w-1/2 px-4 md:px-0">
      Support women in tech - Every contribution counts!
    </p>
    <div className="flex flex-col items-center text-center">
      <p className="text-sm md:text-base mb-2">
        Your donation helps more women learn coding and build tech careers.
      </p>
      <Link href={donationUrl} target="_blank">
        <Button
          extrStyles="hover:bg-sctblue hover:text-white flex items-center"
          color="bg-sctyellow text-black text-lg md:text-xl p-2 md:p-4 mb-12 md:mb-8 flex items-center"
        >
          <span className="mr-2">Donate</span>
          <svg
            width="47"
            height="40"
            viewBox="0 0 47 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.7222 38.6875L22.7222 38.6874L22.7157 38.6812L6.69786 23.3961L6.68111 23.3801L6.66294 23.3657C6.51697 23.2502 6.29926 23.0482 6.00335 22.7472C5.72262 22.4615 5.2612 21.9242 4.61086 21.1201C3.97407 20.3328 3.40529 19.526 2.90406 18.6997C2.41439 17.8924 1.97088 16.904 1.57739 15.7281C1.19036 14.5714 1 13.4571 1 12.3828C1 8.76083 2.05339 5.99177 4.10739 4.00809C6.16427 2.02163 9.02995 1 12.7701 1C13.7731 1 14.8027 1.1719 15.8607 1.52075C16.9247 1.87154 17.9123 2.34394 18.825 2.93768C19.7654 3.54942 20.5694 4.12015 21.2388 4.6499C21.909 5.18022 22.5455 5.74353 23.1484 6.33985L23.5 6.68765L23.8516 6.33986C24.4545 5.74353 25.091 5.18022 25.7612 4.6499C26.4306 4.12015 27.2346 3.54942 28.175 2.93768C29.0877 2.34394 30.0753 1.87154 31.1393 1.52075C32.1973 1.1719 33.2269 1 34.2299 1C37.9701 1 40.8357 2.02163 42.8926 4.00809C44.9466 5.99177 46 8.76083 46 12.3828C46 15.9371 44.1399 19.6243 40.2733 23.4498L24.2846 38.6809L24.2845 38.6809L24.2778 38.6875C24.0662 38.8968 23.8172 39 23.5 39C23.1828 39 22.9338 38.8968 22.7222 38.6875Z"
              fill="#03979C"
              stroke="white"
            />
          </svg>
        </Button>
      </Link>
    </div>
  </div>
);

export default Donation;
