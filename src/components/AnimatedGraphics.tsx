import React from 'react';

export const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Clouds */}
      <div className="absolute top-16 left-20 opacity-30">
        <svg width="60" height="30" viewBox="0 0 60 30" className="animate-float" style={{animationDelay: '0s', animationDuration: '8s'}}>
          <path d="M15 20 Q5 15 10 10 Q15 5 25 8 Q35 5 45 10 Q55 15 45 20 Z" fill="rgba(255,255,255,0.6)" />
        </svg>
      </div>
      <div className="absolute top-32 right-32 opacity-25">
        <svg width="80" height="40" viewBox="0 0 80 40" className="animate-float" style={{animationDelay: '3s', animationDuration: '10s'}}>
          <path d="M20 25 Q8 18 15 12 Q22 6 35 10 Q48 6 60 12 Q72 18 60 25 Z" fill="rgba(255,255,255,0.5)" />
        </svg>
      </div>
      
      {/* Floating Currency Symbols */}
      <div className="absolute top-1/4 left-1/6 text-white/20 text-2xl animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>₹</div>
      <div className="absolute top-2/3 right-1/5 text-white/15 text-xl animate-bounce" style={{animationDelay: '2s', animationDuration: '4s'}}>$</div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/20 rotate-45 animate-spin" style={{animationDelay: '0s', animationDuration: '12s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
      
      {/* Large Background Orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-full animate-pulse" style={{animationDuration: '8s'}}></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-white/8 to-white/3 rounded-full animate-pulse" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
    </div>
  );
};

export const AnimatedFinanceIcon: React.FC = () => {
  return (
    <div className="relative w-40 h-40 mx-auto">
      <div className="absolute inset-0 animate-card-float">
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full drop-shadow-2xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Rotating Ring */}
          <circle
            cx="60"
            cy="60"
            r="55"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="3"
            strokeDasharray="15,10"
            className="animate-spin"
            style={{animationDuration: '8s'}}
          />
          
          {/* Middle Ring */}
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="2"
            strokeDasharray="8,5"
            className="animate-spin"
            style={{animationDuration: '12s', animationDirection: 'reverse'}}
          />
          
          {/* Central Glowing Circle */}
          <circle
            cx="60"
            cy="60"
            r="35"
            fill="url(#radialGradient)"
            className="animate-pulse"
            style={{animationDuration: '2s'}}
          />
          
          {/* Currency Symbol */}
          <text
            x="60"
            y="72"
            textAnchor="middle"
            fill="white"
            fontSize="28"
            fontWeight="bold"
            className="animate-bounce-in"
            style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}
          >
            ₹
          </text>
          
          {/* Orbiting Dots */}
          <circle cx="30" cy="30" r="3" fill="rgba(255,255,255,0.8)" className="animate-ping" style={{animationDelay: '0s'}} />
          <circle cx="90" cy="30" r="3" fill="rgba(255,255,255,0.8)" className="animate-ping" style={{animationDelay: '1s'}} />
          <circle cx="30" cy="90" r="3" fill="rgba(255,255,255,0.8)" className="animate-ping" style={{animationDelay: '2s'}} />
          <circle cx="90" cy="90" r="3" fill="rgba(255,255,255,0.8)" className="animate-ping" style={{animationDelay: '3s'}} />
          
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
            </linearGradient>
            <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export const AnimatedChart: React.FC = () => {
  return (
    <div className="relative w-48 h-36 mx-auto">
      <div className="absolute inset-0 animate-slide-in-scale">
        <svg
          viewBox="0 0 140 100"
          className="w-full h-full drop-shadow-xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated Chart Bars */}
          <rect x="15" y="70" width="12" height="0" fill="url(#barGradient1)" className="animate-bounce-in" style={{animationDelay: '0s'}}>
            <animate attributeName="height" values="0;25;20;25" dur="2s" repeatCount="indefinite" />
            <animate attributeName="y" values="70;45;50;45" dur="2s" repeatCount="indefinite" />
          </rect>
          
          <rect x="35" y="70" width="12" height="0" fill="url(#barGradient2)" className="animate-bounce-in" style={{animationDelay: '0.2s'}}>
            <animate attributeName="height" values="0;40;35;40" dur="2s" repeatCount="indefinite" />
            <animate attributeName="y" values="70;30;35;30" dur="2s" repeatCount="indefinite" />
          </rect>
          
          <rect x="55" y="70" width="12" height="0" fill="url(#barGradient3)" className="animate-bounce-in" style={{animationDelay: '0.4s'}}>
            <animate attributeName="height" values="0;55;50;55" dur="2s" repeatCount="indefinite" />
            <animate attributeName="y" values="70;15;20;15" dur="2s" repeatCount="indefinite" />
          </rect>
          
          <rect x="75" y="70" width="12" height="0" fill="url(#barGradient4)" className="animate-bounce-in" style={{animationDelay: '0.6s'}}>
            <animate attributeName="height" values="0;65;60;65" dur="2s" repeatCount="indefinite" />
            <animate attributeName="y" values="70;5;10;5" dur="2s" repeatCount="indefinite" />
          </rect>
          
          <rect x="95" y="70" width="12" height="0" fill="url(#barGradient5)" className="animate-bounce-in" style={{animationDelay: '0.8s'}}>
            <animate attributeName="height" values="0;45;40;45" dur="2s" repeatCount="indefinite" />
            <animate attributeName="y" values="70;25;30;25" dur="2s" repeatCount="indefinite" />
          </rect>
          
          {/* Animated Trend Line */}
          <polyline
            points="21,58 41,35 61,20 81,10 101,30"
            fill="none"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="3"
            strokeDasharray="8,4"
            className="animate-pulse"
            style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}
          >
            <animate attributeName="stroke-dashoffset" values="0;-12;0" dur="3s" repeatCount="indefinite" />
          </polyline>
          
          {/* Growth Arrow with Animation */}
          <g className="animate-bounce" style={{animationDelay: '1s'}}>
            <path
              d="M115 35 L125 25 L120 30 L125 25 L120 20"
              stroke="rgba(255,255,255,0.95)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}
            />
          </g>
          
          {/* Floating Data Points */}
          <circle cx="21" cy="58" r="4" fill="rgba(255,255,255,0.8)" className="animate-ping" style={{animationDelay: '0s'}} />
          <circle cx="41" cy="35" r="4" fill="rgba(255,255,255,0.8)" className="animate-ping" style={{animationDelay: '0.5s'}} />
          <circle cx="61" cy="20" r="4" fill="rgba(255,255,255,0.8)" className="animate-ping" style={{animationDelay: '1s'}} />
          <circle cx="81" cy="10" r="4" fill="rgba(255,255,255,0.8)" className="animate-ping" style={{animationDelay: '1.5s'}} />
          <circle cx="101" cy="30" r="4" fill="rgba(255,255,255,0.8)" className="animate-ping" style={{animationDelay: '2s'}} />
          
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="barGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
            </linearGradient>
            <linearGradient id="barGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
            </linearGradient>
            <linearGradient id="barGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
            </linearGradient>
            <linearGradient id="barGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.7)" />
            </linearGradient>
            <linearGradient id="barGradient5" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export const PersonalLoanHeroGraphics: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Illustration Container */}
      <div className="relative w-80 h-64">
        
        {/* School Fees Document */}
        <div className="absolute top-8 left-16 animate-float" style={{animationDelay: '0s', animationDuration: '4s'}}>
          <div className="bg-white rounded-lg shadow-lg p-3 w-20 h-16 border border-gray-200">
            <div className="text-xs font-semibold text-gray-700 mb-1">School Fees</div>
            <div className="w-full h-1 bg-gray-200 rounded mb-1"></div>
            <div className="w-3/4 h-1 bg-gray-200 rounded mb-1"></div>
            <div className="w-1/2 h-1 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Money/Cash Stack */}
        <div className="absolute top-4 right-8 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
          <div className="relative">
            <div className="w-16 h-10 bg-green-500 rounded-md shadow-lg transform rotate-3"></div>
            <div className="w-16 h-10 bg-green-400 rounded-md shadow-lg absolute top-1 left-1 transform -rotate-2"></div>
            <div className="w-16 h-10 bg-green-600 rounded-md shadow-lg absolute top-2 left-2"></div>
            <div className="absolute top-3 left-6 text-white text-xs font-bold">₹</div>
          </div>
        </div>

        {/* Laptop/Computer */}
        <div className="absolute bottom-16 left-8 animate-pulse" style={{animationDelay: '2s', animationDuration: '2s'}}>
          <div className="relative">
            <div className="w-20 h-12 bg-gray-800 rounded-t-lg"></div>
            <div className="w-24 h-2 bg-gray-600 rounded-b-lg -mt-1"></div>
            <div className="absolute top-2 left-2 w-16 h-8 bg-blue-400 rounded"></div>
            <div className="absolute top-3 left-3 w-6 h-1 bg-white rounded"></div>
            <div className="absolute top-5 left-3 w-8 h-1 bg-white rounded"></div>
          </div>
        </div>

        {/* Smartwatch */}
        <div className="absolute bottom-8 right-16 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}>
          <div className="relative">
            <div className="w-8 h-10 bg-black rounded-lg"></div>
            <div className="w-6 h-6 bg-gray-800 rounded absolute top-1 left-1"></div>
            <div className="w-8 h-1 bg-gray-600 rounded absolute -top-1 left-0"></div>
            <div className="w-8 h-1 bg-gray-600 rounded absolute -bottom-1 left-0"></div>
            {/* Watch face details */}
            <div className="absolute top-2 left-2 w-4 h-4 border border-gray-500 rounded-full">
              <div className="w-1 h-1 bg-red-500 rounded-full absolute top-1.5 left-1.5"></div>
            </div>
          </div>
        </div>

        {/* Gadget/Phone */}
        <div className="absolute top-20 right-4 animate-float" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}>
          <div className="w-8 h-14 bg-gray-900 rounded-lg shadow-lg">
            <div className="w-6 h-10 bg-blue-500 rounded mt-1 mx-auto"></div>
            <div className="w-4 h-1 bg-gray-700 rounded mt-1 mx-auto"></div>
          </div>
        </div>

        {/* Wedding Rings */}
        <div className="absolute bottom-4 left-20 animate-spin" style={{animationDelay: '2.5s', animationDuration: '8s'}}>
          <div className="relative w-8 h-8">
            <div className="w-6 h-6 border-2 border-yellow-400 rounded-full"></div>
            <div className="w-4 h-4 border-2 border-yellow-300 rounded-full absolute top-2 left-3"></div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-12 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-24 right-12 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-12 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-12 right-8 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: -1}}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
          <path 
            d="M60 40 Q120 80 200 120" 
            stroke="url(#lineGradient)" 
            strokeWidth="1" 
            fill="none" 
            strokeDasharray="4,4"
            className="animate-pulse"
          />
          <path 
            d="M240 60 Q180 100 140 160" 
            stroke="url(#lineGradient)" 
            strokeWidth="1" 
            fill="none" 
            strokeDasharray="4,4"
            className="animate-pulse"
            style={{animationDelay: '1s'}}
          />
        </svg>
      </div>
    </div>
  );
};