// Badge.tsx
import React from 'react';

const Badge = ({ children }) => {
  return (
    <span className="inline-block bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full mr-2 mt-2">
      {children}
    </span>
  );
};

export default Badge;
