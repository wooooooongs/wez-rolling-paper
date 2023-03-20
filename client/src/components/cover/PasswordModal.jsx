import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { RxCross1 } from 'react-icons/rx';
import { showPasswordModalAtom } from '../../recoil';

const PasswordModal = () => {
  const setShowPasswordModal = useSetRecoilState(showPasswordModalAtom);

  return (
    <>
      <ModalBackground onClick={() => setShowPasswordModal(false)} />
      <div className='absolute right-0 bottom-0 h-[28vh] w-full bg-white pt-[5vh]'>
        <span
          className='absolute right-3 top-3'
          onClick={() => setShowPasswordModal(false)}>
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

export { PasswordModal };

const PasswordInput = tw.input`
  leading-10 text-3xl font-semibold h-12 w-12 border-b-2 border-[#9a9a9a] text-center caret-transparent focus:outline-none
`;

const ModalBackground = tw.div`absolute right-0 h-screen w-full bg-[#00000070]`;
