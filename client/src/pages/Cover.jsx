import { useState } from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import coverHB from '../assets/cover/HB.png';
import lpCover from '../assets/cover/lp.png';
import { FaStop, FaPlay, FaPause } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { RiHome5Line } from 'react-icons/ri';

const Cover = () => {
  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
    return (
      <>
        <div
          id='background'
          className='absolute right-0 h-screen w-full bg-[#00000070]'
          onClick={() => setShowModal(false)}></div>
        <div className='absolute right-0 bottom-0 h-[28vh] w-full bg-white pt-[5vh]'>
          <span
            className='absolute right-3 top-3'
            onClick={() => setShowModal(false)}>
            <RxCross1 size='26' />
          </span>
          <div className='flex flex-col items-center'>
            <Link to='/paper-list'>
              <p className='mb-5 text-3xl'>작성자 비밀번호 입력</p>
            </Link>
            <div className='flex gap-5'>
              <PasswordInput
                type='tel'
                inputMode='numeric'
                maxLength='1'
                min='0'
                max='9'
              />
              <PasswordInput
                type='tel'
                inputMode='numeric'
                maxLength='1'
                min='0'
                max='9'
              />
              <PasswordInput
                type='tel'
                inputMode='numeric'
                maxLength='1'
                min='0'
                max='9'
              />
              <PasswordInput
                type='tel'
                inputMode='numeric'
                maxLength='1'
                min='0'
                max='9'
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='relative mx-auto flex h-screen w-screen max-w-[820px] flex-col justify-between overflow-hidden bg-paper bg-cover bg-no-repeat'>
      <div className={showModal ? 'blur-[2.5px]' : ''}>
        <div id='back-to-home' className='fixed'>
          <Link to='/'>
            <span className='inline-block h-12 w-12'>
              <RiHome5Line size='28' className='ml-4 mt-3' />
            </span>
          </Link>
        </div>
        <div id='happyBirthday' className='max-h-[17vh] mobileMd:max-h-[23vh]'>
          <div className='mx-auto se:max-w-[300px] mobileSm:max-w-[400px] mobileMd:max-w-[500px]'>
            <img src={coverHB} className='' />
          </div>
        </div>
        <div id='profileImg' className='mb-5'>
          <div className='mx-auto se:max-w-[200px] mobileSm:max-w-[300px] mobileMd:max-w-[375px]'>
            <img src={coding} className='aspect-square w-full rounded-full' />
          </div>
        </div>
        <div
          id='musicPlayer'
          className='mb-10 flex flex-col items-center gap-3'>
          <p className='text-xl'>구혜선 - Happy Birthday To You</p>
          <div className='flex gap-7'>
            <span>
              <FaPlay size='28' />
            </span>
            <span>
              <FaPause size='28' />
            </span>
            <span>
              <FaStop size='28' />
            </span>
          </div>
        </div>
        <div id='cake' onClick={() => setShowModal(true)}>
          <img src={coverExample} className='w-full' />
        </div>
      </div>
      {showModal ? <Modal /> : undefined}
    </div>
  );
};

const PasswordInput = tw.input`
  leading-10 text-3xl font-semibold h-12 w-12 border-b-2 border-[#9a9a9a] text-center caret-transparent focus:outline-none
`;

export default Cover;
