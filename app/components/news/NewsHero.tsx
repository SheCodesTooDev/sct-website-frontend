import YellowLine from '../common/YellowLine';

const NewsHero = () => {
  return (
    <>
      <p className='font-bold text-4xl leading-loose text-sctblue'>
        Latest News
      </p>

      <YellowLine />
      <p className='font-medium text-lg md:text-sm mb-16  leading-loose text-secondary w-60 sm:w-72 md:w-full'>
        Stay up-to-date with the latest developments in the world of technology
        and coding.
      </p>
    </>
  );
};

export default NewsHero;
