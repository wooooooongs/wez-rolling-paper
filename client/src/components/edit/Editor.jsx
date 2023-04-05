import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { letterContentsAtom } from '../../recoil';

const Editor = () => {
  const [textLength, setTextLength] = useState(0);
  const setLetterContents = useSetRecoilState(letterContentsAtom);

  const handleTextChange = (e) => {
    const text = e.target.value;
    const textCount = text.length;

    setLetterContents((prev) => ({ ...prev, contents: text }));
    setTextLength(textCount);
  };

  return (
    <div className='flex h-[55vh] flex-col justify-between rounded-2xl bg-yellow-100 p-6 drop-shadow-lg'>
      <div className='h-[86%]'>
        <textarea
          className='h-full w-full resize-none bg-transparent text-3xl leading-10 tracking-wider outline-none scrollbar-hide'
          spellCheck='false'
          cols='30'
          rows='10'
          onChange={(e) => handleTextChange(e)}></textarea>
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <span className='inline-block h-8 w-8 bg-slate-600'></span>
          <span className='inline-block h-8 w-8 bg-slate-600'></span>
          <span className='inline-block h-8 w-8 bg-slate-600'></span>
          <span className='inline-block h-8 w-8 bg-slate-600'></span>
        </div>
        <div className='pt-2'>
          <span className='m-1'>{textLength}</span>
          <span>자</span>
        </div>
      </div>
    </div>
  );
};

export { Editor };
