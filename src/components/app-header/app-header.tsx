import styles from "./app-header.module.css";
import star from "../../images/star.svg";
import { useMemo, type FC } from "react";
import Timer from "../timer/timer";
import { useSelector } from "../../utils/additional-storage-typing";

const AppHeader: FC = () => {
  const { isRunning } = useSelector((store) => store.timer);
  const expiryTime = useMemo(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 115);
    return time;
  }, []);

  return (
    <>
      {isRunning ? (
        <header className={styles.header}>
          <div className={styles.container}>
            <h1 className={styles.textPromotion}>
              Успейте открыть пробную неделю
            </h1>
            <p className={styles.time}>
              <img src={star} alt="" className={styles.imageStar} />
              <Timer expiryTimestamp={expiryTime} remainingTime={30} />
              <img src={star} alt="" className={styles.imageStar} />
            </p>
          </div>
        </header>
      ) : (
        <header></header>
      )}
    </>
  );
};

export default AppHeader;
