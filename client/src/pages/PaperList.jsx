import { useRecoilValue } from 'recoil';

import { Background } from '../components/Background';
import { Main, LetterModal } from '../components/PaperList/';
import { showLetterModalAtom } from '../recoil/paper-list';

const PaperList = () => {
  const showLetterModal = useRecoilValue(showLetterModalAtom);

  return (
    <Background>
      <Main />
      {showLetterModal && <LetterModal />}
    </Background>
  );
};

export default PaperList;
