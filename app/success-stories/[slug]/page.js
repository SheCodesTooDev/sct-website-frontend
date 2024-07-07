import React from "react";
import { getSCTStory, getSCTStories } from "../../services/api";

// Component to render individual story
const Story = async ({ params }) => {
  const { slug } = params;
  const story = await getSCTStory(slug);

  if (!story) {
    return <div>Story not found.</div>;
  }

  return (
    <div>
      <h1>{story.title}</h1>
      {story.photo && <img src={story.photo} alt={story.title} />}
      {story.content.map((block, index) => (
        <div key={index}>
          {block.type === "paragraph" &&
            block.children.map((child, idx) =>
              child.type === "text" ? (
                <p key={idx}>{child.text}</p>
              ) : child.type === "link" ? (
                <a key={idx} href={child.url}>
                  {child.text}
                </a>
              ) : null
            )}
          {block.type === "heading" &&
            block.level === 1 &&
            block.children.map((child, idx) => <h1 key={idx}>{child.text}</h1>)}
          {block.type === "heading" &&
            block.level === 2 &&
            block.children.map((child, idx) => <h2 key={idx}>{child.text}</h2>)}
        </div>
      ))}
      <p>Written by: {story.auther}</p>
    </div>
  );
};

export default Story;
