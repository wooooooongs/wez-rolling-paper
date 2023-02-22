import { useState } from 'react';
import tw from 'tailwind-styled-components';
import { useNavigate } from 'react-router-dom';

import { RiArrowGoBackLine } from 'react-icons/ri';
import { HiOutlinePencilSquare } from 'react-icons/hi2';

const PaperList = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const Modal = () => {
    return (
      <>
        <div
          id='background'
          className='absolute right-0 h-screen w-screen bg-[#00000070]'
          onClick={() => setShowModal(false)}></div>
        <div className='absolute top-[15vh] right-[50%] h-[32rem] w-[21rem] translate-x-1/2 rounded-lg bg-yellow-100 shadow-2xl'>
          <div>hello</div>
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
    <div className='relative  mx-auto flex h-screen w-screen max-w-[820px] flex-col justify-between overflow-hidden bg-yellow-50'>
      <div className={showModal && 'blur-[2.5px]'}>
        <div id='back-to-home' className='fixed'>
          <span className='inline-block h-12 w-12' onClick={() => navigate(-1)}>
            <RiArrowGoBackLine size='28' className='ml-4 mt-3' />
          </span>
        </div>
        <div className='mt-7 text-center text-4xl font-semibold'>
          To. 미니미니
        </div>
        <div className='mx-auto h-screen max-w-[425px] py-9'>
          <div className='mx-5 grid max-h-[85vh] grid-cols-2 place-items-center gap-x-2 gap-y-5 overflow-scroll scrollbar-hide'>
            {DATA_ARRAY.map((data, index) => {
              return (
                <div
                  key={index}
                  className='h-[152px] w-[152px] rounded-2xl bg-gray-300 px-3 pt-3 pb-2'>
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
          {showModal || (
            <HiOutlinePencilSquare
              size='48'
              className='fixed right-9 bottom-10'
            />
          )}
        </span>
      </div>
      {showModal && <Modal />}
    </div>
  );
};

export default PaperList;
