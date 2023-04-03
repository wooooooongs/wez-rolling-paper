import { BsFillImageFill } from 'react-icons/bs';

const ImageUpload = () => {
  return (
    <div className='relative  h-[10rem] w-[10rem] rounded-2xl bg-white drop-shadow-md'>
      <BsFillImageFill
        className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
        size='3rem'
      />
    </div>
  );
};

export { ImageUpload };
