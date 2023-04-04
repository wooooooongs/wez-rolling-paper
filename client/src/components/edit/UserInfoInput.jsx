import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import tw from 'tailwind-styled-components';

import { paperContentsAtom, userInfoTooltipAtom } from '../../recoil';

const UserInfoInput = () => {
  const setPaperContents = useSetRecoilState(paperContentsAtom);
  const [showTooltip, setShowTooltip] = useRecoilState(userInfoTooltipAtom);

  const handleChange = (type) => (e) => {
    const value = e.target.value.toString();

    setPaperContents((prev) => ({ ...prev, [type]: value }));
  };

  const handleTooltipClick = (type) => {
    setShowTooltip((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const Tooltip = ({ type }) => {
    const MESSAGE_OBJECT = {
      password: '삭제 및 수정 시 필요합니다.',
      nickname: '이름 혹은 닉네임을 입력해주세요.',
    };

    return (
      <TooltipText onClick={() => handleTooltipClick(type)}>
        {MESSAGE_OBJECT[type]}
      </TooltipText>
    );
  };

  return (
    <div className='flex w-1/2 flex-col justify-end gap-4 pl-2 pb-3'>
      <div>
        <div className='relative'>
          {showTooltip['password'] && <Tooltip type='password' />}비밀번호
        </div>
        <input
          maxLength='4'
          type='password'
          className='max-w-[7rem] bg-transparent text-2xl outline-none'
          onChange={handleChange('password')}
        />
      </div>
      <div>
        <div className='relative'>
          {showTooltip['nickname'] && <Tooltip type='nickname' />} 이름 / 닉네임
        </div>
        <input
          maxLength='10'
          type='text'
          className='max-w-[10rem] bg-transparent text-2xl outline-none'
          onChange={handleChange('nickname')}
        />
      </div>
    </div>
  );
};

export { UserInfoInput };

const TooltipText = tw.p`tooltip absolute left-[-0.25rem] bottom-[2.25rem] max-w-[15.625rem] rounded-xl border-2 border-white bg-white p-1 px-3 text-sm drop-shadow-xl`;
