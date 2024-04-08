// import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParticleComponents from './animations/Particles'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <ParticleComponents />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/particles" element={<ParticleComponents />} />
          </Routes>
        
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
