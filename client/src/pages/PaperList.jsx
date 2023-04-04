import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Background } from '../components/Background';
import { Main } from '../components/PaperList/';
import { showLetterModalAtom } from '../recoil';
import { LetterModal } from '../components/PaperList/';

const PaperList = () => {
  const location = useLocation();
  const currentMemberData = location.state.memberData;
  const showLetterModal = useRecoilValue(showLetterModalAtom);

  return (
    <Background>
      <Main memberData={currentMemberData} />
      {showLetterModal && <LetterModal />}
    </Background>
  );
};

export { PaperList };
