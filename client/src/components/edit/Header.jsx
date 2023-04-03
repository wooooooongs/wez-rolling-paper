import { useNavigate } from 'react-router-dom';

import { RiArrowGoBackLine } from 'react-icons/ri';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='mt-3 mb-6'>
      <div id='back-to-home' className='fixed'>
        <span className='inline-block h-12 w-12' onClick={() => navigate(-1)}>
          <RiArrowGoBackLine size='28' className='ml-4 mt-[0.45rem]' />
        </span>
      </div>
      <span className='ml-[5rem] text-center text-4xl font-bold'>글쓰기</span>
    </header>
  );
};

export { Header };
