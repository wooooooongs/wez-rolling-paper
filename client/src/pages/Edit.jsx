import { useLocation } from 'react-router-dom';

import { Background } from '../components/Background';
import { Header, Main } from '../components/edit';

const Edit = () => {
  const location = useLocation();
  const currentMemberOid = location.state.memberOid;

  return (
    <Background>
      <Header />
      <Main memberOid={currentMemberOid} />
    </Background>
  );
};

export { Edit };
