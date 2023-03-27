import tw from 'tailwind-styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { showLetterModalAtom } from '../../recoil/paper-list';
import { LetterModal } from './LetterModal';
import { Header } from './Header';

const Main = () => {
  const [showLetterModal, setShowLetterModal] =
    useRecoilState(showLetterModalAtom);
  const navigate = useNavigate();

  const TEMP_DATA_ARRAY = [
    {
      nickName: 'Sunshine',
      context:
        '안녕하세요, 어머님께 보내는 편지입니다. 요즘 건강하게 지내시나요? 어떤 일이 있어도 항상 건강이 제일 중요하니까요. 저는 이번에 새로운 일을 시작해서 바쁘긴 하지만, 어머님 생각을 많이하고 늘 걱정하고 있어요. 어머님께서는 언제나 저를 지켜주시고 사랑해주셔서 감사합니다. 늘 건강하시고 행복하시길 바랄게요. 사랑합니다.',
    },
    {
      nickName: 'Sweetie',
      context:
        '오랜만에 편지를 써봅니다. 잘 지내시나요? 최근에 저는 새로운 취미를 찾아서 책을 많이 읽고 있어요. 하루가 더욱 여유롭고 행복해지는 기분이 들어서 좋아요. 어떤 것을 좋아하시나요? 함께 취미 생활을 하면 더욱 신나고 즐거울 것 같아요. 늘 건강하고 행복하시길 바랄게요.',
    },
    {
      nickName: 'Cupcake',
      context:
        '맑은 하늘과 따스한 날씨가 정말 좋네요. 이런 날씨에는 나들이를 하거나 친구들과 함께 시간을 보내면 정말 좋을 것 같아요. 최근에는 새로운 친구들을 만나서 즐거운 시간을 보내고 있어요. 어떤 친구들을 좋아하시나요? 함께 좋은 추억을 만들어보아요. 늘 행복하시길 바랄게요.',
    },
    {
      nickName: 'Honey',
      context:
        '오늘은 무슨 일이 있었나요? 이야기 좀 해주세요. 저는 요즘 새로운 일을 시작해서 바쁘긴 하지만, 언제든지 제 곁에 있어주는 친구들 덕분에 힘낼 수 있어요. 어떤 친구들을 좋아하시나요? 함께 힘든 시간을 이겨내며 서로의 이야기를 들어주고 서로를 위로해주는 게 정말 소중한 것 같아요. 늘 힘내세요! 저는 항상 함께 할게요.',
    },
    {
      nickName: 'Cherry',
      context:
        '어디든 함께 가고 싶은 친구, 그대는 어떤 사람인가요? 저는 친구들과 함께 여행을 가는 것을 좋아해요. 함께 즐거운 추억을 만들며 서로에게 더 가까워질 수 있는 좋은 기회인 것 같아요. 어디를 가보고 싶으신가요? 함께 계획을 세우며 더욱 신나고 즐거운 여행을 만들어보아요. 늘 행복하시길 바랄게요.',
    },
    {
      nickName: 'Candy',
      context:
        '사랑하는 사람에게 보내는 작은 선물을 준비해보세요. 아무리 작은 것이더라도 그 사람에게는 큰 의미가 있을 거에요. 저도 최근에 친구에게 작은 선물을 준비해주었는데, 그녀의 미소를 보면서 정말 행복한 기분이 들었어요. 어떤 선물을 준비해보시겠어요? 함께 행복한 순간을 만들어보아요.',
    },
    {
      nickName: 'Butterfly',
      context:
        '위로의 말씀을 전해드리고 싶어요. 힘내세요. 어떤 일이 있어도 그것을 이겨낼 수 있는 힘을 가지고 있어요. 저도 최근에 어려운 일이 있었는데, 친구들의 도움과 위로 덕분에 힘낼 수 있었어요. 지금은 어려운 일이 있더라도 그것을 이겨낼 수 있다는 자신감을 가지고 앞으로 나아가보아요. 늘 응원할게요.',
    },
    {
      nickName: 'Cookie',
      context:
        '최근에 본 영화나 읽은 책, 추천해주실만한 작품이 있나요? 저는 최근에 읽은 책이 매우 인상 깊었어요. 그 책 덕분에 인생을 바꿀 만한 큰 용기와 희망을 얻을 수 있었죠. 어떤 작품을 좋아하시나요? 함께 좋은 책이나 영화를 찾아서 함께 공유하면 더욱 즐거울 것 같아요.',
    },
    {
      nickName: 'Angel',
      context:
        '내일도 힘차게 일해봅시다. 그대가 이길 거라 믿어요. 어떤 일이 있더라도 그것을 이겨낼 수 있는 힘과 끈기를 가지고 있으니까요. 저도 항상 내일도 더 좋은 일이 일어날 것이라고 믿으며 앞으로 나아가고 있어요. 그대도 저와 함께 앞으로 나아가보아요. 늘 응원할게요.',
    },
    {
      nickName: 'Star',
      context:
        '하루 종일 당신의 생각으로 가득 찼어요. 그대는 언제나 특별해요. 어떤 일이 있더라도 그대는 그대로 충분히 특별하며 소중한 존재인 거에요. 저는 그대가 언제나 행복하길 바랄게요. 함께 새로운 추억을 만들어보아요.',
    },
    {
      nickName: 'Rain',
      context:
        '비가 오는 날, 편지를 쓰며 푹 쉬어보세요. 어떤 일이 있더라도 가끔은 쉬어가는 것도 좋습니다. 저도 무슨 일이 있어도 가끔은 편안한 휴식을 취하면서 마음을 다스리곤 해요. 그대도 가끔은 쉬어가면서 마음을 편안하게 해보아요. 늘 건강하고 행복하길 바랄게요.',
    },
    {
      nickName: 'Moon',
      context:
        '밤하늘을 바라보며, 우리의 등불이 되어줄 수 있을까요? 저는 가끔 밤하늘을 바라보면서 인생의 방향을 생각해보곤 해요. 그동안 어떤 일이 있었는지, 어떤 일을 더 해야할지 생각해보면서 앞으로 나아가곤 해요. 그대도 가끔은 밤하늘을 바라보며 마음을 다스리며 앞으로 나아가보아요. 늘 함께 하겠습니다.',
    },
    {
      nickName: 'Snowflake',
      context:
        '겨울밤, 눈이 내리는 풍경을 상상해봅시다. 하얀 눈으로 덮인 거리를 걸으며, 따스한 차 한 잔 마시면서 마음을 다스릴 수 있으면 좋겠죠? 겨울은 추운 거에 비해 로맨틱한 분위기가 있는 것 같아요. 그대도 새로운 로맨틱한 추억을 만들어보아요.',
    },
    {
      nickName: 'Rose',
      context:
        '아름다운 꽃다발을 당신께 선물해드리고 싶어요. 꽃은 언제나 사랑스럽고 아름다운 존재인 것 같아요. 그대에게도 사랑스럽고 아름다운 존재이니까요. 그대는 언제나 특별하며 소중한 존재인 거에요. 늘 행복하시길 바랄게요.',
    },
    {
      nickName: 'Ocean',
      context:
        '깊은 바다처럼, 그대의 마음속에도 큰 푸른 바다가 펼쳐져 있길 바래요. 바다는 언제나 우리에게 큰 위안을 주는 것 같아요. 그대의 마음에도 바다처럼 큰 위안이 있기를 바랄게요. 늘 응원할게요.',
    },
  ];

  return (
    <>
      <main className={showLetterModal ? 'blur-[1.875px]' : ''}>
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
      </main>
      {showLetterModal && <LetterModal />}
    </>
  );
};

export { Main };

const BackButton = tw.div`fixed`;
const Receiver = tw.div`mt-7 text-center text-4xl font-semibold`;
const List = tw.div`mx-auto h-screen py-10 mobileMd:max-w-[545px]`;
const WriteNewButton = tw.span``;
