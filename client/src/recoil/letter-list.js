import { atom } from 'recoil';

export const showLetterModalAtom = atom({
  key: 'showLetterModal',
  default: false,
});

export const lettersAtom = atom({
  key: 'letters',
  default: [],
});

export const selectedLetterAtom = atom({
  key: 'selectedLetter',
  default: {},
});
