import { useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { RxCross1 } from 'react-icons/rx';
import { showPasswordModalAtom } from '../../recoil';
import { ModalBackground } from '../Background';

const PasswordModal = ({ memberData }) => {
  const [showPasswordModal, setShowPasswordModal] = useRecoilState(
    showPasswordModalAtom,
  );
  const EMPTY_PASSWORD = ['', '', '', ''];
  const [password, setPassword] = useState(EMPTY_PASSWORD);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const focusPasswordInput = () => {
    if (showPasswordModal) {
      inputRefs.current[0].focus();
    }
  };

  const moveToLetterList = () => {
    navigate(`letter-list`, {
      state: {
        memberData: memberData,
      },
    });
  };

  const handlePasswordChange = (e, index) => {
    const { value } = e.target;
    const newPassword = [...password];

    newPassword[index] = value;
    setPassword(newPassword);

    if (value !== '' && index + 1 < password.length) {
      inputRefs.current[index + 1].focus();
    }

    const isComplete = !newPassword.includes('');
    if (isComplete) {
      matchPassword(newPassword);
    }
  };

  const matchPassword = (enteredPassword) => {
    const validPassword = memberData.password;
    const isPasswordValid = enteredPassword.join('') === validPassword;

    if (isPasswordValid) {
      setShowPasswordModal(false);
      moveToLetterList();
    } else {
      console.log('비밀번호가 틀렸습니다.');
      inputRefs.current[0].focus();
      setPassword(EMPTY_PASSWORD);
    }
  };

  useEffect(() => {
    if (showPasswordModal) {
      focusPasswordInput();
    }
  }, [showPasswordModal]);

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
          <p onClick={moveToLetterList} className='mb-5 text-3xl'>
            작성자 비밀번호 입력
          </p>
          <div className='flex gap-5'>
            {password.map((value, index) => {
              return (
                <PasswordInput
                  key={index}
                  value={value}
                  type='text'
                  inputMode='numeric'
                  maxLength='1'
                  min='0'
                  max='9'
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handlePasswordChange(e, index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export { PasswordModal };

const PasswordInput = tw.input`
leading-10 text-3xl font-semibold h-12 w-12 border-b-2 focus:border-[#9a9a9a] border-[#9a9a9a50] text-center caret-transparent focus:outline-none
`;
