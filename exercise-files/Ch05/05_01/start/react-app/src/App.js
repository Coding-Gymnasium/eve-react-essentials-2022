import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    setTitle('');
    setColor('#000000')
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="color title..."
      />
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        type="color"
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
