import coverExample from '../assets/cover/cover-example.png';
import coverHB from '../assets/cover/HB.png';
import coding from '../assets/profile-img/coding.png';
import { FaStop, FaPlay, FaPause } from 'react-icons/fa';

const Cover = () => {
  return (
    <div className='relative mx-auto flex h-screen w-screen max-w-[820px] flex-col justify-between overflow-hidden'>
      <div id='back-to-home' className='fixed'>
        <Link to='/'>
          <span className='inline-block h-12 w-12 '>
            <RiHome5Line size='28' className='ml-4 mt-3' />
          </span>
        </Link>
      </div>
      <div id='happyBirthday' className='max-h-[17vh] mobileMd:max-h-[23vh]'>
        <div className='mx-auto se:max-w-[300px] mobileSm:max-w-[400px] mobileMd:max-w-[500px]'>
          <img src={coverHB} className='' />
        </div>
      </div>
      <div id='profileImg' className='mb-5'>
        <div className='mx-auto se:max-w-[200px] mobileSm:max-w-[300px] mobileMd:max-w-[375px]'>
          <img src={coding} className='aspect-square w-full rounded-full' />
        </div>
      </div>
      <div id='musicPlayer' className='mb-10 flex flex-col items-center gap-3'>
        <p className='text-xl'>구혜선 - Happy Birthday To You</p>
        <div className='flex gap-7'>
          <span>
            <FaPlay size='28' />
          </span>
          <span>
            <FaPause size='28' />
          </span>
          <span>
            <FaStop size='28' />
          </span>
        </div>
      </div>
      <div id='cake'>
        <img src={coverExample} className='w-full' />
      </div>
    </div>
  );
};

export default Cover;
