import { useState } from "react";
import "./App.css";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      <label>{checked ? 'Checked' : 'Not Checked' }</label>
    </div>
  );
}

export default App;
