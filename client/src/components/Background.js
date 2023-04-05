import tw from 'tailwind-styled-components';

const Background = tw.div`relative mx-auto flex h-screen w-screen max-w-[480px] flex-col overflow-hidden bg-letter bg-cover bg-no-repeat`;
const ModalBackground = tw.div`absolute right-0 h-screen w-full bg-[#00000070]`;

export { Background, ModalBackground };
