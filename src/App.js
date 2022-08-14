import "./App.css";
import Hero from "./components/hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-slate-800 min-h-screen">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
