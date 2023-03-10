import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';

import {
  RiMenuLine,
  RiArrowLeftSFill,
  RiArrowRightSFill,
} from 'react-icons/ri';
import coding from '../assets/profile-img/coding.png';
import wez_logo from '../assets/profile-img/wez-logo.png';

const Home = () => {
  const dotArr = [1, 2, 3, 4, 5];

  const Dot = (props) => {
    const { dotNum } = props;
    return (
      <span className={`${dotNum !== 0 ? 'opacity-30' : ''}`}>
        <svg
          width='10'
          height='10'
          viewBox='0 0 10 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <circle cx='5' cy='5' r='5' fill='black' />
        </svg>
      </span>
    );
  };

  return (
    <div className='mx-auto flex h-screen w-screen max-w-[480px] flex-col overflow-hidden bg-paper bg-cover bg-no-repeat'>
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
      <main className='relative mx-4 mb-6 flex h-screen flex-col justify-between'>
        <div>
          <div
            id='profile-img'
            className='mx-auto mt-8 mb-3 aspect-9/10 w-full se:aspect-square se:max-w-[250px]'>
            <img
              src={coding}
              alt='Profile Image'
              className='h-full w-full rounded-2xl object-cover'
            />
          </div>
          <div id='dots' className='mb-12 flex justify-center gap-0.5 se:mb-6'>
            {dotArr.map((num, index) => (
              <Dot key={num} dotNum={index} />
            ))}
          </div>
          <div className='flex flex-col items-center'>
            <p id='data' className='text-3xl'>
              06 / 06
            </p>
            <p id='name' className='text-[2.5rem]'>
              Lee Jae Woong
            </p>
          </div>
          <div id='wez-logo' className='relative h-[100px]'>
            <img
              src={wez_logo}
              className='absolute left-[50%] top-[50%] mx-auto w-[20vh] translate-y-[-50%] translate-x-[-50%]'
            />
          </div>
        </div>
        <div>
          <Link to='cover'>
            <button className='h-[65px] w-full rounded-xl border-b-[1px] border-[#9a9a9a] bg-white text-3xl font-semibold drop-shadow-md'>
              ENTER
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
