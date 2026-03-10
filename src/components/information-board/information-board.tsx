import type { FC, PropsWithChildren } from "react";
import styles from "./information-board.module.css";

type TInformationBoardProps = {
  additionalClassName?: string;
} & PropsWithChildren;

const InformationBoard: FC<TInformationBoardProps> = ({
  children,
  additionalClassName,
}) => {
  return (
    <article
      className={`${styles.informationBoard} ${additionalClassName ? additionalClassName : ""}`.trim()}
    >
      {children}
    </article>
  );
};

export default InformationBoard;
