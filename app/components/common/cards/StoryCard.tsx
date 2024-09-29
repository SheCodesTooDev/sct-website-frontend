import Image from 'next/image';
import Link from 'next/link';

const StoryCard = ({ title, slug, photo }: any) => {
  return (
    <div className='border bg-white border-t-2 border-r-2 border-l-2 rounded-xl shadow-xl flex py-2 px-8 justify-center'>
      <div className='my-5 flex flex-col items-center'>
        <div className='relative w-[200px] h-[200px] custom-shape '>
          <Image
            src={photo}
            alt='student'
            layout='fill'
            className='object-cover'
          />
        </div>

        <svg width='0' height='0' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <clipPath
              id='custom-shape'
              clipPathUnits='objectBoundingBox'
              transform='scale(0.0037, 0.0042)'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M107.202 235.207C89.3875 230.712 83.1182 208.159 67.7168 198.151C48.4599 185.637 18.5724 189.006 6.2826 169.626C-5.67087 150.776 2.89063 125.604 7.93853 103.883C12.9107 82.4882 21.6448 62.4087 35.216 45.1269C49.3903 27.0772 65.5366 8.45978 87.682 2.33673C109.599 -3.72319 133.298 2.90638 154.024 12.2771C172.549 20.6523 181.834 40.8049 198.501 52.4391C218.175 66.1728 248.497 65.8226 260.479 86.5885C272.346 107.154 272.053 137.002 258.56 156.522C244.598 176.72 212.67 172.016 192.118 185.481C178.386 194.478 173.797 213.043 159.629 221.339C146.183 238.443 125.04 239.707 107.202 235.207Z'
              />
            </clipPath>
          </defs>
        </svg>

        <div className='flex flex-col justify-center items-center'>
          <p className='font-bold w-52 text-lg mt-5 my-3 text-center'>
            {title}
          </p>

          <div className='flex justify-center'>
            <Link
              href={`/success-stories/${slug}`}
              className='text-sctblue flex justify-end mt-4'
            >
              Read more -&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
