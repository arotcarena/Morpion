import { useEffect, useState } from 'react';
import './timer.css';


export function Timer({turn, onTimeOver}) {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setCounter(100);
    if(timer !== null) {
      clearInterval(timer);
    }
    if(turn === null) {
      return;
    }
    setTimer(
      setInterval(() => {
        setCounter(counter => counter - 1);
      }, 100)
    );
    // eslint-disable-next-line
  }, [turn]);

  useEffect(() => {
    if(counter < 0) {
      onTimeOver();
      clearInterval(timer);
      setCounter(0);
    }
    // eslint-disable-next-line
  }, [counter, onTimeOver])

  return (
    <div className="timer-container">
        <div className="timer" style={{width: counter+'%'}}></div>
    </div>
  )
}
