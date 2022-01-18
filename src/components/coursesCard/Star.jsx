const Star = ({ num }) => {
  const stars = [0, 1, 2, 3, 4];
  return (
    <>
      {stars.map((item, index) => {
        return (
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            key={index.toString()}
          >
            <path
              d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
              fill={num < 6 && num > item ? "#00C688" : "#fff"}
              stroke={num < 6 && num > item ? "#00C688" : "#fff"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      })}
    </>
  );
};
export default Star;
