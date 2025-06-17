import React, { useState } from 'react'
import axios from 'axios'

export default function ReviewDialog({ productId, userId, onClose }) {
  const [rating, setRating] = useState('')
  const [review, setReview] = useState('')
  const [photo, setPhoto] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!rating && !review) {
      alert('Please Provide a Rating or Review')
      return
    }

    const formData = new FormData()
    formData.append('product_id', productId)
    formData.append('user_id', userId)

    if (rating) formData.append('rating', rating)
    if (review) formData.append('review', review)
    if (photo) formData.append('photo', photo)

    axios.post('/api/reviews', formData)
      .then(() => {
        alert('Review Submitted')
        onClose()
      })
      .catch((error) => {
        alert(error.response?.data?.message || 'Submission Failed')
      });
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Submit a Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            placeholder="Rating (1-5)"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Write your review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border p-2 rounded h-24"
          />
          <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="w-full"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 rounded bg-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
