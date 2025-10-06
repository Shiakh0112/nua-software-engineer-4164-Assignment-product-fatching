import React from 'react';

const Loading = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="loading-spinner mb-4"></div>
      <p className="text-gray-600">{message}</p>
    </div>
  );
};

export default Loading;