export const CloseIconWithBg = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="bg-[#262626] rounded-full w-[23px] h-[23px] stroke-[3px] p-[3px] cursor-pointer"
      onClick={onClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};
