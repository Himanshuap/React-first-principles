import { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  function start() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  }

  function stop() {
    clearInterval(intervalRef.current);
  }

  function reset() {
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
  }

  function lap() {
    setLaps(prev => [...prev, time]);
  }

  return (
    <div>
      <h1>{time}s</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
      <button onClick={lap}>Lap</button>

      <ul>
        {laps.map((lapTime, index) => (
          <li key={index}>Lap {index + 1}: {lapTime}s</li>
        ))}
      </ul>
    </div>
  );
}

export default Stopwatch;



