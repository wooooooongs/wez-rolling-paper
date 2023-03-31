import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import coverHB from '../../assets/cover/HB.png';
import lpCover from '../../assets/cover/lp.png';
import { RiHome5Line } from 'react-icons/ri';
import { showPasswordModalAtom } from '../../recoil';
import { MusicPlayer } from './MusicPlayer';

const Main = ({ memberData }) => {
  const [showPasswordModal, setShowPasswordModal] = useRecoilState(
    showPasswordModalAtom,
  );

  return (
    <div className={showPasswordModal ? 'blur-[2.5px]' : ''}>
      <div id='back-to-home' className='fixed'>
        <Link to='/'>
          <span className='inline-block h-12 w-12'>
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
        <div
          onClick={() => setShowPasswordModal(true)}
          className='mx-auto se:max-w-[300px] mobileSm:max-w-[375px] mobileMd:max-w-[450px]'>
          <img src={lpCover} className='aspect-auto w-full drop-shadow-lg' />
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export { Main };
