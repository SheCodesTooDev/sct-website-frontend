import Image from 'next/image';
import Student from '@/public/images/8 .jpeg';
import Link from 'next/link';
import Button from '@/app/components/common/Button';
import { getSCTStories, getSCTStory } from '@/app/services/api';
import { truncateText } from '@/app/utils/truncateText';

interface storyProps {
  slug: String;
}

const HomeStoryCard: React.FC<storyProps> = async ({ slug }) => {
  const story = await getSCTStory(slug);
  const stories = await getSCTStories();

  const positions = [
    {
      className:
        'absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6',
      alt: 'top-center-image',
    },
    {
      className:
        'absolute top-8 left-1/4 transform -translate-x-2/3 -translate-y-1/3',
      alt: 'top-left-image',
    },
    {
      className:
        'absolute top-8 right-1/4 transform translate-x-2/3 -translate-y-1/3',
      alt: 'top-right-image',
    },
    {
      className:
        'absolute top-1/2 left-0 transform -translate-x-6 -translate-y-2/4',
      alt: 'left-center-image',
    },
    {
      className:
        'absolute bottom-8 left-1/4 transform -translate-x-2/3 translate-y-1/3',
      alt: 'bottom-left-image',
    },
    {
      className:
        'absolute bottom-8 right-1/4 transform translate-x-2/3 translate-y-1/3',
      alt: 'bottom-right-image',
    },
    {
      className:
        'absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6',
      alt: 'bottom-center-image',
    },
    {
      className:
        'absolute top-1/2 right-0 transform translate-x-6 -translate-y-2/4',
      alt: 'right-center-image',
    },
  ];

  if (!story) {
    return <div>Story not found.</div>;
  }

  return (
    <div className='bg-gray-200 mt-10 w-full border border-t-1 rounded-lg shadow-md py-2 px-6 md:px-10 lg:px-16 xl:px-16 justify-center items-center md:grid md:grid-cols-2 xl:grid-cols-3'>
      <section className='order-1'>
        <div className='relative w-64 h-64 md:w-58 md:h-58 xl:w-80 xl:h-80 mt-10 mx-auto'>
          <Image
            className='success-img object-contain'
            src={story.photo}
            layout='fill'
            alt='illustration'
          />
        </div>
      </section>
      <section className='order-3 xl:px-5 xl:order-2 col-span-2 xl:col-span-1 px-0 md:px-16 lg:px-0 flex flex-col justify-center'>
        <p className='mt-10 font-medium text-xl sm:text-2xl leading-loose text-start'>
          {story.title}
        </p>
        <div>
          {story.content.map((block: any, index: any) => (
            <p
              key={index}
              className='mt-2 text-start font-medium text-sm sm:text-md md:text-base w-full leading-loose text-secondary'
            >
              {block.type === 'heading' &&
                block.level === 5 &&
                block.children.map((child: any, idx: any) => {
                  return truncateText(child.text, 200);
                })}
            </p>
          ))}
        </div>
        <Link
          href={`/success-stories/${story.slug}`}
          className='text-sctblue underline flex justify-end mt-4'
        >
          Read more -&gt;
        </Link>
      </section>

      <section className='order-2 flex items-center xl:order-3'>
        <div className='relative w-64 h-64 mx-auto mt-12'>
          {positions.map((position, index) => (
            <Image
              key={index}
              src={stories[index]?.photo || Student}
              className={`${position.className} w-14 h-14 xl:w-16 xl:h-16 rounded-full`}
              alt={position.alt}
              width={56}
              height={56}
            />
          ))}
        </div>
      </section>
      <section className='order-last col-span-2 xl:col-span-3'>
        <div className='flex justify-center mt-12 mb-8'>
          <Link href='success-stories'>
            <Button extrStyles='px-2 text-sm' color='bg-sctyellow'>
              More Stories
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeStoryCard;
