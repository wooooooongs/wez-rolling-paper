import { atom } from 'recoil';

export const paperContentsAtom = atom({
  key: 'paperContents',
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
