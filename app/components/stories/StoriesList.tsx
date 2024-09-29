import { getSCTStories } from '@/app/services/api';
import StoryCard from '../common/cards/StoryCard';

const StoriesList = async () => {
  const stories = await getSCTStories();
  if (!Array.isArray(stories)) {
    console.error('Expected an array of stories, but received:', stories);
    return <div>Error loading stories.</div>;
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-5 gap-y-12 z-10'>
      {stories.map((story) => {
        return (
          <div key={story.id}>
            <StoryCard {...story} />
          </div>
        );
      })}
    </div>
  );
};

export default StoriesList;
