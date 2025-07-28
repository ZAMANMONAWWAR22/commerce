import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { Routes,Route } from 'react-router-dom'
import Kids from './pages/Kids'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductPage from './pages/ProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>} />
      <Route path='/kids' element={<Kids/>} />   
       <Route path='/shop' element={<Shop/>} />  
        <Route path='/product/:id' element={<ProductPage/>} />  
    </Routes>     
    </>
  )
}

export default App
