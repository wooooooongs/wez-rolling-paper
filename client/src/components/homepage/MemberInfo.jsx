import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { dateConverter } from '../../utils/dateConverter';
import { currentMemberNumAtom } from '../../recoil';

const MemberInfo = ({ membersData }) => {
  const currentMemberNum = useRecoilValue(currentMemberNumAtom);
  const [currentBirthDay, setCurrentBirthDay] = useState('');
  const currentName = membersData[currentMemberNum]['name'];

  useEffect(() => {
    setCurrentBirthDay(
      dateConverter(membersData[currentMemberNum]['birthDay']),
    );
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <p id='data' className='text-3xl'>
        {currentBirthDay}
      </p>
      <p id='name' className='text-[2.5rem]'>
        {currentName}
      </p>
    </div>
  );
};

export { MemberInfo };
