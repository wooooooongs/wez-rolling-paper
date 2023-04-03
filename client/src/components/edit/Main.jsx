import tw from 'tailwind-styled-components';

import { BsCheckLg } from 'react-icons/bs';
import { Editor, UserInfoInput, ImageUpload } from './index';

const Main = () => {
  return (
    <main className='mx-8 mb-6 flex h-full flex-col justify-between'>
      <Editor />
      <div className='flex justify-between'>
        <UserInfoInput />
        <ImageUpload />
      </div>
      <ConfirmBox>
        <BsCheckLg
          className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
          size='2rem'
        />
      </ConfirmBox>
    </main>
  );
};

export { Main };

const ConfirmBox = tw.div`relative h-[3.375rem] w-full rounded-xl border-b-[0.75px] border-[#9a9a9a] bg-white drop-shadow-md`;
