import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import { RiHome5Line } from 'react-icons/ri';

const Header = () => {
  return (
    <header className='fixed mt-3 mb-6'>
      <HomeButton>
        <Link to='/'>
          <span className='inline-block h-12 w-12'>
            <RiHome5Line size='28' className='ml-4 mt-[0.45rem]' />
          </span>
        </Link>
      </HomeButton>
    </header>
  );
};

export { Header };

const HomeButton = tw.div``;
