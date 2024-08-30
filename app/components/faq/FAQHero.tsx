import YellowLine from '../common/YellowLine';

const FaqHero = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <p className='font-bold text-4xl leading-loose text-sctblue '>
        Frequently Asked Questions{' '}
      </p>

      <YellowLine />
      <p className='font-medium text-start text-base md:text-md mb-16  leading-loose text-black'>
        Your Questions, Answered: Everything You Need to Know About She Codes
        Too
      </p>
    </div>
  );
};

export default FaqHero;
