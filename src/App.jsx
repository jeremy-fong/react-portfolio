import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact';
import './index.css'

function App() {
  return (
    <>
    <Header />
    <Navbar />
    <About />
    <Experience />
    <Projects />
    <Contact />
    </>
  );
}

export default App;