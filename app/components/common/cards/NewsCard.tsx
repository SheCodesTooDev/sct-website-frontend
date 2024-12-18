import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ photo, title, date, slug }: any) => {
  return (
    <div className="text-start">
      <div>
        <div
          className="relative w-full h-80  md:h-80  lg:h-92 shadow-lg"
          style={{ paddingBottom: "56.25%" }}
        >
          <Image
            blurDataURL="data:image/jpeg..."
            className="rounded-xl w-full h-80  md:h-80  lg:h-92"
            src={photo}
            layout="fill"
            alt="illustration"
            objectFit="cover"
          />
        </div>
        <p className=" mt-4 font-medium text-xs lg:text-sm text-secondary">
          📅 {date}
        </p>

        <div className="flex flex-col justify-start items-start">
          <p className="font-medium text-lg lg:text-xl mt-2 my-3">{title}</p>
          <Link
            href={`/news/${slug}`}
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
