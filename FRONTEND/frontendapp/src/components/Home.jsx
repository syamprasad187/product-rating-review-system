import React from 'react'
import { useAuth } from '../context/AuthProvider'

export default function Home() {

    const { user } = useAuth()

    return (
        <div className="text-center mt-10">
            {user ? (
                <div>
                    <h1 className="text-3xl font-semibold">Welcome, {user.name} 👋</h1>
                    <p className="text-lg text-gray-600">Browse products and share your ratings or reviews.</p>
                </div>
            ) : (
                <p className="text-xl text-gray-600">Please log in or register</p>
            )}
        </div>
  )
}
