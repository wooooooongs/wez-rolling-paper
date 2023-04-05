import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Background } from '../components/Background';
import { Main, LetterModal, Header } from '../components/PaperList/';
import { showLetterModalAtom } from '../recoil';

const PaperList = () => {
  const location = useLocation();
  const currentMemberData = location.state.memberData;
  const showLetterModal = useRecoilValue(showLetterModalAtom);

  return (
    <Background>
      <Header />
      <Main memberData={currentMemberData} />
      {showLetterModal && <LetterModal />}
    </Background>
  );
};

export { PaperList };
