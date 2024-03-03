import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Landing from './pages/Landing';
import About from './pages/About';
import Solution from './pages/Solution';
import Contact from './pages/Contact';
import Products from './pages/Products';
// import { ScrollContainer} from 'react-scroll-motion';
function App() {
  return (
    <div className="App">
      <Nav />
      <Landing  />
      <About />
      <Solution />
    </div>
  );
}

export default App;
