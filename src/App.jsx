import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY;
      const angleIncrement = 0.05; // Adjust the speed of rotation
      const radius = 200; // Adjust the radius of the circular path

      // Calculate the angle based on scroll position
      const newAngle = scrollY * angleIncrement;

      setAngle(newAngle);
    };

    // Add scroll event listener
    window.addEventListener('scroll', scrollHandler);

    // Clean up
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const divStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%) rotate(${angle}rad) translate(${200}px)`,
    width: '50px',
    height: '50px',
    backgroundColor: 'blue',
    borderRadius: '50%',
  };

  return (
    <div>
      <div style={divStyle}></div>
      {/* Add enough content to allow scrolling */}
      <div style={{ height: '2000px' }}>Scroll to see the animation</div>
    </div>
  );
}

export default App;
