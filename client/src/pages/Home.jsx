import React from 'react';
import tw from 'tailwind-styled-components';

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
    <div className='mx-auto flex h-[100vh] w-[100vw] max-w-[800px] flex-col justify-between'>
      <div id='nav' className='flex h-12 justify-between'>
        <div className=''>
          <span className='inline-block h-12 w-12 '>
            <RiMenuLine size='24' className='ml-4 mt-3' />
          </span>
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
      </div>
      <div className='mx-4'>
        <div
          id='profile-img'
          className='mx-auto mt-8 mb-3 sm:max-w-[540px] se:max-w-[250px]'>
          <img
            src={coding}
            alt='Profile Image'
            className='w-full rounded-2xl'
          />
        </div>
        <div id='dots' className='mb-8 flex justify-center gap-0.5'>
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
        <div id='wez-logo' className=''>
          <img src={wez_logo} className='mx-auto w-[20vh]' />
        </div>
      </div>
      <div id='enter' className='mx-4 mb-6 flex justify-center'>
        <button className='h-[60px] w-full max-w-[540px] rounded-md bg-blue-600 text-3xl font-semibold text-white'>
          ENTER
        </button>
      </div>
    </div>
  );
};

export default Home;
