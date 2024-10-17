"use client";
import { delay, motion } from "framer-motion";
import Blueline from "../common/BlueLine";
const EmpoweringSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative flex flex-col items-center w-full justify-center min-h-screen p-6 sm:p-4 my-10">
      <div className="absolute bottom-[20%] right-0 w-[400px] h-[200px] bg-gradient-to-bl from-[#00FFFF] to-[#FBBF31] rounded-full opacity-30 transform translate-x-1/1 translate-y-2/4  blur-3xl"></div>

      <div className="absolute top-1/3 left-20 w-[400px] h-[200px] bg-gradient-to-br from-[#00FFFF] to-[#FBBF31] rounded-full opacity-30 transform -translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <motion.h1
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.7,
          type: "tween",
          ease: "easeOut",
        }}
        className="text-2xl sm:text-4xl leading-tight text-center mt-20"
      >
        Empowering Women,
        <br />
        Building Futures: Our Story
      </motion.h1>

      <div className="flex items-center justify-center mb-0 sm:mb-0">
        <Blueline />
      </div>

      <motion.p
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.7,
          type: "tween",
          ease: "easeOut",
        }}
        className="text-sm sm:text-lg font-thin text-center mt-0 -my-20 md:my-10"
      >
        In a world where technology is everywhere, too many women are being left
        behind. <br /> At She Codes Too, we’re here to change that. We are
        building a supportive community where women can learn to code, discover
        their potential, and grow in confidence.
        <br />
        Each woman’s journey is unique, and we’re here to help her rise,
        connect, and make a meaningful impact in her community.
      </motion.p>

      <div className="flex flex-wrap justify-center  mt-0 mb-0 sm:gap-y-12 sm:gap-x-16">
        {/* Card 1 */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="relative flex flex-col items-center justify-center min-h-[70vh] p-2 sm:p-2"
        >
          <div className="absolute transform translate-x-[-60px] translate-y-[20px] ">
            <svg
              width="250"
              height="276"
              viewBox="0 0 311 276"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M162.407 0.0752231C184.277 0.952851 197.11 25.7104 217.517 33.6071C243.033 43.4806 277.054 32.2345 296.129 51.8192C314.681 70.8679 310.863 102.309 310.297 128.868C309.739 155.028 304.473 180.576 292.882 204.046C280.776 228.559 266.51 254.217 242.19 266.778C218.121 279.209 188.867 277.283 162.407 271.434C138.759 266.206 122.998 244.985 100.717 235.503C74.4158 224.31 39.1492 232.143 20.0936 210.867C1.22234 189.798 -5.74544 154.928 5.20659 128.868C16.5389 101.902 54.9152 99.5688 75.5795 78.8386C89.3863 64.9877 90.1914 42.2202 104.678 29.079C116.167 5.84659 140.508 -0.803592 162.407 0.0752231Z"
                fill="#03979C"
              />
            </svg>
          </div>

          <div className="relative w-72 h-64 p-4 bg-white shadow-lg transform -rotate-2 rounded-3xl border-2 border-solid ">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <svg
                width="92"
                height="91"
                viewBox="0 0 92 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_87_790)">
                  <rect
                    x="5.16785"
                    y="4.125"
                    width="82"
                    height="82"
                    rx="10"
                    transform="rotate(0.306278 5.16785 4.125)"
                    fill="white"
                  />
                </g>
                <path
                  d="M50.3449 32.4893L50.0437 32.4797C48.4668 32.4713 47.0379 33.1047 46.008 34.1333C45.4839 33.5988 44.8588 33.1735 44.1692 32.8823C43.4795 32.5911 42.7389 32.4396 41.9902 32.4366L41.6906 32.4431C38.6971 32.5801 36.3384 35.106 36.3219 38.1937C36.3113 40.1781 37.1759 42.0496 38.696 43.3463L44.7684 49.6799C44.9177 49.8356 45.0968 49.9597 45.295 50.0449C45.4932 50.1301 45.7065 50.1745 45.9223 50.1757C46.138 50.1768 46.3518 50.1347 46.5509 50.0516C46.75 49.9686 46.9304 49.8464 47.0814 49.6923L53.2196 43.4239C53.9745 42.7991 54.5834 42.0164 55.0034 41.1309C55.4233 40.2454 55.6441 39.2786 55.6502 38.2986C55.6667 35.2093 53.3351 32.6584 50.3449 32.4877L50.3449 32.4893Z"
                  fill="#00979D"
                />
                <path
                  d="M46.017 32.4582C48.6857 32.4724 50.8606 30.3206 50.8749 27.6519C50.8891 24.9832 48.7373 22.8083 46.0686 22.794C43.4 22.7798 41.225 24.9316 41.2107 27.6003C41.1965 30.2689 43.3483 32.4439 46.017 32.4582Z"
                  fill="#00979D"
                />
                <path
                  d="M26.6112 46.8511L23.3898 46.8339L23.2865 66.1622L26.5079 66.1794C26.9351 66.1817 27.3456 66.0142 27.6493 65.7137C27.953 65.4133 28.1249 65.0045 28.1272 64.5773L28.2133 48.4704C28.2156 48.0432 28.048 47.6326 27.7476 47.3289C27.4472 47.0253 27.0384 46.8534 26.6112 46.8511ZM66.6318 49.2202C66.0683 48.8759 65.4244 48.6853 64.7644 48.6674C64.1043 48.6494 63.451 48.8048 62.8697 49.1179L52.2909 54.7312C52.1675 55.7031 51.6934 56.5965 50.9576 57.2433C50.2217 57.8902 49.275 58.246 48.2952 58.2438L41.8203 58.2092C41.6067 58.208 41.4023 58.1221 41.2521 57.9702C41.1018 57.8184 41.0181 57.6131 41.0192 57.3995C41.0204 57.1859 41.1063 56.9815 41.2582 56.8313C41.41 56.6811 41.6153 56.5973 41.8289 56.5985L48.3039 56.6331C49.6359 56.6402 50.7257 55.562 50.7328 54.23C50.7344 53.6032 50.4923 53.0004 50.0577 52.5487C49.6232 52.0971 49.0301 51.832 48.4037 51.8095C47.9206 51.802 40.1377 51.7572 40.1377 51.7572L37.4029 48.9947C37.1026 48.691 36.6939 48.519 36.2667 48.5167L29.8239 48.4822L29.7378 64.5891L32.5823 64.6043L37.7827 66.2396C39.9438 66.947 42.2534 67.8743 44.8193 67.888C47.1387 67.9004 49.4267 67.1443 51.4079 65.6424L66.8008 55.5722C67.3086 55.229 67.725 54.7672 68.0142 54.2268C68.3033 53.6864 68.4565 53.0836 68.4603 52.4708C68.4675 51.1291 67.7846 49.9141 66.6318 49.2202Z"
                  fill="#00979D"
                />
                <defs>
                  <filter
                    id="filter0_d_87_790"
                    x="0.782822"
                    y="0.178345"
                    width="90.3306"
                    height="90.3306"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_87_790"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_87_790"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <h1 className="text-center mt-10 font-black">
              Supportive Environment{" "}
            </h1>
            <p className="text-center mt-10 font-thin">
              where these women can feel comfortable and empowered to pursue
              careers as professional programmers.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="relative flex flex-col items-center justify-center min-h-[50vh] p-2 sm:p-2"
        >
          <div className="absolute transform translate-x-[-10px] translate-y-[-70px] ">
            <svg
              width="340"
              height="323"
              viewBox="0 0 364 323"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M190.084 0.0880328C215.682 1.11511 230.701 30.0886 254.586 39.3301C284.45 50.885 324.269 37.7238 346.594 60.6435C368.309 82.9359 363.84 119.732 363.177 150.813C362.524 181.428 356.361 211.326 342.795 238.793C328.626 267.48 311.928 297.508 283.464 312.208C255.293 326.756 221.054 324.502 190.084 317.656C162.406 311.538 143.959 286.704 117.881 275.607C87.0976 262.507 45.8209 271.674 23.5179 246.776C1.43064 222.119 -6.72457 181.311 6.09388 150.813C19.3575 119.255 64.2737 116.524 88.4596 92.264C104.619 76.0544 105.562 49.4099 122.517 34.0308C135.963 6.8422 164.453 -0.940436 190.084 0.0880328Z"
                fill="#FBBF31"
              />
            </svg>
          </div>

          <div className="relative w-72 p-4 bg-white shadow-lg transform rotate-2 rounded-3xl border-2 border-solid">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <svg
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_87_807)">
                  <rect
                    x="6.67853"
                    y="4"
                    width="82"
                    height="82"
                    rx="10"
                    transform="rotate(1.8719 6.67853 4)"
                    fill="white"
                  />
                </g>
                <g clip-path="url(#clip0_87_807)">
                  <path
                    d="M59.4024 49.6687L59.1937 56.0544C59.1179 58.3738 57.6851 60.399 55.5395 61.2988C52.9322 62.3892 49.0004 63.5392 44.2588 63.3842C39.5173 63.2292 35.6689 61.825 33.1237 60.5662C31.0562 59.5287 29.7586 57.4142 29.8344 55.0949L30.0431 48.7092L40.3244 53.8212C41.6401 54.4814 43.0686 54.8367 44.5366 54.8847C46.0046 54.9327 47.4533 54.6714 48.8093 54.0985L59.4024 49.6687ZM65.3621 47.1743L65.0502 56.716C65.0238 57.5234 64.3417 58.1624 63.5343 58.136C62.7269 58.1096 62.0879 57.4275 62.1143 56.6201L62.382 48.4288L65.3621 47.1743Z"
                    fill="#FBBF31"
                  />
                  <path
                    d="M41.627 51.1952C42.5629 51.6602 43.5879 51.9185 44.6324 51.9527C45.677 51.9868 46.7166 51.7959 47.6809 51.393L66.7084 43.4357C67.7811 42.9873 68.4707 41.9856 68.5088 40.8215C68.5468 39.6574 67.9241 38.6113 66.883 38.0938L48.4156 28.9126C47.4801 28.4469 46.4553 28.1883 45.411 28.1541C44.3666 28.12 43.3271 28.3112 42.3632 28.7148L23.3343 36.6691C22.2616 37.119 21.5719 38.1207 21.5339 39.2848C21.4958 40.4489 22.1186 41.4935 23.1597 42.0125L41.627 51.1952Z"
                    fill="#FBBF31"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_87_807"
                    x="0.321228"
                    y="0.321167"
                    width="91.9923"
                    height="91.9924"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_87_807"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_87_807"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_87_807">
                    <rect
                      width="47"
                      height="47"
                      fill="white"
                      transform="translate(22.1147 21.5135) rotate(1.8719)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1 className="text-center mt-10 font-black">
              Educational Approach
            </h1>
            <p className="text-center mt-10 font-thin">
              with a diverse range of courses covering various programming
              topics, women are empowered to explore their areas of interest and
              passion.
            </p>
          </div>
        </motion.div>

        {/* card3 */}
        {/* <div className="absolute transform translate-x-[-10px] translate-y-[-90px] "> */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="relative flex flex-col items-center justify-center min-h-[30vh] mt-10 sm:mt-0"
        >
          <div className="absolute transform translate-x-[60px] translate-y-[50px] ">
            <svg
              width="224"
              height="210"
              viewBox="0 0 224 199"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M116.805 0.361945C132.528 0.99293 141.754 18.7928 156.427 24.4703C174.772 31.569 199.232 23.4834 212.946 37.5641C226.284 51.2595 223.539 73.865 223.132 92.9596C222.731 111.768 218.945 130.136 210.612 147.01C201.908 164.634 191.651 183.082 174.166 192.112C156.861 201.05 135.828 199.665 116.805 195.46C99.802 191.701 88.4704 176.444 72.4515 169.627C53.5415 161.579 28.186 167.211 14.4857 151.915C0.917881 136.766 -4.09172 111.696 3.78242 92.9596C11.93 73.5724 39.5212 71.8945 54.3782 56.9902C64.3049 47.0318 64.8837 30.6628 75.2991 21.2147C83.5589 4.51136 101.059 -0.269894 116.805 0.361945Z"
                fill="#D4D5D5"
              />
            </svg>
          </div>

          <div className="relative w-72 h-64 p-4 bg-white shadow-lg transform rounded-3xl -rotate-6 border-2 border-solid">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <svg
                width="96"
                height="96"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_87_797)">
                  <rect
                    x="4"
                    y="10.9329"
                    width="82"
                    height="82"
                    rx="10"
                    transform="rotate(-4.84993 4 10.9329)"
                    fill="white"
                  />
                </g>
                <path
                  d="M40.8669 43.2159C41.1185 43.3433 41.3985 43.4043 41.6803 43.3932C41.9621 43.3821 42.2363 43.2992 42.4771 43.1524L45.3042 41.4248L53.1664 40.7577C54.0417 40.6835 54.8518 40.2645 55.4182 39.593C55.9847 38.9215 56.2612 38.0524 56.1869 37.177L55.6268 30.5758C55.5525 29.7004 55.1336 28.8903 54.4621 28.3239C53.7905 27.7574 52.9215 27.4809 52.0461 27.5552L42.1442 28.3954C41.2688 28.4696 40.4588 28.8886 39.8923 29.5601C39.3259 30.2316 39.0493 31.1007 39.1236 31.9761L39.9638 41.878C39.9877 42.1595 40.0833 42.4302 40.2413 42.6644C40.3994 42.8986 40.6147 43.0884 40.8669 43.2159Z"
                  fill="#B3B0B0"
                />
                <path
                  d="M38.0635 58.6612C41.7093 58.3519 44.414 55.1456 44.1047 51.4998C43.7953 47.8541 40.589 45.1493 36.9433 45.4587C33.2975 45.768 30.5928 48.9743 30.9021 52.6201C31.2114 56.2659 34.4177 58.9706 38.0635 58.6612Z"
                  fill="#B3B0B0"
                />
                <path
                  d="M45.7232 57.6456C44.8919 58.8691 43.7981 59.8915 42.5214 60.6384C41.2447 61.3852 39.8174 61.8377 38.3436 61.9628C36.8698 62.0878 35.3867 61.8823 34.0024 61.3612C32.6182 60.8401 31.3677 60.0166 30.3422 58.9507C28.6016 60.7888 27.5113 63.1467 27.2383 65.6634C27.189 66.1337 27.2442 66.6091 27.3999 67.0557C27.5555 67.5022 27.8079 67.9088 28.139 68.2465C28.484 68.6005 28.903 68.874 29.3659 69.0473C29.8289 69.2207 30.3244 69.2896 30.8171 69.2493L46.9902 67.877C47.4827 67.8338 47.9595 67.6823 48.3866 67.4334C48.8138 67.1845 49.1807 66.8444 49.4611 66.4373C49.7314 66.0491 49.9122 65.6057 49.9904 65.1392C50.0687 64.6727 50.0425 64.1946 49.9137 63.7394C49.2206 61.3047 47.7486 59.1642 45.7232 57.6456Z"
                  fill="#B3B0B0"
                />
                <path
                  d="M61.1679 56.7009C64.8137 56.3916 67.5184 53.1853 67.2091 49.5395C66.8997 45.8937 63.6935 43.189 60.0477 43.4984C56.4019 43.8077 53.6972 47.014 54.0065 50.6598C54.3159 54.3055 57.5221 57.0103 61.1679 56.7009Z"
                  fill="#B3B0B0"
                />
                <path
                  d="M73.0182 61.779C72.325 59.3443 70.8531 57.2038 68.8276 55.6852C67.9964 56.9086 66.9025 57.9311 65.6259 58.678C64.3492 59.4248 62.9219 59.8773 61.4481 60.0023C59.9743 60.1274 58.4912 59.9219 57.1069 59.4008C55.7226 58.8797 54.4721 58.0562 53.4467 56.9903C51.706 58.8284 50.6158 61.1863 50.3428 63.703C50.2925 64.1734 50.3472 64.649 50.503 65.0957C50.6587 65.5424 50.9116 65.949 51.2434 66.2861C51.5885 66.6401 52.0074 66.9136 52.4704 67.0869C52.9333 67.2603 53.4289 67.3292 53.9216 67.2889L70.0947 65.9166C70.5871 65.8734 71.064 65.7219 71.4911 65.473C71.9182 65.2241 72.2851 64.884 72.5656 64.4769C72.835 64.0883 73.0153 63.6449 73.0935 63.1786C73.1717 62.7122 73.146 62.2343 73.0182 61.779Z"
                  fill="#B3B0B0"
                />
                <defs>
                  <filter
                    id="filter0_d_87_797"
                    x="0.809082"
                    y="0.809204"
                    width="95.021"
                    height="95.021"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_87_797"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_87_797"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <h1 className="text-center mt-10 font-black">
              Personalised Mentoring
            </h1>
            <p className="text-center mt-10 font-thin">
              including valuable insights on career development, to ensure our
              participants maximise their learning experience.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmpoweringSection;
