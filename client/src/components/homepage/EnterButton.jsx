import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentMemberDataAtom, currentMemberNumAtom } from '../../recoil';

const EnterButton = ({ membersData }) => {
  const currentMemberNum = useRecoilValue(currentMemberNumAtom);
  const setCurrentMemberData = useSetRecoilState(currentMemberDataAtom);

  useEffect(() => {
    setCurrentMemberData(membersData[currentMemberNum]);
  }, []);

  return (
    <div>
      <Link to='cover'>
        <button className='h-[65px] w-full rounded-xl border-b-[1px] border-[#9a9a9a] bg-white text-3xl font-semibold drop-shadow-md'>
          ENTER
        </button>
      </Link>
    </div>
  );
};

export { EnterButton };
