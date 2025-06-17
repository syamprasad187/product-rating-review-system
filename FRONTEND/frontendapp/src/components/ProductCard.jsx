import React, { useState } from 'react';
import ReviewDialog from './ReviewDialog';

export default function ProductCard({ product, userId }) {
  const [showReview, setShowReview] = useState(false);

  return (
    <div className="border rounded-xl p-4 shadow">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setShowReview(true)}
      >
        Write Review
      </button>

      {showReview && (
        <ReviewDialog
          productId={product.id}
          userId={userId}
          onClose={() => setShowReview(false)}
        />
      )}
    </div>
  );
}
