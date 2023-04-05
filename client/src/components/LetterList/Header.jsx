import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';

import { RiHome5Line } from 'react-icons/ri';

const Header = () => {
  return (
    <header className='mt-3 mb-6'>
      <HomeButton>
        <Link to='/'>
          <span className='inline-block h-12 w-12'>
            <RiHome5Line size='28' className='ml-4 mt-[0.45rem]' />
          </span>
        </Link>
      </HomeButton>
      <Receiver>To. 미니미니</Receiver>
    </header>
  );
};

export { Header };

const HomeButton = tw.div`fixed`;
const Receiver = tw.div`text-center text-[2.5rem] font-bold mt-3`;
