import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <div className="counter-card">
        <h1>Hello, React!</h1>
        <p className="description">
          A simple interactive counter application.
        </p>

        <div className="count-display">
          {count}
        </div>

        <div className="buttons">
          <button onClick={() => setCount(count - 1)}>
            Decrement
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>

          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;

