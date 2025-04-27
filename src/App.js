
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startstop = () => {
    setIsRunning(prev => !prev);
  }

  const reset = () => {
    setCount(0);
    setIsRunning(false);
  }

  const formattime = () => {
    let min = Math.floor(count / 60);
    let seconds = count % 60;

    return `${min}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  return (<div>
    <h1>Stopwatch</h1>
    <p>Time: {formattime()}</p>
    <button onClick={startstop}>{isRunning ? "Stop" : "Start"}</button>
    <button onClick={reset}>Reset</button>

  </div>)
}

export default App;
