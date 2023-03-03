import { useNavigate } from 'react-router-dom';

import { RiArrowGoBackLine } from 'react-icons/ri';
import { BsFillImageFill, BsCheckLg } from 'react-icons/bs';

const Edit = () => {
  const navigate = useNavigate();

  return (
    <div className='mx-auto flex h-screen w-screen max-w-[480px] flex-col overflow-hidden bg-paper bg-cover bg-no-repeat'>
      <header className='mt-3 mb-6'>
        <div id='back-to-home' className='fixed'>
          <span className='inline-block h-12 w-12' onClick={() => navigate(-1)}>
            <RiArrowGoBackLine size='28' className='ml-4 mt-[0.45rem]' />
          </span>
        </div>
        <span className='ml-[5rem] text-center text-4xl font-bold'>글쓰기</span>
      </header>
      <main className='mx-8 mb-6 flex h-full flex-col justify-between'>
        <div className='flex h-[55vh] flex-col justify-between rounded-2xl bg-yellow-100 p-6 drop-shadow-lg'>
          <div className='h-[86%]'>
            <textarea
              className='h-full w-full bg-transparent text-3xl leading-10 tracking-wider outline-none scrollbar-hide'
              spellCheck='false'
              cols='30'
              rows='10'
              defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              provident voluptatibus commodi! Esse velit, alias iste vel
              dignissimos atque, ducimus, aspernatur natus nostrum amet
              repellendus tenetur ratione reprehenderit impedit eos!, aspernatur
              natus nostrum amet repellendus tenetur ratione reprehenderit
              impedit eos!, aspernatur natus nostrum amet repellendus tenetur
              ratione reprehenderit impedit eos!, aspernatur natus nostrum amet
              repellendus tenetur ratione reprehenderit impedit eos!
'></textarea>
          </div>
          <div className='flex justify-between'>
            <div className='flex gap-2'>
              <span className='inline-block h-8 w-8 bg-slate-600'></span>
              <span className='inline-block h-8 w-8 bg-slate-600'></span>
              <span className='inline-block h-8 w-8 bg-slate-600'></span>
              <span className='inline-block h-8 w-8 bg-slate-600'></span>
            </div>
            <div className='pt-2'>
              <span className=''>100 byte</span>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
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
          <div className='relative  h-[10rem] w-[10rem] rounded-2xl bg-white drop-shadow-md'>
            <BsFillImageFill
              className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
              size='3rem'
            />
          </div>
        </div>
        <div className='relative h-[3.375rem] w-full rounded-xl border-b-[0.75px] border-[#9a9a9a] bg-white drop-shadow-md'>
          <BsCheckLg
            className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
            size='2rem'
          />
        </div>
      </main>
    </div>
  );
};

export default Edit;
