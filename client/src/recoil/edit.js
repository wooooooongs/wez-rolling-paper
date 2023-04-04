import { atom } from 'recoil';

export const paperContentsAtom = atom({
  key: 'paperContents',
  default: {
    memberOid: '',
    contents: '',
    nickname: '',
    password: '0000',
    color: 'white',
  },
});
