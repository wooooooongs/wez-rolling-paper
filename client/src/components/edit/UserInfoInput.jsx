import { useSetRecoilState } from 'recoil';

import { paperContentsAtom } from '../../recoil';

const UserInfoInput = () => {
  const setPaperContents = useSetRecoilState(paperContentsAtom);

  const handleChange = (type) => (e) => {
    const value = e.target.value.toString();

    setPaperContents((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className='flex flex-col justify-end gap-4 pl-2 pb-3'>
      <div>
        <p>비밀번호</p>
        <input
          maxLength='4'
          type='password'
          className='max-w-[7rem] bg-transparent text-2xl outline-none'
          onChange={handleChange('password')}
        />
      </div>
      <div>
        <p>이름/닉네임</p>
        <input
          maxLength='10'
          type='text'
          className='max-w-[7rem] bg-transparent text-2xl outline-none'
          onChange={handleChange('nickname')}
        />
      </div>
    </div>
  );
};

export { UserInfoInput };
