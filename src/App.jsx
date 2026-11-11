import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter-display">
        <h1>Contador de Cliques</h1>
        <p>{count}</p>
      </div>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}></button>
      </div>
    </div>
  );
}

export default App;