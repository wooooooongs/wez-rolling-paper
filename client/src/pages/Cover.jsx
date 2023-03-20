import { useRecoilValue } from 'recoil';

import { Background } from '../components/Background';
import { Main } from '../components/cover';
import { PasswordModal } from '../components/cover';
import { showPasswordModalAtom } from '../recoil';

const Cover = () => {
  const showPasswordModal = useRecoilValue(showPasswordModalAtom);

  return (
    <Background>
      <Main />
      {showPasswordModal ? <PasswordModal /> : undefined}
    </Background>
  );
};

export default Cover;
