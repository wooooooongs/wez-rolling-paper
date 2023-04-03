const UserInfoInput = () => {
  return (
    <div className='flex flex-col justify-end gap-4 pl-2 pb-3'>
      <div>
        <p>비밀번호</p>
        <input
          maxLength='4'
          type='password'
          className='max-w-[7rem] bg-transparent text-2xl outline-none'
        />
      </div>
      <div>
        <p>이름/닉네임</p>
        <input
          maxLength='10'
          type='text'
          className='max-w-[7rem] bg-transparent text-2xl outline-none'
        />
      </div>
    </div>
  );
};

export { UserInfoInput };
