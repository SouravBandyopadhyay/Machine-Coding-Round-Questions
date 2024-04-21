import React, { useState } from 'react';
import './App.css';

const items = [
  {
    image: "https://images.pexels.com/photos/1234035/pexels-photo-1234035.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I am Card 1",
  },
  {
    image: "https://images.pexels.com/photos/629162/pexels-photo-629162.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I am Card 2",
  },
  {
    image: "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I am Card 3",
  },
  {
    image: "https://images.pexels.com/photos/234272/pexels-photo-234272.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I am Card 4",
  }
];

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const carouselStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
    height: 'auto',
    marginTop: '20px'
  };

  return (
    <div className="carousel" style={carouselStyle}>
      <button onClick={goToPrevious}>Previous</button>
      <img src={items[currentIndex].image} alt={items[currentIndex].text} />
      <label>{items[currentIndex].text}</label>
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Carousel items={items} />
    </div>
  );
}

export default App;
