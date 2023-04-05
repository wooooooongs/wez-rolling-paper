import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import { RiArrowGoBackLine } from 'react-icons/ri';

const Header = () => {
  const navigate = useNavigate();

  const returnToPrevPage = () => {
    navigate(-1);
  };

  return (
    <header className='mt-3 mb-6'>
      <PrevButton>
        <span className='inline-block h-12 w-12' onClick={returnToPrevPage}>
          <RiArrowGoBackLine size='28' className='ml-4 mt-[0.45rem]' />
        </span>
      </PrevButton>
      <span className='ml-[5rem] text-center text-4xl font-bold'>글쓰기</span>
    </header>
  );
};

export { Header };

const PrevButton = tw.div`fixed`;
