import { useRecoilValue } from 'recoil';

import { currentMemberNumAtom } from '../../recoil';

const MemberInfo = ({ membersData }) => {
  const currentMemberNum = useRecoilValue(currentMemberNumAtom);
  const currentMemberBirthDay = membersData[currentMemberNum]['birthDay'];
  const currentMemberName = membersData[currentMemberNum]['name'];

  return (
    <div className='flex flex-col items-center'>
      <p id='data' className='text-3xl'>
        {currentMemberBirthDay}
      </p>
      <p id='name' className='text-[2.5rem]'>
        {currentMemberName}
      </p>
    </div>
  );
};

export { MemberInfo };
