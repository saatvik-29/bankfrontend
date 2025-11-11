import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatingElements, PersonalLoanHeroGraphics } from './AnimatedGraphics';

export const PersonalLoanHero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 py-16 overflow-hidden">
      {/* Background Floating Elements */}
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Instant Personal Loan
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mt-4 leading-relaxed">
                From dream weddings to gadgets and school fees, 
                our personal loan is your go-to for immediate 
                financial needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/loans/personal/apply')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
              >
                Apply Loan Now
              </button>
              <button 
                onClick={() => navigate('/emi-calculator')}
                className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Calculate EMI
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">7.35%</div>
                <div className="text-sm text-gray-600">Starting Interest Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">₹50L</div>
                <div className="text-sm text-gray-600">Maximum Amount</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">5 Years</div>
                <div className="text-sm text-gray-600">Maximum Tenure</div>
              </div>
            </div>
          </div>
          
          {/* Right Graphics */}
          <div className="relative">
            <PersonalLoanHeroGraphics />
          </div>
          
        </div>
      </div>
    </div>
  );
};