import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { Routes,Route } from 'react-router-dom'
import Kids from './pages/Kids'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>} />
      <Route path='/kids' element={<Kids/>} />    
    </Routes>     
    </>
  )
}

export default App
