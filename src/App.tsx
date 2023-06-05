import React, { useState } from 'react';
import './App.css';
import Intro from './pages/Intro';
import { Hero } from './pages/Hero';
import SubMenu from './components/SubMenu';
import Header from './components/Header';
import { About } from './pages/about';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className="h-full  snap-y snap-mandatory md:visible text-black bg-slate-50 z-0">
      
        <Intro />
        <Header dark={dark} />
        <Hero setDark={setDark} />
        <SubMenu setDark={setDark} dark={true} title='about'></SubMenu>
        <About />
        <Skills setDark={setDark}/>
        <SubMenu dark={false} setDark={setDark} title='projects' />
        <Projects setDark={setDark} />
        <SubMenu dark={true} setDark={setDark} title='contact' />
        <Contact />
    </div>

  );
}

export default App;
