import "./App.css";
import Hero from "./components/hero";
import Nav from "./components/Nav";
import Drawer from "./components/sub-component/drawer";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Works } from "./components/Works"
import { Contact } from "./components/Contact"
import { useState } from "react";

function App() {

  const [currentPage, setCurrentPage] = useState("")

   const displayPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Work":
        return <Works />;
      case "Contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  }
   
  return (
    <div data-theme="dark" className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Nav setCurrentPage={setCurrentPage} />
        {displayPage()}
        <Footer />
      </div>
      <Drawer setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
