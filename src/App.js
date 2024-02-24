import './App.css';
import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Nav from './components/Nav';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing  />
      <About />
    </div>
  );
}

export default App;
