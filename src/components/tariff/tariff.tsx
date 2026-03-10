import { useEffect, useRef, useState, type FC } from "react";
import styles from "./tariff.module.css";
import Discount from "../discount/discount";
import type { TTariffProps } from "../../utils/types";
import { useSelector } from "../../utils/additional-storage-typing";

const Tariff: FC<TTariffProps> = ({
  needBestsellerText = false,
  price,
  fullPrice,
  isBest = false,
  text,
  needLargeSize = false,
  duration,
}) => {
  const { isRunning } = useSelector((store) => store.timer);
  const [widthDocument, setWidthDocument] = useState(
    document.documentElement.scrollWidth,
  );
  useEffect(() => {
    const handleResize = () => {
      setWidthDocument(document.documentElement.scrollWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getStylesTariff(isLargeFlag: boolean, isBestFlag: boolean): string {
    let result = isLargeFlag
      ? `${styles.tariffLargeSize} `
      : `${styles.tariffSmallSize} `;

    if (isBestFlag) result += `${styles.isBestTariff} `;

    return result;
  }
  function calculateDiscount(
    priceWithDiscount: number,
    priceWithoutDiscount: number,
  ): string {
    return `${100 - (priceWithDiscount / priceWithoutDiscount) * 100}`.split(
      ".",
    )[0];
  }

  return (
    <article
      className={getStylesTariff(needLargeSize, isBest)}
      style={!needLargeSize ? { paddingTop: isRunning ? "70px" : "40px" } : {}}
    >
      <div className={styles.discountContainer}>
        {isRunning && (
          <>
            <Discount>-{calculateDiscount(price, fullPrice)}%</Discount>
            {needBestsellerText && (
              <span className={styles.bestsellerText}>хит!</span>
            )}
          </>
        )}
      </div>

      <div
        className={
          needLargeSize ? styles.containerInfoLarge : styles.containerInfoSmall
        }
      >
        <div
          className={
            needLargeSize
              ? styles.containerPrice
              : styles.containerPriceSmallSize
          }
          style={{ minWidth: !isRunning && needLargeSize ? "200px" : "181px" }}
        >
          <h2 className={styles.durationValue}>{duration}</h2>
          <p
            className={
              isBest ? styles.isBestPriceDiscount : styles.priceDiscount
            }
          >
            {isRunning ? `${price} ₽` : `${fullPrice} ₽`}
          </p>
          {isRunning && <p className={styles.price}>{fullPrice} ₽</p>}
        </div>
        <p className={styles.containerInfoText}>
          {needLargeSize
            ? widthDocument >= 520
              ? text
              : "Всегда быть в форме"
            : text}
        </p>
      </div>
    </article>
  );
};

export default Tariff;
