import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/common/Button";
import FacebookSvg from "@/app/assets/logos/facebook.svg";
import InstagramSvg from "@/app/assets/logos/instagram.svg";
import LinkedinSvg from "@/app/assets/logos/linkedin.svg";
import NewsCard from "@/app/components/common/cards/NewsCard";
import { getArticle, getArticles } from "../../services/api";

const renderTextChildren = (children: any[]) => {
  return children.map((child, i) => {
    if (child.type === "text") {
      let textElement = child.text;

      if (child.bold) textElement = <strong key={i}>{textElement}</strong>;
      if (child.italic) textElement = <em key={i}>{textElement}</em>;
      if (child.underline)
        textElement = (
          <span key={i} className="underline">
            {textElement}
          </span>
        );

      return textElement;
    }

    if (child.type === "link") {
      return (
        <a
          key={i}
          href={child.url}
          className="text-sctblue underline hover:text-sctblue/80"
        >
          {child.children?.map((nested: any) => nested.text)}
        </a>
      );
    }

    return null;
  });
};

const renderContent = (blocks: any[]) => {
  return blocks.map((block, index) => {
    // PARAGRAPH
    if (block.type === "paragraph") {
      return (
        <p key={index} className="mb-5 leading-relaxed">
          {renderTextChildren(block.children)}
        </p>
      );
    }

    // HEADINGS
    if (block.type === "heading") {
      const content = renderTextChildren(block.children);
      switch (block.level) {
        case 1:
          return <h1 key={index}>{content}</h1>;
        case 2:
          return <h2 key={index}>{content}</h2>;
        case 3:
          return <h3 key={index}>{content}</h3>;
        case 4:
          return <h4 key={index}>{content}</h4>;
        case 5:
          return <h5 key={index}>{content}</h5>;
        case 6:
          return <h6 key={index}>{content}</h6>;
        default:
          return <h3 key={index}>{content}</h3>;
      }
    }

    // UNORDERED LIST
    if (block.type === "list" && block.format === "unordered") {
      return (
        <ul key={index} className="list-disc pl-6 mb-5 space-y-2">
          {block.children.map((item: any, i: number) => (
            <li key={i}>{renderTextChildren(item.children)}</li>
          ))}
        </ul>
      );
    }

    // ORDERED LIST
    if (block.type === "list" && block.format === "ordered") {
      return (
        <ol key={index} className="list-decimal pl-6 mb-5 space-y-2">
          {block.children.map((item: any, i: number) => (
            <li key={i}>{renderTextChildren(item.children)}</li>
          ))}
        </ol>
      );
    }

    // QUOTES
    if (block.type === "quote") {
      return (
        <blockquote
          key={index}
          className="border-l-4 border-sctblue/60 pl-4 italic text-gray-700 mb-6"
        >
          {renderTextChildren(block.children)}
        </blockquote>
      );
    }
    if (block.type === "image") {
      return (
        <Image
          key={index}
          src={block.image?.url}
          alt={block.image?.alternativeText || "image"}
          width={900}
          height={600}
          className="rounded-xl my-10"
        />
      );
    }

    return null;
  });
};

const SingleNewsPage = async ({ params }: any) => {
  const { slug } = params;

  const article = await getArticle(slug);
  const articles = await getArticles();

  if (!article) return <div>Article not found.</div>;

  return (
    <div className="sct-bg flex flex-col w-full justify-center items-center py-10 md:py-20">
      {/* TITLE & DATE */}
      <div className="px-6 sm:px-10 xl:px-64">
        <p className="text-3xl font-semibold text-gray-800 mt-5">
          {article.title}
        </p>
        <p className="mt-3 font-medium text-base text-secondary">
          📅 {article.date}
        </p>
      </div>

      {/* IMAGE + SOCIAL ICONS */}
      <div className="my-10">
        {article.photo && (
          <div className="xl:grid xl:grid-cols-12 px-6 sm:px-10 xl:px-40">
            <div className="hidden xl:block col-span-1 h-full">
              <Link href="https://www.facebook.com/she.codes.too.iq/">
                <Image src={FacebookSvg} alt="fb" className="w-8 h-8 m-10" />
              </Link>
              <Link href="https://www.instagram.com/she.codes.too.iq/">
                <Image src={InstagramSvg} alt="ig" className="w-8 h-8 m-10" />
              </Link>
              <Link href="https://www.linkedin.com/school/shecodestooiq/">
                <Image src={LinkedinSvg} alt="li" className="w-8 h-8 m-10" />
              </Link>
            </div>

            <div
              className="lg:col-span-10 relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <Image
                src={article.photo}
                alt="illustration"
                layout="fill"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        )}

        {/* ARTICLE BODY (CLEAN, READABLE, WITH LINE BREAKS) */}
        <div className="prose prose-lg xl:prose-xl prose-headings:font-bold prose-headings:text-gray-800 prose-headings:mt-8 prose-headings:mb-4 prose-p:leading-relaxed prose-p:mb-6 prose-li:mb-3 prose-ul:pl-6 prose-ol:pl-6 text-gray-700 mt-10 px-6 sm:px-10 xl:px-64">
          {renderContent(article.description)}
        </div>
      </div>

      {/* YOU MIGHT ALSO LIKE */}
      <div className="px-6 sm:px-10 xl:px-64 w-full">
        <div className="flex justify-between w-full sm:mt-12 lg:mt-20 mb-10">
          <p className="text-xl font-bold">You might also like</p>
          <Link
            href="/news"
            className="text-sctblue text-lg underline hidden sm:flex"
          >
            More
          </Link>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-5 gap-y-12">
          {articles
            .filter((item: any) => item.id !== article.id)
            .reverse()
            .slice(0, 3)
            .map((item: any) => (
              <NewsCard key={item.id} {...item} />
            ))}
        </section>

        <Link href="/news" className="mt-10 flex justify-center sm:hidden">
          <Button extrStyles="px-4 text-sm text-white" color="bg-sctblue">
            More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SingleNewsPage;
