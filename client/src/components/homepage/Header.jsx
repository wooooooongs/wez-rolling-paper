import { Link } from 'react-router-dom';

import {
  RiMenuLine,
  RiArrowLeftSFill,
  RiArrowRightSFill,
} from 'react-icons/ri';

const Header = () => {
  return (
    <header className='flex h-12 justify-between'>
      <div id='go-to-member-list'>
        <Link to='member-list'>
          <span className='inline-block h-12 w-12'>
            <RiMenuLine size='24' className='ml-4 mt-3' />
          </span>
        </Link>
      </div>
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
