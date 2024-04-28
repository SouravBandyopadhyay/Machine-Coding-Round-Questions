import { useEffect, useState } from "react";

function Light({ backgroundColor }) {
  return <div className="traffic-light" style={{ backgroundColor }} />;
}

export default function TrafficLight({ config }) {
  const [currentColor, setCurrentColor] = useState("green");

  useEffect(() => {
    const { duration, next } = config[currentColor];
    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);
    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <div className={["traffic-light-container"]}>
      {Object.keys(config).map((color) => (
        <Light
          key={color}
          backgroundColor={
            color === currentColor ? config[color].backgroundColor : undefined
          }
        />
      ))}
    </div>
  );
}
