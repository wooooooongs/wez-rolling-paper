import { Link } from 'react-router-dom';
import { Background } from '../components/Background';

const Error = () => {
  return (
    <Background>
      <div className='mt-[25vh] text-center'>
        <h1 className='text-5xl font-extrabold'>404 ERROR</h1>
        <h2 className='text-3xl font-bold'>Page Not Found</h2>
        <p className='mt-10 text-xl'>존재하지 않는 주소를 입력하셨거나,</p>
        <p className='text-xl'>
          요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없네요!
        </p>
        <Link to='/'>
          <p className='mt-12 text-2xl'>돌아가기</p>
        </Link>
      </div>
    </Background>
  );
};

export { Error };
