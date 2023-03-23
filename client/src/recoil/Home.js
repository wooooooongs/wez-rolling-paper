import { atom } from 'recoil';

export const currentMemberNumAtom = atom({
  key: 'currentMemberNum',
  default: 0,
});

export const currentMemberDataAtom = atom({
  key: 'currentMemberData',
  default: {},
});
