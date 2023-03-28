import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { currentMemberNumAtom } from '../../recoil';

const EnterButton = ({ membersData }) => {
  const navigate = useNavigate();

  const currentMemberNum = useRecoilValue(currentMemberNumAtom);
  const currentMemberData = membersData[currentMemberNum];
  const currentMemberId = currentMemberData['memberId'];

  const selectMember = () => {
    navigate(`/${currentMemberId}`, {
      state: { currentMemberData: currentMemberData },
    });
  };

  return (
    <div>
      <button
        onClick={selectMember}
        className='h-[65px] w-full rounded-xl border-b-[1px] border-[#9a9a9a] bg-white text-3xl font-semibold drop-shadow-md'>
        ENTER
      </button>
    </div>
  );
};

export { EnterButton };
