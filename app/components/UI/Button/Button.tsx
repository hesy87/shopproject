import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  style: string;
  id?: number;
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
};
const Button = ({ children, style, type, onClick }: Props) => {
  return (
    <button onClick={onClick} type={type} className={style}>
      {children}
    </button>
  );
};

export default Button;
