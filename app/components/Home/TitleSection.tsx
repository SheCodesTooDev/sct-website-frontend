import YellowLine from '../common/YellowLine';
import styles from '../style/Home.module.css';
const TitleSection = () => {
  return (
    <div className=' flex flex-col w-full justify-center items-center pt-20 px-5 text-center'>
      <p className='font-bold text-sctblue text-5xl leading-loose'>
        Inspiring Women To code
      </p>
      <YellowLine />
      <p className='font-medium text-2xl md:text-sm leading-loose '>
        Explore the programming areas of interest you desire.
      </p>
    </div>
  );
};

export default TitleSection;
