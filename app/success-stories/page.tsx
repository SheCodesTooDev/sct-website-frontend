import React from 'react';
import { getSCTStories } from '../services/api';
import { truncateText } from '../utils/truncateText';
import YellowLine from '../components/common/YellowLine';
import '../globals.css';

const Stories = async () => {
  const stories = await getSCTStories();
  if (!Array.isArray(stories)) {
    console.error('Expected an array of stories, but received:', stories);
    return <div>Error loading stories.</div>;
  }

  return (
    <div className='flex flex-col items-center pt-20 px-5 text-center bg-gray-100  '>
      <p className='font-bold text-sctblue text-5xl leading-tight mb-4'>Our Success Story</p>
      <YellowLine />
      <p className='font-medium text-2xl md:text-lg leading-loose mb-8'>
        Transforming Ambition into Expertise: Success Stories from
        <span className='font-bold block mt-2'>She Codes Too Front-End Developers.</span>
      </p>

      <div className='grid grid-cols-1 p-4 justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-y-4  '>
        {stories.map((story) => (
          <div key={story.id} className='bg-white p-6 border border-gray-200 rounded-3xl shadow-lg w-full md:w-3/4 '>
            <svg
              viewBox="0 0 346 306"
              xmlns="http://www.w3.org/2000/svg"
              width="346"
              height="306"
              className="w-full h-auto"
            >
              <defs>
                <clipPath id="clipPathShape">
                  <path d="M180.211 0.083388C204.478 1.05628 218.717 28.5011 241.362 37.255C269.675 48.2002 307.425 35.7334 328.591 57.4438C349.177 78.5601 344.94 113.415 344.312 142.856C343.693 171.855 337.85 200.176 324.988 226.194C311.555 253.368 295.725 281.811 268.74 295.735C242.032 309.516 209.571 307.381 180.211 300.896C153.97 295.101 136.481 271.577 111.758 261.065C82.5734 248.657 43.4408 257.34 22.2963 233.756C1.35633 210.399 -6.37526 171.745 5.77734 142.856C18.352 112.963 60.935 110.376 83.8646 87.396C99.185 72.0417 100.078 46.8029 116.153 32.2353C128.901 6.48119 155.91 -0.890817 180.211 0.083388Z"/>
                </clipPath>
              </defs>

              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M180.211 0.083388C204.478 1.05628 218.717 28.5011 241.362 37.255C269.675 48.2002 307.425 35.7334 328.591 57.4438C349.177 78.5601 344.94 113.415 344.312 142.856C343.693 171.855 337.85 200.176 324.988 226.194C311.555 253.368 295.725 281.811 268.74 295.735C242.032 309.516 209.571 307.381 180.211 300.896C153.97 295.101 136.481 271.577 111.758 261.065C82.5734 248.657 43.4408 257.34 22.2963 233.756C1.35633 210.399 -6.37526 171.745 5.77734 142.856C18.352 112.963 60.935 110.376 83.8646 87.396C99.185 72.0417 100.078 46.8029 116.153 32.2353C128.901 6.48119 155.91 -0.890817 180.211 0.083388Z"
                stroke="#03979C"
                strokeWidth="4"
                fill="none"
              />

              {story.photo && (
                <image
                  href={story.photo}
                  x="0"
                  y="0"
                  width="346"
                  height="306"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#clipPathShape)"
                />
              )}
            </svg>

            <h2 className='text-xl font-semibold text-center mt-4'>{story.title}</h2>
            {story.content.map((block: any, index: number) => (
              <div key={index} className='mt-2'>
                {block.type === 'heading' &&
                  block.level === 1 &&
                  block.children.map((child: any, idx: number) => (
                    <h1 key={idx} className='text-lg font-medium text-center'>
                      {truncateText(child.text, 100)}
                    </h1>
                  ))}
              </div>
            ))}
            <a href={`/success-stories/${story.slug}`} className='flex items-center justify-center mt-4 text-blue-600 hover:underline'>
              <span className='font-bold'>Read more</span>
              <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2'>
                <path d="M0.0625 7C0.0625 7.26572 0.167857 7.52056 0.355393 7.70845C0.54293 7.89635 0.797284 8.0019 1.0625 8.0019H20.6485L16.3565 12.3021C16.1743 12.491 16.0735 12.7441 16.0758 13.0068C16.0781 13.2695 16.1833 13.5208 16.3687 13.7066C16.5541 13.8923 16.8049 13.9977 17.0671 14C17.3293 14.0022 17.5819 13.9013 17.7705 13.7188L23.7705 7.70734C23.863 7.61517 23.9365 7.50558 23.9866 7.38488C24.0367 7.26418 24.0625 7.13474 24.0625 7.00401V7C24.0625 6.86975 24.0365 6.73951 23.9845 6.61727C23.9347 6.49581 23.8612 6.38547 23.7685 6.29266L17.7685 0.281246C17.5799 0.0987412 17.3273 -0.00224488 17.0651 3.78745e-05C16.8029 0.00232063 16.5521 0.107689 16.3667 0.29345C16.1813 0.479211 16.0761 0.730501 16.0738 0.993196C16.0715 1.25589 16.1723 1.50897 16.3545 1.69794L20.6485 5.9981H1.0625C0.797284 5.9981 0.54293 6.10366 0.355393 6.29155C0.167857 6.47944 0.0625 6.73428 0.0625 7Z" fill="black"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
