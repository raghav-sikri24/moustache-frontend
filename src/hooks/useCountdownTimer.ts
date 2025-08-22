import { useState, useEffect, useRef } from "react";
export default function useCountdownTimer(count = 60) {
  const [value, setValue] = useState(count);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const decrementValue = () => {
    setValue((prevValue) => {
      if (prevValue === 0) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        return prevValue;
      }
      return prevValue - 1;
    });
  };
  // Clear existing timer
  const clearTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  // Start a new timer
  const startTimer = () => {
    clearTimer();
    timerRef.current = setInterval(decrementValue, 1000);
  };

  const restart = () => {
    setValue(count);
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [count, restart]);
  return { value, restart };
}
