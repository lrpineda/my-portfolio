import "./App.css";
import Hero from "./components/hero";
import Nav from "./components/Nav";
import Drawer from "./components/sub-component/drawer";

function App() {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Nav />
        <Hero />
      </div>
      <Drawer />
    </div>
  );
}

export default App;
