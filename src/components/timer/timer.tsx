import { useEffect, useState, type FC } from "react";
import styles from "./timer.module.css";
import { useTimer } from "react-timer-hook";
import { TIMER_START, TIMER_STOP } from "../../services/actions/timer";
import { useDispatch } from "../../utils/additional-storage-typing";

type TTimerProps = {
  expiryTimestamp: Date;
  remainingTime?: number;
};

const Timer: FC<TTimerProps> = ({ expiryTimestamp, remainingTime }) => {
  const dispatch = useDispatch();
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => dispatch({ type: TIMER_STOP }),
  });
  useEffect(() => {
    dispatch({ type: TIMER_START });
  }, []);
  const [isRemainingTimeStyles, setIsRemainingTimeStyles] = useState(false);
  useEffect(() => {
    if (!remainingTime) return;
    if (minutes === 0 && seconds <= remainingTime) {
      setIsRemainingTimeStyles(true);
    }
  }, [seconds, minutes]);

  function formattingTime(valueTime: number) {
    return `${valueTime}`.length === 1 ? `0${valueTime}` : valueTime;
  }

  return (
    <time
      className={`${styles.timeValue} ${isRemainingTimeStyles ? styles.remainingTime : ""}`.trim()}
    >
      <span>{formattingTime(minutes)}</span>:
      <span>{formattingTime(seconds)}</span>
    </time>
  );
};

export default Timer;
