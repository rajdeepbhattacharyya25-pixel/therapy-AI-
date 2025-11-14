import React from 'react';

const ROBOT_ICON_URL = 'https://i.ibb.co/6r15J5F/robot-icon.png';

const TypingIndicator: React.FC = () => (
  <div className="flex items-end gap-3 my-4 justify-start">
    <img
      src={ROBOT_ICON_URL}
      alt="Dr. Rajdeep"
      className="w-8 h-8 rounded-full self-start flex-shrink-0 bg-slate-700 p-1"
    />
    <div className="flex items-center space-x-3 bg-white dark:bg-[#39465D] px-4 py-3 rounded-2xl rounded-bl-none shadow border border-gray-200 dark:border-sky-400">
      <span className="text-sm text-gray-500 dark:text-gray-400 italic">Dr. Rajdeep is typing...</span>
      <div className="morph-animation w-3 h-3 bg-gray-500 dark:bg-gray-400"></div>
    </div>
  </div>
);

export default TypingIndicator;