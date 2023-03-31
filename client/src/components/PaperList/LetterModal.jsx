import tw from 'tailwind-styled-components';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  selectedLetterAtom,
  showLetterModalAtom,
} from '../../recoil/paper-list';

import coding from '../../assets/profile-img/coding.png';
import { ModalBackground } from '../Background';

const LetterModal = () => {
  const setShowLetterModal = useSetRecoilState(showLetterModalAtom);
  const selecedLetter = useRecoilValue(selectedLetterAtom);

  return (
    <>
      <ModalBackground onClick={() => setShowLetterModal(false)} />
      <Letter>
        <ProfileImg className='pt-6 pb-6'>
          <img src={coding} className='h-full w-full rounded-lg' />
        </ProfileImg>
        <Content className=''>
          <p className='mb-2 overflow-scroll scrollbar-hide se:max-h-[8rem] mobileSm:max-h-[17rem] mobileMd:max-h-[14.3rem]'>
            {selecedLetter && selecedLetter['contents']}
          </p>
          <p className='pr-1 text-right font-semibold'>
            {selecedLetter && selecedLetter['nickname']}
          </p>
        </Content>
      </Letter>
    </>
  );
};

export { LetterModal };

const ProfileImg = tw.div`pt-6 pb-6`;
const Content = tw.div``;
const Letter = tw.div`absolute top-[15vh] right-[50%] w-[21rem] translate-x-1/2 rounded-lg bg-yellow-100 px-6 shadow-2xl se:h-[30rem] mobileSm:h-[40rem] mobileMd:h-[45rem] mobileMd:w-[30rem]`;
