import { FaStop, FaPlay, FaPause } from 'react-icons/fa';

const MusicPlayer = () => {
  return (
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
  );
};

export { MusicPlayer };
