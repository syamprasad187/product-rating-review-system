// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import ProductList from './components/ProductList'
import { useAuth } from './context/AuthProvider'

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <div>
        <NavBar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList userId={user?.id} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
