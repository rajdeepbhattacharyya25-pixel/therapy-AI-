import React from 'react';

const ROBOT_ICON_URL = 'https://i.ibb.co/6r15J5F/robot-icon.png';

interface HeaderProps {
  onShare: () => void;
  onNewChat: () => void;
  onToggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ onShare, onNewChat, onToggleTheme, theme }) => {
  const canShare = typeof navigator !== 'undefined' && (!!navigator.share || !!navigator.clipboard);

  return (
    <header className="bg-white dark:bg-[#2c3e50] p-4 w-full max-w-3xl mx-auto rounded-t-2xl sticky top-4 z-10">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <div className="border-2 border-sky-400 p-1 rounded-md">
            <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center">
              <img
                src={ROBOT_ICON_URL}
                alt="Dr. Rajdeep AI"
                className="w-14 h-14"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#4A3F35] dark:text-gray-100" style={{ fontFamily: "'Playfair Display', serif" }}>
              Dr. Rajdeep
            </h1>
            <p className="text-sm text-[#856c54] dark:text-gray-400">@Dr.Rajdeep.the.thala</p>
            <p className="text-md italic text-[#4A3F35] dark:text-gray-300 mt-1">"I diagnose problems that I cause."</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onNewChat}
            aria-label="New Chat"
            title="Start a new chat"
            className="text-sm font-medium text-[#856c54] dark:text-gray-300 hover:text-[#4A3F35] dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 dark:focus:ring-offset-slate-800 rounded-lg px-3 py-1.5"
          >
            new chat
          </button>
           <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
            className="p-2 text-[#856c54] dark:text-gray-300 hover:text-[#4A3F35] dark:hover:text-white transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 dark:focus:ring-offset-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            ) : (
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591M12 12a2.25 2.25 0 0 0-2.25 2.25 2.25 2.25 0 0 0 2.25 2.25 2.25 2.25 0 0 0 2.25-2.25A2.25 2.25 0 0 0 12 12Z" />
              </svg>
            )}
          </button>
          {canShare && (
            <button
              onClick={onShare}
              aria-label="Share conversation"
              title="Share Conversation"
              className="text-sm font-medium text-[#856c54] dark:text-gray-300 hover:text-[#4A3F35] dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 dark:focus:ring-offset-slate-800 rounded-lg px-3 py-1.5"
            >
              share convo.
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;