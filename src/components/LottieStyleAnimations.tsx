import React from 'react';

export const FinancialGrowthAnimation: React.FC = () => {
  return (
    <div className="relative w-64 h-48 mx-auto">
      <svg
        viewBox="0 0 200 150"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="200" height="150" fill="url(#grid)" />
        
        {/* Animated Money Flow */}
        <g className="animate-float">
          <circle cx="30" cy="30" r="4" fill="#22c55e" opacity="0.8">
            <animate attributeName="cy" values="30;120;30" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="40" r="3" fill="#3b82f6" opacity="0.7">
            <animate attributeName="cy" values="40;110;40" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="70" cy="25" r="5" fill="#a855f7" opacity="0.9">
            <animate attributeName="cy" values="25;125;25" dur="2.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Growth Chart */}
        <g className="animate-slide-in-scale">
          {/* Chart Bars */}
          <rect x="100" y="120" width="8" height="0" fill="#3b82f6" rx="4">
            <animate attributeName="height" values="0;20;15;20" dur="2s" repeatCount="indefinite" />
            <animate attributeName="y" values="120;100;105;100" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="115" y="120" width="8" height="0" fill="#22c55e" rx="4">
            <animate attributeName="height" values="0;35;30;35" dur="2s" begin="0.2s" repeatCount="indefinite" />
            <animate attributeName="y" values="120;85;90;85" dur="2s" begin="0.2s" repeatCount="indefinite" />
          </rect>
          <rect x="130" y="120" width="8" height="0" fill="#a855f7" rx="4">
            <animate attributeName="height" values="0;50;45;50" dur="2s" begin="0.4s" repeatCount="indefinite" />
            <animate attributeName="y" values="120;70;75;70" dur="2s" begin="0.4s" repeatCount="indefinite" />
          </rect>
          <rect x="145" y="120" width="8" height="0" fill="#f59e0b" rx="4">
            <animate attributeName="height" values="0;65;60;65" dur="2s" begin="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" values="120;55;60;55" dur="2s" begin="0.6s" repeatCount="indefinite" />
          </rect>
          
          {/* Trend Line */}
          <polyline
            points="104,110 119,95 134,80 149,65"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeDasharray="4,2"
            opacity="0.8"
          >
            <animate attributeName="stroke-dashoffset" values="0;-6;0" dur="2s" repeatCount="indefinite" />
          </polyline>
        </g>
        
        {/* Floating Currency Symbols */}
        <g className="animate-bounce-in">
          <text x="170" y="40" fill="#22c55e" fontSize="16" fontWeight="bold" className="animate-pulse">₹</text>
          <text x="180" y="60" fill="#3b82f6" fontSize="14" fontWeight="bold" className="animate-pulse" style={{animationDelay: '0.5s'}}>$</text>
          <text x="160" y="80" fill="#a855f7" fontSize="12" fontWeight="bold" className="animate-pulse" style={{animationDelay: '1s'}}>€</text>
        </g>
        
        {/* Success Indicator */}
        <g className="animate-bounce" style={{animationDelay: '1s'}}>
          <circle cx="170" cy="100" r="12" fill="#22c55e" opacity="0.2" />
          <path d="M165 100 L169 104 L175 96" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

export const LoanProcessAnimation: React.FC = () => {
  return (
    <div className="relative w-56 h-40 mx-auto">
      <svg
        viewBox="0 0 180 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Document Animation */}
        <g className="animate-slide-in-scale">
          <rect x="20" y="30" width="40" height="50" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" rx="4" opacity="0.9" />
          <line x1="25" y1="40" x2="55" y2="40" stroke="#64748b" strokeWidth="1" opacity="0.6" />
          <line x1="25" y1="45" x2="50" y2="45" stroke="#64748b" strokeWidth="1" opacity="0.6" />
          <line x1="25" y1="50" x2="55" y2="50" stroke="#64748b" strokeWidth="1" opacity="0.6" />
          
          {/* Checkmark Animation */}
          <circle cx="50" cy="65" r="8" fill="#22c55e" opacity="0">
            <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
          </circle>
          <path d="M46 65 L49 68 L54 62" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0">
            <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
          </path>
        </g>
        
        {/* Arrow Flow */}
        <g className="animate-glow-move">
          <path d="M70 55 L90 55" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M85 50 L90 55 L85 60" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
        
        {/* Bank Building */}
        <g className="animate-bounce-in" style={{animationDelay: '0.5s'}}>
          <rect x="100" y="40" width="50" height="40" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" rx="2" />
          <rect x="105" y="45" width="8" height="12" fill="#3b82f6" opacity="0.3" />
          <rect x="118" y="45" width="8" height="12" fill="#3b82f6" opacity="0.3" />
          <rect x="131" y="45" width="8" height="12" fill="#3b82f6" opacity="0.3" />
          <rect x="105" y="62" width="8" height="12" fill="#3b82f6" opacity="0.3" />
          <rect x="118" y="62" width="8" height="12" fill="#3b82f6" opacity="0.3" />
          <rect x="131" y="62" width="8" height="12" fill="#3b82f6" opacity="0.3" />
          
          {/* Bank Sign */}
          <text x="125" y="35" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold">BANK</text>
        </g>
        
        {/* Money Flow */}
        <g className="animate-liquid-move">
          <circle cx="160" cy="55" r="3" fill="#22c55e" opacity="0.8" />
          <circle cx="165" cy="60" r="2" fill="#22c55e" opacity="0.6" />
          <circle cx="170" cy="50" r="2.5" fill="#22c55e" opacity="0.7" />
        </g>
        
        {/* Success Celebration */}
        <g className="animate-bounce" style={{animationDelay: '2s'}}>
          <circle cx="160" cy="90" r="15" fill="#22c55e" opacity="0.2" />
          <text x="160" y="95" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">✓</text>
        </g>
      </svg>
    </div>
  );
};

export const InteractiveCalculatorAnimation: React.FC = () => {
  return (
    <div className="relative w-60 h-44 mx-auto">
      <svg
        viewBox="0 0 200 140"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Calculator Body */}
        <g className="animate-card-float">
          <rect x="50" y="20" width="100" height="100" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" rx="8" />
          
          {/* Screen */}
          <rect x="60" y="30" width="80" height="25" fill="#1e293b" rx="4" />
          <text x="100" y="47" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">₹50,000</text>
          
          {/* Animated Numbers */}
          <text x="100" y="47" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold" opacity="0">
            <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
            ₹75,000
          </text>
          
          {/* Calculator Buttons */}
          <g fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1">
            <rect x="65" y="65" width="12" height="8" rx="2" />
            <rect x="82" y="65" width="12" height="8" rx="2" />
            <rect x="99" y="65" width="12" height="8" rx="2" />
            <rect x="116" y="65" width="12" height="8" rx="2" />
            
            <rect x="65" y="78" width="12" height="8" rx="2" />
            <rect x="82" y="78" width="12" height="8" rx="2" />
            <rect x="99" y="78" width="12" height="8" rx="2" />
            <rect x="116" y="78" width="12" height="8" rx="2" />
            
            <rect x="65" y="91" width="12" height="8" rx="2" />
            <rect x="82" y="91" width="12" height="8" rx="2" />
            <rect x="99" y="91" width="12" height="8" rx="2" />
            <rect x="116" y="91" width="12" height="8" rx="2" />
          </g>
          
          {/* Button Press Animation */}
          <rect x="99" y="65" width="12" height="8" rx="2" fill="#3b82f6" opacity="0">
            <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite" />
          </rect>
        </g>
        
        {/* Floating Results */}
        <g className="animate-bounce-gentle">
          <circle cx="30" cy="50" r="8" fill="#22c55e" opacity="0.8" />
          <text x="30" y="54" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">EMI</text>
          
          <circle cx="170" cy="70" r="8" fill="#a855f7" opacity="0.8" />
          <text x="170" y="74" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">ROI</text>
        </g>
        
        {/* Data Flow Lines */}
        <g className="animate-glow-move">
          <path d="M40 50 Q75 35 100 42" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="4,2" opacity="0.6" />
          <path d="M150 42 Q165 55 170 70" stroke="#a855f7" strokeWidth="2" fill="none" strokeDasharray="4,2" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};

export const LoanCardAnimation: React.FC<{ type: 'personal' | 'home' | 'business' }> = ({ type }) => {
  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {type === 'personal' && (
          <g>
            {/* Personal Loan - Money and Cards */}
            <circle cx="60" cy="60" r="50" fill="rgba(34, 197, 94, 0.1)" className="animate-pulse" />
            
            {/* Credit Cards */}
            <rect x="35" y="45" width="25" height="15" rx="3" fill="#3b82f6" className="animate-float" style={{animationDelay: '0s'}}>
              <animate attributeName="y" values="45;40;45" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="40" y="50" width="25" height="15" rx="3" fill="#22c55e" className="animate-float" style={{animationDelay: '0.5s'}}>
              <animate attributeName="y" values="50;45;50" dur="3s" repeatCount="indefinite" />
            </rect>
            
            {/* Money Symbol */}
            <text x="75" y="45" fill="#059669" fontSize="20" fontWeight="bold" className="animate-bounce">₹</text>
            
            {/* Floating Coins */}
            <circle cx="30" cy="30" r="4" fill="#fbbf24" className="animate-ping" style={{animationDelay: '0s'}} />
            <circle cx="90" cy="35" r="3" fill="#fbbf24" className="animate-ping" style={{animationDelay: '1s'}} />
            <circle cx="85" cy="85" r="3.5" fill="#fbbf24" className="animate-ping" style={{animationDelay: '2s'}} />
          </g>
        )}
        
        {type === 'home' && (
          <g>
            {/* Home Loan - House and Keys */}
            <circle cx="60" cy="60" r="50" fill="rgba(59, 130, 246, 0.1)" className="animate-pulse" />
            
            {/* House */}
            <rect x="45" y="55" width="30" height="25" fill="#3b82f6" className="animate-float">
              <animate attributeName="y" values="55;50;55" dur="4s" repeatCount="indefinite" />
            </rect>
            <polygon points="45,55 60,40 75,55" fill="#1e40af" className="animate-float">
              <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="4s" repeatCount="indefinite" />
            </polygon>
            
            {/* Door */}
            <rect x="55" y="65" width="8" height="15" fill="#1e40af" />
            <circle cx="61" cy="72" r="1" fill="#fbbf24" />
            
            {/* Key */}
            <g className="animate-spin" style={{animationDuration: '8s', transformOrigin: '85px 35px'}}>
              <rect x="82" y="33" width="6" height="2" fill="#fbbf24" />
              <circle cx="85" cy="34" r="3" fill="none" stroke="#fbbf24" strokeWidth="1" />
            </g>
            
            {/* Floating Elements */}
            <circle cx="25" cy="40" r="2" fill="#3b82f6" className="animate-ping" style={{animationDelay: '0s'}} />
            <circle cx="95" cy="80" r="2.5" fill="#3b82f6" className="animate-ping" style={{animationDelay: '1.5s'}} />
          </g>
        )}
        
        {type === 'business' && (
          <g>
            {/* Business Loan - Growth Chart and Briefcase */}
            <circle cx="60" cy="60" r="50" fill="rgba(245, 158, 11, 0.1)" className="animate-pulse" />
            
            {/* Briefcase */}
            <rect x="45" y="50" width="30" height="20" rx="3" fill="#f59e0b" className="animate-float">
              <animate attributeName="y" values="50;45;50" dur="3.5s" repeatCount="indefinite" />
            </rect>
            <rect x="57" y="47" width="6" height="3" fill="#d97706" />
            
            {/* Growth Chart Bars */}
            <rect x="25" y="70" width="4" height="0" fill="#22c55e">
              <animate attributeName="height" values="0;15;10;15" dur="2s" repeatCount="indefinite" />
              <animate attributeName="y" values="70;55;60;55" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="32" y="70" width="4" height="0" fill="#22c55e">
              <animate attributeName="height" values="0;20;15;20" dur="2s" begin="0.2s" repeatCount="indefinite" />
              <animate attributeName="y" values="70;50;55;50" dur="2s" begin="0.2s" repeatCount="indefinite" />
            </rect>
            <rect x="39" y="70" width="4" height="0" fill="#22c55e">
              <animate attributeName="height" values="0;25;20;25" dur="2s" begin="0.4s" repeatCount="indefinite" />
              <animate attributeName="y" values="70;45;50;45" dur="2s" begin="0.4s" repeatCount="indefinite" />
            </rect>
            
            {/* Trend Arrow */}
            <path d="M80 65 L90 55 L85 60 L90 55 L85 50" stroke="#22c55e" strokeWidth="2" fill="none" className="animate-bounce" style={{animationDelay: '1s'}} />
            
            {/* Currency Signs */}
            <text x="85" y="40" fill="#22c55e" fontSize="12" fontWeight="bold" className="animate-ping" style={{animationDelay: '0s'}}>₹</text>
            <text x="20" y="45" fill="#22c55e" fontSize="10" fontWeight="bold" className="animate-ping" style={{animationDelay: '1s'}}>₹</text>
          </g>
        )}
      </svg>
    </div>
  );
};

export const CalculatorSideAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle cx="100" cy="100" r="90" fill="rgba(59, 130, 246, 0.05)" className="animate-pulse" />
        
        {/* Calculator */}
        <g className="animate-float">
          <rect x="70" y="40" width="60" height="80" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" rx="8" />
          
          {/* Screen */}
          <rect x="75" y="50" width="50" height="20" fill="#1e293b" rx="4" />
          <text x="100" y="63" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">₹25,000</text>
          
          {/* Animated Numbers */}
          <text x="100" y="63" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold" opacity="0">
            <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
            ₹50,000
          </text>
          
          {/* Calculator Buttons */}
          <g fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.5">
            <rect x="78" y="78" width="8" height="6" rx="1" />
            <rect x="90" y="78" width="8" height="6" rx="1" />
            <rect x="102" y="78" width="8" height="6" rx="1" />
            <rect x="114" y="78" width="8" height="6" rx="1" />
            
            <rect x="78" y="88" width="8" height="6" rx="1" />
            <rect x="90" y="88" width="8" height="6" rx="1" />
            <rect x="102" y="88" width="8" height="6" rx="1" />
            <rect x="114" y="88" width="8" height="6" rx="1" />
            
            <rect x="78" y="98" width="8" height="6" rx="1" />
            <rect x="90" y="98" width="8" height="6" rx="1" />
            <rect x="102" y="98" width="8" height="6" rx="1" />
            <rect x="114" y="98" width="8" height="6" rx="1" />
          </g>
          
          {/* Button Press Animation */}
          <rect x="102" y="78" width="8" height="6" rx="1" fill="#3b82f6" opacity="0">
            <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite" />
          </rect>
        </g>
        
        {/* Floating Money Icons */}
        <g className="animate-bounce-gentle">
          <circle cx="40" cy="60" r="8" fill="#22c55e" opacity="0.8" />
          <text x="40" y="64" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">₹</text>
          
          <circle cx="160" cy="80" r="6" fill="#f59e0b" opacity="0.8" />
          <text x="160" y="83" textAnchor="middle" fill="#ffffff" fontSize="6" fontWeight="bold">₹</text>
          
          <circle cx="50" cy="140" r="7" fill="#a855f7" opacity="0.8" />
          <text x="50" y="144" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">₹</text>
        </g>
        
        {/* Data Flow Lines */}
        <g className="animate-glow-move">
          <path d="M50 70 Q85 50 120 65" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeDasharray="3,2" opacity="0.6" />
          <path d="M130 65 Q155 85 160 120" stroke="#22c55e" strokeWidth="1.5" fill="none" strokeDasharray="3,2" opacity="0.6" />
        </g>
        
        {/* Percentage Symbol */}
        <g className="animate-spin" style={{animationDuration: '12s', transformOrigin: '150px 140px'}}>
          <text x="150" y="145" fill="#3b82f6" fontSize="16" fontWeight="bold" opacity="0.7">%</text>
        </g>
        
        {/* Success Checkmark */}
        <g className="animate-bounce" style={{animationDelay: '2s'}}>
          <circle cx="40" cy="160" r="12" fill="#22c55e" opacity="0.2" />
          <path d="M35 160 L39 164 L45 156" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};