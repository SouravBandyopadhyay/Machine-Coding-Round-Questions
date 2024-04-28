import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentColor, setCurrentColor] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      switch (currentColor) {
        case 'red':
          setCurrentColor('green');
          setTimeout(() => setCurrentColor('yellow'), 3000);
          break;
        case 'yellow':
          setCurrentColor('red');
          break;
        case 'green':
          setCurrentColor('yellow');
          break;
        default:
          setCurrentColor('red');
          break;
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentColor]);

  return (
    <div className="App">
      <h1>Traffic Light</h1>
      <div className="traffic-light-container">
        <div className={`light red ${currentColor === 'red' ? 'active' : ''}`}></div>
        <div className={`light yellow ${currentColor === 'yellow' ? 'active' : ''}`}></div>
        <div className={`light green ${currentColor === 'green' ? 'active' : ''}`}></div>
      </div>
    </div>
  );
}

export default App;
