import type { PropsWithChildren } from "react";
import { forwardRef, useEffect, useState } from "react";
import styles from "./custom-checkbox.module.css";
import { ECheckboxColors, type TStylesCheckbox } from "../../utils/types";

type TCustomCheckboxProps = {
  errorStylesCheckbox: TStylesCheckbox;
} & PropsWithChildren;

const CustomCheckbox = forwardRef<HTMLInputElement, TCustomCheckboxProps>(
  ({ children, errorStylesCheckbox }, ref) => {
    const [styleCheckbox, setStyleCheckbox] = useState<TStylesCheckbox>();
    useEffect(() => {
      setStyleCheckbox(errorStylesCheckbox);
    }, [errorStylesCheckbox]);

    return (
      <article className={styles.containerCustomCheckbox}>
        <label
          className={styles.label}
          onClick={(e) => {
            e.stopPropagation();
            setStyleCheckbox({
              borderColor: ECheckboxColors.baseBorder,
              backgroundColor: ECheckboxColors.baseBackground,
            });
          }}
        >
          <input
            ref={ref}
            type="checkbox"
            className={styles.originalCheckbox}
          />
          <div className={styles.customCheckbox} style={styleCheckbox}>
            <div className={styles.imgCheckMark}></div>
          </div>
          <span>{children}</span>
        </label>
      </article>
    );
  },
);

export default CustomCheckbox;
