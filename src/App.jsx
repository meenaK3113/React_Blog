import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/work" element={<Header/>}/>
        <Route path="/blog" element={<Header/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

      
    </>
  )
}

export default App
