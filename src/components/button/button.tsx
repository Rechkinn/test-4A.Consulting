import type { ButtonHTMLAttributes, FC } from "react";
import styles from "./button.module.css";

type TButtonProps = {
  additionalClassName?: string;
  needBlinking?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<TButtonProps> = ({
  children,
  additionalClassName,
  needBlinking,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${additionalClassName} ${needBlinking ? styles.blinking : ""}`.trim()}
    >
      {children}
    </button>
  );
};

export default Button;
