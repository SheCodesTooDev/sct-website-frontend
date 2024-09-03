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
    <div  className=" w-full" >

      <h1 className=" text-sctblue text-3xl text-center ">{story.title}</h1>
      <div className=" flex  justify-between items-start  p-8 ">  
        
           <div className="relative top-0 ">
      <svg
        className="absolute inset-0 -right-16 -top-8 -p-6 -z-20"
        width="346"
        height="306"
        viewBox="0 0 346 306"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M180.211 0.083388C204.478 1.05628 218.717 28.5011 241.362 37.255C269.675 48.2002 307.425 35.7334 328.591 57.4438C349.177 78.5601 344.94 113.415 344.312 142.856C343.693 171.855 337.85 200.176 324.988 226.194C311.555 253.368 295.725 281.811 268.74 295.735C242.032 309.516 209.571 307.381 180.211 300.896C153.97 295.101 136.481 271.577 111.758 261.065C82.5734 248.657 43.4408 257.34 22.2963 233.756C1.35633 210.399 -6.37526 171.745 5.77734 142.856C18.352 112.963 60.935 110.376 83.8646 87.396C99.185 72.0417 100.078 46.8029 116.153 32.2353C128.901 6.48119 155.91 -0.890817 180.211 0.083388Z"
          fill="#03979C"
        />
      </svg>

{story.photo && (
  <svg
    className="relative z-30"
    width="346"
    height="306"
    viewBox="0 0 346 306"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id={`clip-path-${story.id}`}>
        <path d="M180.211 0.083388C204.478 1.05628 218.717 28.5011 241.362 37.255C269.675 48.2002 307.425 35.7334 328.591 57.4438C349.177 78.5601 344.94 113.415 344.312 142.856C343.693 171.855 337.85 200.176 324.988 226.194C311.555 253.368 295.725 281.811 268.74 295.735C242.032 309.516 209.571 307.381 180.211 300.896C153.97 295.101 136.481 271.577 111.758 261.065C82.5734 248.657 43.4408 257.34 22.2963 233.756C1.35633 210.399 -6.37526 171.745 5.77734 142.856C18.352 112.963 60.935 110.376 83.8646 87.396C99.185 72.0417 100.078 46.8029 116.153 32.2353C128.901 6.48119 155.91 -0.890817 180.211 0.083388Z" />
      </clipPath>
    </defs>
    <image
      href={story.photo}
      x="0"
      y="0"
      width="346"
      height="306"
      clipPath={`url(#clip-path-${story.id})`}
      preserveAspectRatio="xMidYMid slice" 
    />
    <path
      d="M180.211 0.083388C204.478 1.05628 218.717 28.5011 241.362 37.255C269.675 48.2002 307.425 35.7334 328.591 57.4438C349.177 78.5601 344.94 113.415 344.312 142.856C343.693 171.855 337.85 200.176 324.988 226.194C311.555 253.368 295.725 281.811 268.74 295.735C242.032 309.516 209.571 307.381 180.211 300.896C153.97 295.101 136.481 271.577 111.758 261.065C82.5734 248.657 43.4408 257.34 22.2963 233.756C1.35633 210.399 -6.37526 171.745 5.77734 142.856C18.352 112.963 60.935 110.376 83.8646 87.396C99.185 72.0417 100.078 46.8029 116.153 32.2353C128.901 6.48119 155.91 -0.890817 180.211 0.083388Z"
      fill="none"
      stroke="#03979C"
      strokeWidth="5"
    />
  </svg>
)}

    </div>
    <div>
   <svg width="500" height="565"  className="-z-50" viewBox="0 0 432 565" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12C0 5.37257 5.37258 0 12 0H432V565H12C5.37259 565 0 559.627 0 553V12Z" fill="#03979C" fill-opacity="0.17"/>
</svg>
<svg width="128" height="197"  className="-z-20 relative bottom-0" viewBox="0 0 128 197" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M101.685 1.00003C119.183 36.9276 133.462 75.9449 123.22 116.042C120.381 127.156 112.237 144.854 99.4139 147.785C88.27 150.332 73.9241 142.928 65.2876 136.722C56.8459 130.656 49.0933 121.359 47.6015 110.892C46.9246 106.143 48.2579 101.09 53.7235 102.531C68.2176 106.353 71.1307 128.671 61.9704 138.611C48.327 153.415 25.0697 159.119 14.2896 176.287C13.0541 178.255 5.02731 187.908 8.93827 190.363C12.9733 192.897 19.7149 187.968 23.8145 187.499C30.0815 186.781 11.5723 190.911 5.98305 193.836C1.57371 196.143 1.96195 197.13 3.26696 191.065C4.60555 184.843 5.26539 174.872 0.998401 169.685" stroke="#03979C" stroke-width="2" stroke-linecap="round"/>
</svg>

    </div>
     </div> 
   
     

  <div className="flex-col font-thin text-sm p-10 justify-center items-center">
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
      ))}</div>
         
      <p>Written by: {story.auther}</p>
    </div>
  );
};

export default Story;
