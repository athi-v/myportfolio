import React from 'react'

import ScrollToTop from "react-scroll-to-top";
import NavComponents from './components/NavComponents';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
<ScrollToTop smooth height='20' color='#171729'  />
<NavComponents />
<Hero />
<About />
<Services />
<Project />
<Contact />
<Footer />
    </>
  );
}

export default App;
