import Image from "next/image";
import { NewsProps } from "@/app/types/newsTypes";
import Link from "next/link";

const NewsCard: React.FC<NewsProps> = ({ image, title, date }) => {
  return (
    <div className="flex flex-col items-start px-0 md:px-10 xl:px-0 justify-center text-start mb-5">
      <div className="flex gap-8 ">
        <Image
          className="rounded-xl w-40 h-24 object-cover"
          src={image}
          alt="illustration"
        />
        <p className=" mt-4 font-medium text-xs lg:text-sm text-secondary">
          📅 {date}
        </p>

        <div className="flex flex-col justify-start items-start">
          <p className="font-medium text-lg lg:text-xl mt-2 my-3">{title}</p>
          <Link
            href={`/news/test`}
            className="text-sctblue text-sm  underline flex justify-end"
          >
            Read more -&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
