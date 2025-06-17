import axios from 'axios'
import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'

export default function Login() {

  const { setUser } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/login', form).then((result) => {
      setUser(result.data.user)
      alert('Login successful')
    }).catch(() => {
      alert('Login failed')
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-transform hover:scale-105 hover:shadow-2xl duration-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-shadow-blue-700">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="email" type="email" placeholder="Email" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} value={form.email} required />
          <input name="password" type="password" placeholder="Password" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} value={form.password} required />

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300">Login</button>
        </form>
      </div>
    </div>
  )
}
