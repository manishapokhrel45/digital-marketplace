'use client';

import { useState } from 'react';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  const sampleItem = {
    title: 'Next.js 15 Premium Template',
    price: 49,
    thumbnail: '🚀',
  };

  return (
    <div className='p-8 text-center space-y-8'>
      {/* Mini Simple Header */}
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-sm mx-auto flex justify-between items-center'>
        <span className='font-medium text-blue-800'>Items in Cart:</span>
        <span className='bg-blue-600 text-white font-bold px-3 py-1 rounded-full text-sm'>
          {cartCount}
        </span>
      </div>

      <h1 className='text-3xl font-bold text-zinc-900'>
        Welcome to NexusAssets!
      </h1>
      <p className='text-zinc-500 text-sm'>
        Click the button below to test your React code.
      </p>

      <div className='max-w-sm mx-auto bg-white border border-zinc-200 rounded-xl p-6 shadow-sm'>
        <div className='text-4xl mb-2'>{sampleItem.thumbnail}</div>
        <h3 className='text-lg font-bold text-zinc-800'>{sampleItem.title}</h3>
        <p className='text-xl font-extrabold text-blue-600 mt-2'>
          ${sampleItem.price}
        </p>

        <button
          onClick={() => setCartCount(cartCount + 1)}
          className='mt-4 w-full bg-zinc-900 text-white font-medium py-2 rounded-lg hover:bg-zinc-800 transition-colors'
        >
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}
