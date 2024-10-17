import { getSCTStory } from "../../services/api";
import YellowLine from "../../components/common/YellowLine";
import Link from "next/link";
const Story = async ({ params }) => {
  const { slug } = params;
  const story = await getSCTStory(slug);

  if (!story) {
    return <div>Story not found.</div>;
  }

  return (
    <div className="sct-bg  py-20 px-8 flex flex-col items-center w-full xl:px-32 text-start">
      <div className="flex justify-center flex-col items-center">
        <div className="relative w-full right-0 top-28">
          <div className="green-square-story"></div>
        </div>
        <p className="font-bold text-center text-4xl leading-loose text-sctblue">
          {story.title}
        </p>

        <div>
          <YellowLine />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-6 lg:gap-x-16  place-items-center ">
          <div className="relative py-8 px-3 col-span-2">
            <svg
              className="absolute inset-0"
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
                  blurDataURL="data:image/jpeg..."
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
                  strokeWidth="3"
                />
              </svg>
            )}
          </div>
          <div className=" w-full leading-loose col-span-4">
            {story.content.map((block, index) => (
              <div key={index} className=" relative   ">
                {block.type === "heading" &&
                  block.level === 5 &&
                  block.children.map((child, idx) => (
                    <h1 className="font-normal " key={idx}>
                      {child.text}
                    </h1>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div>
          {story.content.map((block, index) => (
            <div key={index}>
              {block.type === "paragraph" &&
                block.children.map((child, idx) =>
                  child.type === "text" ? (
                    <p className="text-black font-normal py-2" key={idx}>
                      {child.text}
                    </p>
                  ) : child.type === "link" ? (
                    <div key={idx}>
                      <Link
                        className="text-sctblue text-center"
                        href={child.url}
                      >
                        Linkedin
                      </Link>
                    </div>
                  ) : (
                    child.type === "text" &&
                    child.text.includes("Connect with") && <div>dsfsf</div>
                  )
                )}

              {block.type === "heading" &&
                block.level === 6 &&
                block.children.map((child, idx) =>
                  child.text !== "" ? (
                    <div
                      key={idx}
                      className="bg-sctyellow bg-opacity-20 rounded-xl p-5"
                    >
                      <h2 className="text-black font-bold">{child.text} </h2>
                    </div>
                  ) : null
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
