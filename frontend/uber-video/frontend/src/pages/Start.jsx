import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Uber Clone</h1>
        <Link
          to="/login"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
