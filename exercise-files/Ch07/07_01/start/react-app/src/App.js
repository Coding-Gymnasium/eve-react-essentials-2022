import "./App.css";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Navigation />
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <Navigation />
      <h1>About Us</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <Navigation />
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}
