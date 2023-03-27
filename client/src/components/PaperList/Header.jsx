import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';

import { RiHome5Line } from 'react-icons/ri';

const Header = () => {
  return (
    <>
      <BackButton>
        <Link to='/'>
          <span className='inline-block h-12 w-12'>
            <RiHome5Line size='24' className='ml-4 mt-3' />
          </span>
        </Link>
      </BackButton>
      <Receiver>To. 미니미니</Receiver>
    </>
  );
};

export { Header };

const BackButton = tw.div`fixed`;
const Receiver = tw.div`mt-7 text-center text-4xl font-semibold`;
