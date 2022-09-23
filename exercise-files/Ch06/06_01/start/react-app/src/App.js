import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/nicorithner`)
      .then((response) => response.json())
      .then(setData(data));
  }, []);
  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }
  return <h1>Data</h1>;
}

export default App;
