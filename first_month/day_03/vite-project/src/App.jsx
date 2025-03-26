import { useState } from 'react'
import Header from './Components/header'
import './App.css'
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Components/hero';
import Courses from "./Components/Courses";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  )
}

export default App
