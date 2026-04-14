import React from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import AboutHome from './AboutHome';
import MernStack from './MernStack';
import Achievements from './Achievements';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutHome />
      <Skills />
      <MernStack />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
