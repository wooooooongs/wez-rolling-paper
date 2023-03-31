import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Background } from '../components/Background';
import { Main } from '../components/cover';
import { PasswordModal } from '../components/cover';
import { showPasswordModalAtom } from '../recoil';

const Cover = () => {
  const showPasswordModal = useRecoilValue(showPasswordModalAtom);
  const location = useLocation();
  const currentMemberData = location.state.currentMemberData;

  return (
    <Background>
      <Main memberData={currentMemberData} />
      {showPasswordModal ? (
        <PasswordModal memberData={currentMemberData} />
      ) : undefined}
    </Background>
  );
};

export default Cover;
