const Dot = (props) => {
  const { dotNum } = props;

  return (
    <span className={`${dotNum !== 0 ? 'opacity-30' : ''}`}>
      <svg
        width='10'
        height='10'
        viewBox='0 0 10 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='5' cy='5' r='5' fill='black' />
      </svg>
    </span>
  );
};

export { Dot };
