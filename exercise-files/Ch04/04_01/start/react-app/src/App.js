import { useState } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState('happy');

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion('sad')}>Sad</button>
      <button onClick={() => setEmotion('excited')}>Excited</button>
    </div>
  );
}

export default App;
