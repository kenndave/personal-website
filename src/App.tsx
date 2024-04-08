// import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Main from './pages/Main'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParticleComponents from './animations/Particles'
import Projects from './pages/Projects'
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <ParticleComponents />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/particles" element={<ParticleComponents />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
