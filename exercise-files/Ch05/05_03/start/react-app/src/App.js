import "./App.css";
import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
}

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
  {console.log(colorProps)}
    alert(`${titleProps.value}, ${colorProps}`);
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="color title..." />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;
