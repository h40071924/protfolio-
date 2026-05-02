import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project/project";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
     
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
  
     <Footer /> 
     
    </>
  )
}

export default App
