import type { FC, PropsWithChildren } from "react";
import styles from "./discount.module.css";

const Discount: FC<PropsWithChildren> = ({ children }) => {
  return <article className={styles.discount}>{children}</article>;
};

export default Discount;
