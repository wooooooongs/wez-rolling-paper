import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import {
  RiMenuLine,
  RiArrowLeftSFill,
  RiArrowRightSFill,
} from 'react-icons/ri';

const Header = () => {
  return (
    <header className='mt-3 mb-6 flex justify-between'>
      <MemberListButton>
        <Link to='member-list'>
          <span className='inline-block h-12 w-12'>
            <RiMenuLine size='28' className='ml-4 mt-[0.45rem]' />
          </span>
        </Link>
      </MemberListButton>
      <div id='date-selector'>
        <span>
          <RiArrowLeftSFill size='52' className='inline-block pb-1' />
        </span>
        <span className='mx-3 inline-block h-full align-sub text-3xl'>
          2023.02
        </span>
        <span>
          <RiArrowRightSFill size='52' className='inline-block pb-1' />
        </span>
      </div>
      <div className='h-12 w-12'></div>
    </header>
  );
};
export { Header };

const MemberListButton = tw.div``;
