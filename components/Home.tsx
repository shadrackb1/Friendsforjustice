import React from 'react';
import Hero from './Hero';
import Impact from './Impact';

// We combine Hero and Impact for the home page so it feels full and informative immediately
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Impact />
    </>
  );
};

export default Home;