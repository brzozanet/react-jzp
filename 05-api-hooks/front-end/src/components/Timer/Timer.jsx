import { useRef, useState } from "react";
import css from "./Timer.module.css";
import { Button } from "../Button/Button";

function secondsToMinutes(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }

  return `${minutes}:${remainingSeconds}`;
}

export function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const handleStartClick = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);
    }
  };

  const handleStopClick = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleResetClick = () => {
    handleStopClick();
    setTime(0);
  };

  return (
    <section className={css.section}>
      <span className={css.title}>Zacznij sesję!</span>
      <div className={css.buttons}>
        <Button onClick={handleStartClick}>Start</Button>
        <Button onClick={handleStopClick}>Stop</Button>
        <Button onClick={handleResetClick}>Reset</Button>
      </div>
      <span className={css.time}>{secondsToMinutes(time)}</span>
    </section>
  );
}
