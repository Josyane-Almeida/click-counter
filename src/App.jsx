import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app-wrapper ${isDarkMode ? 'dark-theme' : ''}`}>
      <button 
        className="theme-toggle-btn" 
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      <div className="counter-display">
        <h1>Contador de Cliques</h1>
        <p>{count}</p>
      </div>

      <div className="increment-btns">
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;