import React from 'react';
import { getSCTStories } from '../services/api';
import { truncateText } from '../utils/truncateText';

const Stories = async () => {
  const stories = await getSCTStories();
  if (!Array.isArray(stories)) {
    console.error('Expected an array of stories, but received:', stories);
    return <div>Error loading stories.</div>;
  }

  return (
    <div>
      <h1>SCT Stories</h1>
      {stories.map((story) => (
        <div key={story.id}>
          <h2>{story.title}</h2>
          {story.photo && <img src={story.photo} alt={story.title} />}
          {story.content.map((block: any, index: number) => (
            <div key={index}>
              {block.type === 'heading' &&
                block.level === 1 &&
                block.children.map((child: any, idx: number) => (
                  <h1 key={idx}>{truncateText(child.text, 100)}</h1>
                ))}
            </div>
          ))}
          <a href={`/success-stories/${story.slug}`}>Read more</a>
        </div>
      ))}
    </div>
  );
};

export default Stories;
