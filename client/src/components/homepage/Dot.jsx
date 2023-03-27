import { useRecoilState } from 'recoil';

import { currentMemberNumAtom } from '../../recoil';

const Dot = ({ dotNum }) => {
  const [currentMemberNum, setCurrentMemberNum] =
    useRecoilState(currentMemberNumAtom);
  return (
    <span
      onClick={() => {
        setCurrentMemberNum(dotNum);
      }}
      className={`${
        dotNum !== currentMemberNum ? 'opacity-30' : ''
      } cursor-pointer`}>
      <svg
        width='10'
        height='10'
        viewBox='0 0 10 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='5' cy='5' r='5' fill='black' />
      </svg>
    </span>
  );
};

export { Dot };
