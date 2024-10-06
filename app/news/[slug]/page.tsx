import React from "react";
import Image from "next/image";
import { getArticle, getArticles } from "../../services/api";
import { news } from "@/app/data/news";
import NewsCard from "@/app/components/common/cards/NewsCard";
import Link from "next/link";
import Button from "@/app/components/common/Button";
import FacebookSvg from "@/app/assets/logos/facebook.svg";
import InstagramSvg from "@/app/assets/logos/instagram.svg";
import LinkedinSvg from "@/app/assets/logos/linkedin.svg";

const SingleNewsPage = async ({ params }: any) => {
  const { slug } = params;

  const article = await getArticle(slug);
  const articles = await getArticles();

  if (!article && !articles) {
    return <div>Article not found.</div>;
  }
  return (
    <div className="sct-bg flex flex-col w-full justify-center items-center py-10 md:py-20 ">
      <div className="px-6 sm:px-10 xl:px-64">
        <p className="text-3xl w-full font-semibold text-gray-800 mt-5">
          {article.title}
        </p>

        <p className="mt-3 font-medium text-base  text-secondary">
          📅 {article.date}
        </p>
      </div>
      <div className="my-10">
        {article.photo && (
          <div className="xl:grid xl:grid-cols-12 px-6 sm:px-10 xl:px-40">
            <div className="hidden xl:block col-span-1 h-full">
              <Link href="https://www.facebook.com/she.codes.too.iq/">
                <Image
                  blurDataURL="data:image/jpeg..."
                  className="  w-8 h-8 md:w-8 md:h-auto m-10"
                  src={FacebookSvg}
                  alt="'logo"
                />
              </Link>
              <Link href="https://www.instagram.com/she.codes.too.iq/">
                <Image
                  blurDataURL="data:image/jpeg..."
                  className=" w-8 h-8 md:w-8 md:h-auto m-10"
                  src={InstagramSvg}
                  alt="'logo"
                />
              </Link>
              <Link href="https://www.linkedin.com/school/shecodestooiq/">
                <Image
                  blurDataURL="data:image/jpeg..."
                  className=" w-8 h-8 md:w-8 md:h-auto m-10"
                  src={LinkedinSvg}
                  alt="'logo"
                />
              </Link>
            </div>
            <div
              className="lg:col-span-10 relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <Image
                blurDataURL="data:image/jpeg..."
                className="rounded-xl"
                src={article.photo}
                layout="fill"
                objectFit="cover"
                alt="illustration"
              />
            </div>
          </div>
        )}
        {article.description.map((block: any, index: number) => (
          <div className="text-pretty mt-10 px-6 sm:px-10 xl:px-64" key={index}>
            {block.type === "paragraph" &&
              block.children.map((child: any, idx: any) =>
                child.type === "text" ? (
                  <p className="text-lg mb-16" key={idx}>
                    {child.text}
                  </p>
                ) : child.type === "link" ? (
                  <a key={idx} href={child.url}>
                    {child.text}
                  </a>
                ) : null
              )}
            {block.type === "heading" &&
              block.level === 1 &&
              block.children.map((child: any, idx: any) => (
                <p className="my-4" key={idx}>
                  {child.text}
                </p>
              ))}
            {block.type === "heading" &&
              block.level === 2 &&
              block.children.map((child: any, idx: any) => (
                <p className="text-lg font-bold my-4" key={idx}>
                  {child.text}
                </p>
              ))}
          </div>
        ))}
      </div>
      <div className="px-6 sm:px-10 xl:px-64">
        <div className="flex justify-between w-full  sm:mt-12 lg:mt-20 mb-10">
          <p className="text-xl font-bold"> You might also Like ..</p>
          <Link
            className="text-sctblue text-lg hidden sm:flex  underline justify-end"
            href="/news"
          >
            More
          </Link>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-5 gap-y-12">
          {articles
            .reverse()
            .filter((item: any) => item.id !== article.id)
            .slice(0, 3)
            .map((article: any) => (
              <NewsCard key={article.id} {...article} />
            ))}
        </section>
        <Link className="mt-10 flex justify-center sm:hidden" href="/news">
          <Button extrStyles="px-4 text-sm text-white" color="bg-sctblue">
            More ..
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SingleNewsPage;
