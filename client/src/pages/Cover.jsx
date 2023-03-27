import { useRecoilValue } from 'recoil';

import { Background } from '../components/Background';
import { Main } from '../components/cover';
import { PasswordModal } from '../components/cover';
import { currentMemberDataAtom, showPasswordModalAtom } from '../recoil';

const Cover = () => {
  const showPasswordModal = useRecoilValue(showPasswordModalAtom);
  const currentMemberData = useRecoilValue(currentMemberDataAtom);

  return (
    <Background>
      <Main />
      {showPasswordModal ? (
        <PasswordModal currentMemberData={currentMemberData} />
      ) : undefined}
    </Background>
  );
};

export default Cover;
