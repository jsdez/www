import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-teal-300 dark:bg-purple-900 transition-colors duration-300 flex items-center justify-center">
      <div className="relative">
        {/* Main loading text */}
        <div className="text-5xl sm:text-6xl font-black bg-white dark:bg-gray-900 dark:text-white p-8 rotate-2 border-4 border-border dark:border-darkBorder shadow-shadow">
          LOADING
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-14 h-14 bg-pink-500 dark:bg-teal-400 border-4 border-border dark:border-darkBorder shadow-shadow rounded-base animate-spin-slow" />
        <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-blue-400 dark:bg-orange-400 border-4 border-border dark:border-darkBorder shadow-shadow rounded-base animate-pulse" />

        {/* Loading dots */}
        <div className="flex gap-3 mt-8 justify-center">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-4 h-4 bg-black dark:bg-white rounded-base animate-bounce"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>

        {/* Rotating square */}
        <div className="absolute -top-14 -left-14 w-16 h-16 bg-teal-500 dark:bg-red-400 border-4 border-border dark:border-darkBorder shadow-shadow transform rotate-45" />
      </div>
    </div>
  );
};

export default LoadingScreen;
