import React from 'react';
import Image from 'next/image';
import { getArticle, getArticles } from '../../services/api';
import { news } from '@/app/data/news';
import NewsCard from '@/app/components/common/cards/NewsCard';
import Link from 'next/link';
import Button from '@/app/components/common/Button';

const SingleNewsPage = async ({ params }: any) => {
  const { slug } = params;

  const article = await getArticle(slug);
  const articles = await getArticles();

  if (!article && !articles) {
    return <div>Article not found.</div>;
  }
  return (
    <div className='flex flex-col w-full justify-center items-center py-10 md:py-20 px-6 sm:px-10 xl:px-64 '>
      <div>
        <p className='text-3xl w-full font-semibold text-gray-800 mt-5'>
          {article.title}
        </p>
        <p className='mt-8 text-lg'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
          reprehenderit provident?sit amet consectetur, adipisicing elit. Sed
          reprehenderit provident?sit amet consectetur, adipisicing elit. Sed
          reprehenderit provident?
        </p>
        <p className='mt-3 font-medium text-base  text-secondary'>
          📅 {article.date}
        </p>
      </div>
      <div className='my-10'>
        {article.photo && (
          <div className='relative w-full h-96 '>
            <Image
              className='rounded-xl w-full h-fulls object-cover'
              src={article.photo}
              layout='fill'
              alt='illustration'
            />
          </div>
        )}
        {article.description.map((block: any, index: number) => (
          <div className='text-pretty mt-10' key={index}>
            {block.type === 'paragraph' &&
              block.children.map((child: any, idx: any) =>
                child.type === 'text' ? (
                  <p className='text-lg mb-16' key={idx}>
                    {child.text}
                  </p>
                ) : child.type === 'link' ? (
                  <a key={idx} href={child.url}>
                    {child.text}
                  </a>
                ) : null
              )}
            {block.type === 'heading' &&
              block.level === 1 &&
              block.children.map((child: any, idx: any) => (
                <p className='my-4' key={idx}>
                  {child.text}
                </p>
              ))}
            {block.type === 'heading' &&
              block.level === 2 &&
              block.children.map((child: any, idx: any) => (
                <p className='text-lg font-bold my-4' key={idx}>
                  {child.text}
                </p>
              ))}
          </div>
        ))}
      </div>
      <div className='flex justify-between w-full mx-20 sm:mt-12 lg:mt-20 mb-10'>
        <p className='text-xl font-bold'> You might also Like ..</p>
        <Link
          className='text-sctblue text-lg hidden sm:flex  underline justify-end'
          href='/news'
        >
          More
        </Link>
      </div>
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-5 gap-y-12'>
        {articles.slice(0, 3).map((article: any) => (
          <NewsCard key={article.id} {...article} />
        ))}
      </section>
      <Link className='mt-10 block sm:hidden' href='/news'>
        <Button extrStyles='px-4 text-sm text-white' color='bg-sctblue'>
          More ..
        </Button>
      </Link>
    </div>
  );
};

export default SingleNewsPage;
