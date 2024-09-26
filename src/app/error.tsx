'use client';

import { useEffect } from 'react';
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className='text-center min-h-screen w-full flex flex-col justify-center items-center gap-5'>
      <h1>Something went wrong. Please try again later.</h1>
      {error && <span>caused by: {error.message}</span>}
      <button className='px-5 py-2 bg-red-500 text-white font-semibold rounded-lg' onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}