import React, { useState } from 'react';
import './App.css';
import Intro from './pages/Intro';
import { Hero } from './pages/Hero';
import SubMenu from './components/SubMenu';
import Header from './components/Header';
import { About } from './pages/about';
import Skills from './pages/Skills';



function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll md:visible text-black bg-slate-50 z-0 ">
      
        <Intro />
        <Header dark={dark} />
        <Hero setDark={setDark} />
        <SubMenu setDark={setDark} dark title='ABOUT ME'></SubMenu>
        <About />
        <Skills />
     
    </div>

  );
}

export default App;
