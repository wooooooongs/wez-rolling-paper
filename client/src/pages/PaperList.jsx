import { Background } from '../components/Background';
import { Main } from '../components/PaperList/';
import { showLetterModalAtom } from '../recoil';
import { LetterModal } from '../components/PaperList/';

const PaperList = () => {
  const showLetterModal = useRecoilValue(showLetterModalAtom);

  return (
    <Background>
      {showLetterModal && <LetterModal />}
    </Background>
  );
};

export default PaperList;
