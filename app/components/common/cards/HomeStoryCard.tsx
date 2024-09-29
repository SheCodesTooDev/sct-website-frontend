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
    { className: 'absolute', angle: 0, alt: 'top-center-image' },
    { className: 'absolute', angle: 45, alt: 'top-right-image' },
    { className: 'absolute', angle: 90, alt: 'right-center-image' },
    { className: 'absolute', angle: 135, alt: 'bottom-right-image' },
    { className: 'absolute', angle: 180, alt: 'bottom-center-image' },
    { className: 'absolute', angle: 225, alt: 'bottom-left-image' },
    { className: 'absolute', angle: 270, alt: 'left-center-image' },
    { className: 'absolute', angle: 315, alt: 'top-left-image' },
  ];

  // Array to hold varying sizes for the surrounding images
  const sizes = [
    { width: 50, height: 50 }, // small
    { width: 60, height: 60 }, // medium
    { width: 70, height: 70 }, // large
    { width: 55, height: 55 }, // small
    { width: 75, height: 75 }, // large
    { width: 65, height: 65 }, // medium
    { width: 45, height: 45 }, // small
    { width: 80, height: 80 }, // large
  ];

  // Varying the radius to make some images appear closer or farther
  const radii = [110, 120, 130, 125, 115, 135, 105, 140];
  const centerX = 128; // Half of the container width (w-64 = 256px)
  const centerY = 128; // Half of the container height (h-64 = 256px)

  if (!story) {
    return <div>Story not found.</div>;
  }

  return (
    <div className='bg-gray-200 mt-10 w-full border border-t-1 rounded-3xl shadow-md py-2 px-6 md:px-10 lg:px-16 xl:px-16 justify-center items-center md:grid md:grid-cols-2 xl:grid-cols-3'>
      <section className='order-1'>
        <div className='relative w-64 h-64 md:w-58 md:h-58 xl:w-80 xl:h-80 mt-10 mx-auto '>
          <div className='transparent-image'></div>
          <Image
            className='success-img object-contain '
            src={story.photo}
            layout='fill'
            alt='illustration'
          />
        </div>
      </section>
      <section className='order-3 mt-10 lg:mt-0 xl:px-5 xl:order-2 col-span-2 xl:col-span-1 px-0 md:px-16 lg:px-0 flex flex-col justify-center'>
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
          <div className='stroy-yellow-shape'></div>
          {positions.map((position, index) => {
            const radius = radii[index]; // Get radius for this image
            const x =
              centerX + radius * Math.cos((position.angle * Math.PI) / 180);
            const y =
              centerY + radius * Math.sin((position.angle * Math.PI) / 180);
            const { width, height } = sizes[index]; // Get size for this image
            return (
              <Image
                key={index}
                src={stories[index]?.photo || Student}
                className={`${position.className} rounded-full`}
                alt={position.alt}
                width={width}
                height={height}
                style={{
                  top: `${y}px`,
                  left: `${x}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            );
          })}
          <Image
            src={stories[8]?.photo || Student}
            className='absolute rounded-full'
            alt='center-image'
            width={100} // Central image size
            height={100}
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </section>
      <section className='order-last col-span-2 xl:col-span-3'>
        <div className='flex justify-center mt-12 mb-8'>
          <Link href='success-stories'>
            <Button
              extrStyles='px-2 text-sm mt-10 lg:mt-0'
              color='bg-sctyellow'
            >
              More Stories
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeStoryCard;
