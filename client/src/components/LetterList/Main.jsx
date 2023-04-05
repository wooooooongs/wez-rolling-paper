import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { HiOutlinePencilSquare } from 'react-icons/hi2';
import {
  lettersAtom,
  selectedLetterAtom,
  showLetterModalAtom,
} from '../../recoil/';
import { get } from '../../utils/api';
import { ApiUrl } from '../../constants/ApiUrl';

const Main = ({ memberData }) => {
  const navigate = useNavigate();
  const [lettersData, setLettersData] = useRecoilState(lettersAtom);
  const [showLetterModal, setShowLetterModal] =
    useRecoilState(showLetterModalAtom);
  const setSelectedLetter = useSetRecoilState(selectedLetterAtom);

  const memberOid = memberData['_id'];

  const getLetters = async () => {
    const data = await get(ApiUrl.MEMBER, memberOid);
    setLettersData(data['papers']);
  };

  useEffect(() => {
    getLetters();
  }, []);

  const moveToEditPage = () => {
    navigate('edit', {
      state: {
        memberOid: memberOid,
      },
    });
  };

  return (
    <>
      <div className={showLetterModal ? 'blur-[1.875px]' : ''}>
        <List>
          <div className='mx-5 grid max-h-[85vh] grid-cols-2 place-items-center gap-x-2 gap-y-5 overflow-scroll scrollbar-hide'>
            {lettersData &&
              lettersData.length > 0 &&
              lettersData.map((data, index) => {
                return (
                  <div
                    onClick={() => {
                      setShowLetterModal(true);
                      setSelectedLetter(data);
                    }}
                    key={index}
                    className='aspect-square w-[152px] rounded-2xl bg-gray-300 px-3 pt-3 pb-2 mobileMd:w-[180px]'>
                    <span>현재 색상 혹은 이미지 {data['color']}</span>
                  </div>
                );
              })}
          </div>
        </List>
        <WriteNewButton onClick={moveToEditPage}>
          {showLetterModal || (
            <HiOutlinePencilSquare
              size='48'
              className='absolute right-9 bottom-10'
            />
          )}
        </WriteNewButton>
      </div>
    </>
  );
};

export { Main };

const List = tw.div`mx-auto h-screenmobileMd:max-w-[545px]`;
const WriteNewButton = tw.span``;
