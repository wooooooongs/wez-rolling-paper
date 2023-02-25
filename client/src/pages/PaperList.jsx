import { useState } from 'react';
import tw from 'tailwind-styled-components';
import { useNavigate } from 'react-router-dom';

import { RiArrowGoBackLine } from 'react-icons/ri';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import coding from '../assets/profile-img/coding.png';

const PaperList = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const Modal = () => {
    return (
      <>
        <div
          id='background'
          className='absolute right-0 h-screen w-screen bg-[#00000030]'
          onClick={() => setShowModal(false)}></div>
        <div className='absolute top-[15vh] right-[50%] w-[21rem] translate-x-1/2 rounded-lg bg-yellow-100 shadow-2xl se:h-[30rem] mobileSm:h-[40rem] mobileMd:h-[45rem] mobileMd:w-[30rem]'>
          <div className='p-12'>
            <img src={coding} className='h-full w-full rounded-lg' />
          </div>
        </div>
      </>
    );
  };

  const DATA_ARRAY = [
    {
      nickName: '멋쟁이가',
      context:
        '한 해 너무나 고생 많았어, 생일 축하한다! 이것은 본문이며, mock데이터를 기반으로 작성되었습니다. 어쩌구저쩌구저쩌구저절시구얼쑤 좋구나',
    },
    {
      nickName: '멋쟁이가',
      context:
        '한 해 너무나 고생 많았어, 생일 축하한다! 이것은 본문이며, mock데이터를 기반으로 작성되었습니다. 어쩌구저쩌구저쩌구저절시구얼쑤 좋구나',
    },
    {
      nickName: '멋쟁이가',
      context:
        '한 해 너무나 고생 많았어, 생일 축하한다! 이것은 본문이며, mock데이터를 기반으로 작성되었습니다. 어쩌구저쩌구저쩌구저절시구얼쑤 좋구나',
    },
    {
      nickName: '멋쟁이가',
      context:
        '한 해 너무나 고생 많았어, 생일 축하한다! 이것은 본문이며, mock데이터를 기반으로 작성되었습니다. 어쩌구저쩌구저쩌구저절시구얼쑤 좋구나',
    },
    {
      nickName: '멋쟁이가',
      context:
        '한 해 너무나 고생 많았어, 생일 축하한다! 이것은 본문이며, mock데이터를 기반으로 작성되었습니다. 어쩌구저쩌구저쩌구저절시구얼쑤 좋구나',
    },
    {
      nickName: '멋쟁이가',
      context:
        '한 해 너무나 고생 많았어, 생일 축하한다! 이것은 본문이며, mock데이터를 기반으로 작성되었습니다. 어쩌구저쩌구저쩌구저절시구얼쑤 좋구나',
    },
    {
      nickName: '멋쟁이가',
      context:
        '한 해 너무나 고생 많았어, 생일 축하한다! 이것은 본문이며, mock데이터를 기반으로 작성되었습니다. 어쩌구저쩌구저쩌구저절시구얼쑤 좋구나',
    },
    {
      nickName: '멋쟁이가',
      context:
        '한 해 너무나 고생 많았어, 생일 축하한다! 이것은 본문이며, mock데이터를 기반으로 작성되었습니다. 어쩌구저쩌구저쩌구저절시구얼쑤 좋구나',
    },
    {
      nickName: '멋쟁이가',
      context:
        '한 해 너무나 고생 많았어, 생일 축하한다! 이것은 본문이며, mock데이터를 기반으로 작성되었습니다. 어쩌구저쩌구저쩌구저절시구얼쑤 좋구나',
    },
    {
      nickName: '멋쟁이가',
      context:
        '한 해 너무나 고생 많았어, 생일 축하한다! 이것은 본문이며, mock데이터를 기반으로 작성되었습니다. 어쩌구저쩌구저쩌구저절시구얼쑤 좋구나',
    },
    {
      nickName: '멋쟁이가',
      context:
        '한 해 너무나 고생 많았어, 생일 축하한다! 이것은 본문이며, mock데이터를 기반으로 작성되었습니다. 어쩌구저쩌구저쩌구저절시구얼쑤 좋구나',
    },
  ];

  return (
    <div className='relative mx-auto flex h-screen w-screen max-w-[820px] flex-col justify-between overflow-hidden bg-yellow-50'>
      <div className={showModal ? 'blur-[1.875px]' : ''}>
        <div id='back-to-home' className='fixed'>
          <span className='inline-block h-12 w-12' onClick={() => navigate(-1)}>
            <RiArrowGoBackLine size='28' className='ml-4 mt-3' />
          </span>
        </div>
        <div className='mt-7 text-center text-4xl font-semibold'>
          To. 미니미니
        </div>
        <div className='mx-auto h-screen py-9 mobileMd:max-w-[545px]'>
          <div className='mx-5 grid max-h-[85vh] grid-cols-2 place-items-center gap-x-2 gap-y-5 overflow-scroll scrollbar-hide'>
            {DATA_ARRAY.map((data, index) => {
              return (
                <div
                  key={index}
                  className='aspect-square max-w-[152px] rounded-2xl bg-gray-300 px-3 pt-3 pb-2 mobileMd:max-w-[225px]'>
                  <div className='h-[80%]'>
                    <span className='text-sm line-clamp-5'>{data.context}</span>
                  </div>
                  <div className='text-end'>-{data.nickName}</div>
                </div>
              );
            })}
          </div>
        </div>
        <span onClick={() => setShowModal(true)}>
          {showModal ? (
            <HiOutlinePencilSquare
              size='48'
              className='fixed right-9 bottom-10'
            />
          ) : undefined}
        </span>
      </div>
      {showModal ? <Modal /> : undefined}
    </div>
  );
};

export default PaperList;
