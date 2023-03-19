import { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';

import coding from '../../assets/profile-img/coding.png';
import wez_logo from '../../assets/profile-img/wez-logo.png';
import { get } from '../../utils/api';
import { Dot, EnterButton, MemberInfo } from './';
import { ApiUrl } from '../../constants/ApiUrl';

const Main = () => {
  const [membersData, setMembersData] = useState([]);

  const getMembers = async () => {
    const data = await get(ApiUrl.MEMBER, 'only-member');
    setMembersData(data);
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
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
        {membersData && membersData.length > 0 && (
          <MemberInfo membersData={membersData} />
        )}
        <div id='wez-logo' className='relative h-[100px]'>
          <img
            src={wez_logo}
            className='absolute left-[50%] top-[50%] mx-auto w-[20vh] translate-y-[-50%] translate-x-[-50%]'
          />
        </div>
      </div>
      <EnterButton />
    </main>
  );
};

export { Main };
