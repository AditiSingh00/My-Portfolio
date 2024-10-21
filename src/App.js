import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Projects from './containers/projects';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import Preloader from "./containers/pre"
import Footer from './components/footer/footer';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

 
  return (
    <div >
        <Router>
        <Preloader load={load} />
        <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
