export const CartIcon = ({ onClick }) => {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 30"
        onClick={onClick}
        className="cursor-pointer"
      >
        <path
          d="M24.4651 7.53777V5.45974H18.4222V0.730133H6.56077V5.45974H0.586426V29.2699H24.3965V11.7022H22.3185V27.1918H2.66446V7.53777H24.4651ZM8.63881 5.45974V2.80817H16.3442V5.45974H8.63881Z"
          fill="currentColor"
        ></path>
      </svg>
      <span className="absolute left-[40%] top-[27%] be-vietnam-pro-semibold text-[10px]">
        0
      </span>
    </div>
  );
};
