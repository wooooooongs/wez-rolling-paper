import tw from 'tailwind-styled-components';

import { useSetRecoilState } from 'recoil';
import { showLetterModalAtom } from '../../recoil/paper-list';

import coding from '../../assets/profile-img/coding.png';
import { ModalBackground } from '../Background';

const LetterModal = () => {
  const setShowLetterModal = useSetRecoilState(showLetterModalAtom);

  const TEMP_PAPER_LETTER =
    '오랜만에 편지를 써봅니다. 잘 지내시나요? 최근에 저는 새로운 취미를 찾아서 책을 많이 읽고 있어요. 하루가 더욱 여유롭고 행복해지는 기분이 들어서 좋아요. 어떤 것을 좋아하시나요? 함께 취미 생활을 하면 더욱 신나고 즐거울 것 같아요. 늘 건강하고 행복하시길 바랄게요.';

  return (
    <>
      <ModalBackground onClick={() => setShowLetterModal(false)} />
      <Letter>
        <ProfileImg className='pt-6 pb-6'>
          <img src={coding} className='h-full w-full rounded-lg' />
        </ProfileImg>
        <Content className=''>
          <p className='mb-2 overflow-scroll scrollbar-hide se:max-h-[8rem] mobileSm:max-h-[17rem] mobileMd:max-h-[14.3rem]'>
            {TEMP_PAPER_LETTER}
          </p>
          <p className='pr-1 text-right font-semibold'>멋쟁이가</p>
        </Content>
      </Letter>
    </>
  );
};

export { LetterModal };

const ProfileImg = tw.div`pt-6 pb-6`;
const Content = tw.div``;
const Letter = tw.div`absolute top-[15vh] right-[50%] w-[21rem] translate-x-1/2 rounded-lg bg-yellow-100 px-6 shadow-2xl se:h-[30rem] mobileSm:h-[40rem] mobileMd:h-[45rem] mobileMd:w-[30rem]`;
