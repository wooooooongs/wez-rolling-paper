import { Link } from 'react-router-dom';

import {
  RiArrowLeftSFill,
  RiArrowGoBackLine,
  RiArrowRightSFill,
} from 'react-icons/ri';

const MemberList = () => {
  const DATA_ARRAY = [
    {
      id: '0',
      name: '재웅',
      birthday: '1997-06-06',
      background: 'bg-[#BAE2AC]',
    },
    {
      id: '1',
      name: '사랑',
      birthday: '1997-06-06',
      background: 'bg-[#FFCBCB]',
    },
    {
      id: '2',
      name: '이란',
      birthday: '1997-06-06',
      background: 'bg-[#E5CAFF]',
    },
    {
      id: '3',
      name: '민희',
      birthday: '1997-06-06',
      background: 'bg-[#FF9F9F]',
    },
    {
      id: '4',
      name: '준환',
      birthday: '1997-06-06',
      background: 'bg-[#C68A8A]',
    },
    {
      id: '4',
      name: '준환',
      birthday: '1997-06-06',
      background: 'bg-[#C68A8A]',
    },
    {
      id: '4',
      name: '준환',
      birthday: '1997-06-06',
      background: 'bg-[#C68A8A]',
    },
    {
      id: '4',
      name: '준환',
      birthday: '1997-06-06',
      background: 'bg-[#C68A8A]',
    },
    {
      id: '4',
      name: '준환',
      birthday: '1997-06-06',
      background: 'bg-[#C68A8A]',
    },
  ];

  return (
    <div className='mx-auto flex h-screen w-screen max-w-[820px] flex-col justify-between overflow-hidden bg-paper bg-cover bg-no-repeat'>
      <div>
        <div id='nav' className='mb-12 flex h-12 justify-between'>
          <div id='back-to-home'>
            <Link to='/'>
              <span className='inline-block h-12 w-12 '>
                <RiArrowGoBackLine size='24' className='ml-4 mt-3' />
              </span>
            </Link>
          </div>
          <div id='date-selector'>
            <span>
              <RiArrowLeftSFill size='52' className='inline-block pb-1' />
            </span>
            <span className='mx-3 inline-block h-full align-sub text-3xl'>
              2023
            </span>
            <span>
              <RiArrowRightSFill size='52' className='inline-block pb-1' />
            </span>
          </div>
          <div className='h-12 w-12'></div>
        </div>
        <div
          id='main'
          className='flex max-h-[75vh] justify-center overflow-y-scroll scrollbar-hide sm:mx-8 se:mx-4'>
          <ul className='grid grid-cols-2 gap-4'>
            {DATA_ARRAY.map((member, index) => {
              return (
                <li
                  key={member.id + index}
                  className={`flex h-[156px] w-[156px] flex-col items-center justify-center rounded-full ${member.background}`}>
                  <p>{member.name}</p>
                  <p>{member.birthday}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div id='enter' className='mx-4 mb-6 flex justify-center'>
        <button className='h-[60px] w-full max-w-[540px] rounded-md border-2 border-blue-600 text-3xl font-semibold text-blue-600'>
          ENTER
        </button>
      </div>
    </div>
  );
};

export default MemberList;
