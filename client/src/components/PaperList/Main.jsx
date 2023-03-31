import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { HiOutlinePencilSquare } from 'react-icons/hi2';
import {
  lettersAtom,
  selectedLetterAtom,
  showLetterModalAtom,
} from '../../recoil/';
import { get } from '../../utils/api';
import { ApiUrl } from '../../constants/ApiUrl';
import { Header } from './Header';

const Main = ({ memberData }) => {
  const [lettersData, setLettersData] = useRecoilState(lettersAtom);
  const [showLetterModal, setShowLetterModal] =
    useRecoilState(showLetterModalAtom);
  const navigate = useNavigate();

  const getLetters = async () => {
    const memberOid = memberData['_id'];

    const data = await get(ApiUrl.MEMBER, memberOid);
    setLettersData(data['papers']);
  };

  useEffect(() => {
    getLetters();
  }, []);

  return (
    <>
      <div className={showLetterModal ? 'blur-[1.875px]' : ''}>
        <Header />
        <List>
          <div className='mx-5 grid max-h-[85vh] grid-cols-2 place-items-center gap-x-2 gap-y-5 overflow-scroll scrollbar-hide'>
            {TEMP_DATA_ARRAY.map((data, index) => {
              return (
                <div
                  key={index}
                  className='aspect-square max-w-[152px] rounded-2xl bg-gray-300 px-3 pt-3 pb-2 mobileMd:max-w-[180px]'>
                  <div className='h-[80%]'>
                    <span className='text-sm line-clamp-5'>{data.context}</span>
                  </div>
                  <div className='text-end'>-{data.nickName}</div>
                </div>
              );
            })}
          </div>
        </List>
        <Link to='/edit'>
          <WriteNewButton>
            {showLetterModal || (
              <HiOutlinePencilSquare
                size='48'
                className='absolute right-9 bottom-10'
              />
            )}
          </WriteNewButton>
        </Link>
      </div>
    </>
  );
};

export { Main };

const List = tw.div`mx-auto h-screen py-10 mobileMd:max-w-[545px]`;
const WriteNewButton = tw.span``;
