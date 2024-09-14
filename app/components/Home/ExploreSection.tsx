import Button from '../common/Button';
import styles from '../style/Home.module.css';
import arrow1 from '../../assets/arrows/homearrows/explorearrows/explorearrow1.svg'
import arrow2 from '../../assets/arrows/homearrows/explorearrows/explorearrow2.svg'
import arrow3 from '../../assets/arrows/homearrows/explorearrows/explorearrow3.svg'
import arrow4 from '../../assets/arrows/homearrows/explorearrows/explorearrow4.svg'
import Image from 'next/image';

const ExploreSection = () => {
  return (
    <div className='my-10'>
      <div className='hidden xl:flex justify-center items-center pt-10'>
        <Button color='bg-sctyellow text-black text-xl p-3'>
          Explore Our Courses
        </Button>
      </div>{' '}
      <div className={styles.greenBackground}>
        <div className='flex xl:hidden justify-center items-center pt-10'>
          <Button color='bg-sctyellow text-black'>Explore Our Courses</Button>
        </div>{' '}
      </div>
      <Image src={arrow2} alt='arrow' className='absolute -bottom-6' style={{right:'340px'}}/>
      <Image src={arrow3} alt='arrow' className='absolute -bottom-28' style={{left:'630px'}}/>
      <div className={styles.homeImages}>
        <div className={styles.columnOne}>
          <img src='/images/1.jpg' alt='Image 1' />
          <img src='/images/2.jpg' alt='Image 2' />
        </div>
        <div className={styles.columnTwo}>
          <img src='/images/3.jpg' alt='Image 3' />
          <img src='/images/4.jpg' alt='Image 4' />
        </div>

        <div className={styles.columnThree}>
          <img src='/images/5.jpg' alt='Image 5' />

          <img src='/images/6.jpg' alt='Image 6' />
        </div>
        <div className={styles.columnFour}>
          <img src='/images/7 .jpeg' alt='Image 7' />

          <img src='/images/8 .jpeg' alt='Image 8' />
        </div>
        <div className={styles.columnFive}>
          <img src='/images/9.jpeg' alt='Image 9' />
          <img src='/images/10 .jpeg' alt='Image 10' />
        </div>
      </div>
      <Image src={arrow1} alt='arrow' className='absolute right-36 ' style={{bottom:'-940px'}}/>
      <Image src={arrow4} alt='arrow' className='absolute left-48' style={{bottom:'-950px'}}/>
    </div>
  );
};

export default ExploreSection;
