import React, { useEffect, useState } from 'react';
import './App.css';

function AnalogClockTest() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Calculating degrees for secs
  const secondDeg = (time.getSeconds() / 60) * 360;
    // Calculating degrees for mints
  const minuteDeg = (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6;
    // Calculating degrees for hours
  const hourDeg = (time.getHours() % 12 / 12) * 360 + (time.getMinutes() / 60) * 30;

  return (
    <div className="clock">
      <div className="clock-hand hour-hand" style={{ transform: `rotate(${hourDeg}deg)` }}></div>
      <div className="clock-hand minute-hand" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
      <div className="clock-hand second-hand" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
      <div className="center-dot"></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Dynamic Analog Clock Test</h1>
      <AnalogClockTest />
    </div>
  );
}

export default App;
