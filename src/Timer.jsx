import { useRef, useState } from "react";

const Timer = () => {
  const [{ min, sec }, setTime] = useState({ min: 0, sec: 0 });
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef({ id: null });

  const handleIncrementTimeUnit = () => {
    setTime((prev) => {
      const min = prev.sec >= 59 ? prev.min + 1 : prev.min;
      const sec = prev.sec >= 59 ? 0 : prev.sec + 1;
      return { ...prev, min, sec };
    });
  };

  const handleStartTimer = () => {
    if (!intervalRef.current.id) {
      intervalRef.current.id = setInterval(handleIncrementTimeUnit, 1000);
    }
  };

  const handlePauseTimer = () => {
    clearInterval(intervalRef.current.id);
    intervalRef.current.id = null;
  };

  const handleResumeTimer = () => {
    if (!intervalRef.current.id) {
      intervalRef.current.id = setInterval(handleIncrementTimeUnit, 1000);
    }
  };
  const handleResetTimer = () => {
    clearInterval(intervalRef.current.id);
    intervalRef.current.id = null;
    setTime({ min: 0, sec: 0 });
  };

  const handleLapCapture = () => {
    if (intervalRef.current.id) {
      setLaps((prev) => [...prev, { min, sec }]);
    }
  };
  return (
    <div>
      <button type="click" onClick={handleStartTimer}>
        Start Timer
      </button>
      <button type="click" onClick={handlePauseTimer}>
        Pause Timer
      </button>
      <button type="click" onClick={handleResumeTimer}>
        Resume Timer
      </button>
      <button type="click" onClick={handleResetTimer}>
        Reset Timer
      </button>
      <button type="click" onClick={handleLapCapture}>
        Lap Capture
      </button>
      <div>
        {min}:{sec}
      </div>
      <ul>
        {laps.map((el, index) => (
          <li key={index}>
            {el.min}:{el.sec}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timer;
