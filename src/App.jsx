import { useState } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;
    const handleDragMove = (e) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;
      setPosition({ x: newX, y: newY });
    };
    const handleDragEnd = () => {
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
    };
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
  };

  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'lightblue',
        position: 'absolute',
        top: position.y,
        left: position.x,
        border: '1px solid black',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onMouseDown={handleDragStart}
    >
      <p style={{ margin: 0 }}>
        X: {position.x}, Y: {position.y}
      </p>
      Drag me!
    </div>
  );
}

export default App;
