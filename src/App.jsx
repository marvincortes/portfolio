import { useState } from 'react'
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import Message from "./components/PortfolioMessages";
import Experience from "./components/ExperienceSection";
import './index.css'

function App() {
  return (
    <>
    <Hero/>
    <Message/>
    <Experience/>
    <Footer/>
    </>
  );
}

export default App;
