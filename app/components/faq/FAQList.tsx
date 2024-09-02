import { getSCTQuestions } from '@/app/services/api';

const FaqList = async () => {
  const questions = await getSCTQuestions();
  if (!Array.isArray(questions)) {
    console.error('Expected an array of questions, but received:', questions);
    return <div>Error loading questions.</div>;
  }
  return (
    <div className='container mx-auto'>
      {questions.map((question, index) => (
        <details
          key={question.id}
          className='[&_svg]:open:-rotate-180 border-b-1 my-4 border-b-2 pb-5'
        >
          <summary
            className={`bg-opacity-25	${
              index % 2 === 0 ? 'bg-sctyellow' : 'bg-sctblue'
            } p-5 rounded-xl cursor-pointer list-none items-center gap-4`}
          >
            <div className='w-full flex justify-between items-center'>
              <p className='font-semibold'>{question.question}</p>

              <svg
                className='rotate-0 transform text-blue-700 transition-all duration-300'
                fill='none'
                height='20'
                width='20'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                viewBox='0 0 24 24'
              >
                <polyline points='6 9 12 15 18 9'></polyline>
              </svg>
            </div>
          </summary>
          {question.answer.map((block: any, index: any) => (
            <p key={index} className='pt-5 px-1 md:px-3'>
              {block.type === 'paragraph' &&
                block.children.map((child: any, idx: any) => {
                  return child.text;
                })}
            </p>
          ))}
        </details>
      ))}
    </div>
  );
};

export default FaqList;
