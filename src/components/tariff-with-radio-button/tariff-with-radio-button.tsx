import { type FC } from "react";
import styles from "./tariff-with-radio-button.module.css";
import Tariff from "../tariff/tariff";
import type { TTariffProps } from "../../utils/types";

type TTariffWithRadioButtonProps = {
  id: string;
  selectedTariffId: string;
  onChangeRadioButton: any;
} & TTariffProps;

const TariffWithRadioButton: FC<TTariffWithRadioButtonProps> = ({
  id,
  selectedTariffId,
  onChangeRadioButton,

  needBestsellerText = false,
  price,
  fullPrice,
  isBest = false,
  text,
  needLargeSize = false,
  duration,
}) => {
  return (
    <article className={styles.tariffWithRadioButton}>
      <label htmlFor={id} className={styles.label}>
        <input
          type="radio"
          id={id}
          name="tariff"
          value={"3 месяца"}
          className={styles.input}
          checked={selectedTariffId === id}
          onChange={onChangeRadioButton}
        />
        <Tariff
          needBestsellerText={needBestsellerText}
          fullPrice={fullPrice}
          price={price}
          isBest={isBest}
          text={text}
          needLargeSize={needLargeSize}
          duration={duration}
        />
      </label>
    </article>
  );
};

export default TariffWithRadioButton;
