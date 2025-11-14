import React from 'react';

const ROBOT_ICON_URL = 'https://i.ibb.co/6r15J5F/robot-icon.png';

const LoadingIndicator: React.FC = () => (
  <div className="flex items-end gap-3 my-4 justify-start">
    <img
      src={ROBOT_ICON_URL}
      alt="Dr. Rajdeep"
      className="w-8 h-8 rounded-full self-start flex-shrink-0 bg-slate-700 p-1"
    />
    <div className="flex items-center space-x-1 bg-white dark:bg-[#39465D] px-4 py-3 rounded-2xl rounded-bl-none shadow border border-gray-200 dark:border-sky-400">
      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
    </div>
  </div>
);

export default LoadingIndicator;