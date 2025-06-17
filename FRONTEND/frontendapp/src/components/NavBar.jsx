import React from 'react'

import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Product Review System</h1>

      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Register</Link>
      </div>
    </nav>
  )
}

