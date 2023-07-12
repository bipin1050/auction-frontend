import { ButtonProps } from "../../types/buttonTypes";

const Button = ({ value, styles, handleClick }: ButtonProps) => {
  return (
    <button
      className={`${styles} block mx-auto text-[white] py-1 rounded-2xl border-2 border-main outline-none bg-main hover:bg-[white] hover:text-main`}
      onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;
