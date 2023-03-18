import { Link } from 'react-router-dom';

const EnterButton = () => {
  return (
    <div>
      <Link to='cover'>
        <button className='h-[65px] w-full rounded-xl border-b-[1px] border-[#9a9a9a] bg-white text-3xl font-semibold drop-shadow-md'>
          ENTER
        </button>
      </Link>
    </div>
  );
};

export { EnterButton };
