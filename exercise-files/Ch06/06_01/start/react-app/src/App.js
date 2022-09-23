import "./App.css";
import { useEffect, useState } from "react";

function GithubUser({ name, location, avatar}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{location}</h2>
      <img src={avatar} height={150} alt={name}/>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/nicorithner`)
      .then((response) => response.json())
      .then(setData(data));
  }, []);
  if (data) {
    return <GithubUser name={data.name} location={data.location} avatar={data.avatar_url} />;
  }
  return <h1>Data</h1>;
}

export default App;
