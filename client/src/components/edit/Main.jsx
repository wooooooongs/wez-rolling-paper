import { useEffect } from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import { BsCheckLg } from 'react-icons/bs';
import { Editor, UserInfoInput, ImageUpload } from './index';
import { paperContentsAtom, userInfoTooltipAtom } from '../../recoil';
import { post } from '../../utils/api';
import { ApiUrl } from '../../constants/ApiUrl';

const Main = ({ memberOid }) => {
  const navigate = useNavigate();
  const [paperContents, setPaperContents] = useRecoilState(paperContentsAtom);
  const setShowTooltip = useSetRecoilState(userInfoTooltipAtom);
  const resetPaperContents = useResetRecoilState(paperContentsAtom);
  const resetShowTooltip = useResetRecoilState(userInfoTooltipAtom);

  const checkContents = (type) => {
    const isEmpty = !paperContents[type] || paperContents[type].length === 0;

    setShowTooltip((prev) => ({ ...prev, [type]: isEmpty }));
    return !isEmpty;
  };

  const postPaper = async () => {
    const isConfirmed = confirm('위 내용으로 편지를 작성하시겠습니까?');
    const isValid = checkContents('password') && checkContents('nickname');

    if (isConfirmed && isValid) {
      await post(ApiUrl.PAPER, paperContents);
    } else {
      return;
    }

    navigate(-1);
  };

  useEffect(() => {
    resetPaperContents();
    resetShowTooltip();

    setPaperContents((prev) => ({ ...prev, memberOid: memberOid }));
  }, []);

  return (
    <main className='mx-8 mb-6 flex h-full flex-col justify-between'>
      <Editor />
      <div className='flex justify-between'>
        <UserInfoInput />
        <ImageUpload />
      </div>
      <ConfirmBox onClick={postPaper}>
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
