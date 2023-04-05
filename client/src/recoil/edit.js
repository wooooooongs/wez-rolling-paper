import { atom } from 'recoil';

export const letterContentsAtom = atom({
  key: 'letterContents',
  default: {
    memberOid: '',
    contents: '',
    nickname: '',
    password: '',
    color: 'white',
  },
});

export const userInfoTooltipAtom = atom({
  key: 'userInfoTooltip',
  default: {
    password: true,
    nickname: false,
  },
});
