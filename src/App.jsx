import { useState } from "react";
import "./App.css";
import Timer from "./Timer";

function App() {
  const [timer, setTimer] = useState([]);

  const handleCreateTimer = () => {
    const id = new Date().getTime();
    setTimer((prev) => [...prev, { id }]);
  };

  const handleDeleteTimer = (timerId) => {
    setTimer((prev) => prev.filter((el) => el.id !== timerId));
  };
  return (
    <>
      <p>Timer Component</p>
      <button type="click" onClick={handleCreateTimer}>
        Create Timer
      </button>
      <hr />
      {timer.map((el) => (
        <div key={el.id}>
          <Timer/>
          <p>{el.id}</p>
          <button type="click" onClick={() => handleDeleteTimer(el.id)}>
            Delete Timer
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
