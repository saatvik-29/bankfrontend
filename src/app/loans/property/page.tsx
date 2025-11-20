'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { 
  Building, 
  CheckCircle,
  Star,
  Clock,
  Shield,
  FileText,
  ArrowRight,
  Home
} from 'lucide-react';
import Image from 'next/image';
import propertyLoanImage from '@/assets/loanagainstprop.png';

export default function PropertyLoanPage() {
  const router = useRouter();

  const handleApplyNow = () => {
    router.push('/loans/property/apply');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Image extends to edge */}
      <section className="bg-white relative overflow-hidden">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Content - Left Side with Padding */}
          <div className="py-20 px-4 sm:px-6 lg:px-12 xl:px-20 space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#235a56] mb-3 leading-none">
                LOAN AGAINST PROPERTY
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light uppercase tracking-[0.3em]">
                Unlock Your Property Value
              </p>
            </div>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
              Unlock the value of your property with <span className="font-semibold text-[#235a56]">high loan amounts</span> starting at 10.5% p.a. 
              Get <span className="font-semibold text-[#235a56]">up to ₹1 crore</span> with flexible repayment options and competitive rates.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-[#235a56] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">High Loan Amount</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-[#235a56] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Competitive Rates</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-[#235a56] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Long Tenure</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-[#235a56] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Flexible Usage</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 pt-2">
              <Button 
                onClick={handleApplyNow} 
                size="lg" 
                className="bg-[#235a56] text-white hover:bg-[#1e4a46] font-semibold shadow-xl hover:shadow-2xl rounded-full px-10 py-4 text-base transition-all duration-300 hover:scale-105"
              >
                Apply Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <button 
                onClick={() => router.push('/emi-calculator')}
                className="text-[#235a56] font-semibold hover:text-[#1e4a46] transition-colors flex items-center"
              >
                Calculate EMI
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Image - Right Side, Edge to Edge */}
          <div className="hidden lg:block relative h-full min-h-[600px]">
            <Image
              src={propertyLoanImage}
              alt="Loan Against Property illustration"
              className="w-full h-full object-contain"
              fill
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-white py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 max-w-3xl">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#235a56]">10.5% - 16%</p>
              <p className="text-sm text-gray-600 mt-1">Interest Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#235a56]">₹10L - ₹1Cr</p>
              <p className="text-sm text-gray-600 mt-1">Loan Amount</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#235a56]">5 - 20 yrs</p>
              <p className="text-sm text-gray-600 mt-1">Tenure</p>
            </div>
          </div>
        </div>
      </div>

      {/* EMI Calculator Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border border-teal-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#235a56] mb-6 text-center">EMI Calculator</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-teal-100">
                <span className="text-gray-700">Loan Amount:</span>
                <span className="font-semibold text-gray-900">₹50,00,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-teal-100">
                <span className="text-gray-700">Tenure:</span>
                <span className="font-semibold text-gray-900">15 years</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-teal-100">
                <span className="text-gray-700">Interest Rate:</span>
                <span className="font-semibold text-gray-900">12.5% p.a.</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-lg font-semibold text-[#235a56]">Monthly EMI:</span>
                <span className="text-3xl font-bold text-[#235a56]">₹60,059</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-6 border-[#235a56] text-[#235a56] hover:bg-[#235a56] hover:text-white rounded-lg" onClick={() => router.push('/emi-calculator')}>
              Calculate Your EMI
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Key Features */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              Key Features
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#235a56] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">High loan-to-value ratio</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#235a56] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Flexible end-use options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#235a56] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Long repayment tenure</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#235a56] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Competitive interest rates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#235a56] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Quick processing</span>
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 text-blue-500 mr-2" />
              Benefits
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Continue using your property</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Tax benefits available</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">No end-use restrictions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Lower interest rates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Higher loan amounts</span>
              </li>
            </ul>
          </div>

          {/* Eligibility */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              Eligibility
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Age: 25-70 years</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Property ownership required</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Stable income source</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">CIBIL score: 650+</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Clear property title</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Documents & Processing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Required Documents */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="w-6 h-6 text-purple-500 mr-2" />
              Required Documents
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Property documents</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Identity & address proof</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Income proof</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Bank statements</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Property valuation report</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">NOC from society</span>
              </li>
            </ul>
          </div>

          {/* Processing Details */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="w-6 h-6 text-orange-500 mr-2" />
              Processing Details
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Processing Fee:</span>
                <span className="font-semibold">0.5% - 1% of loan amount</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Processing Time:</span>
                <span className="font-semibold">7-15 days</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">LTV Ratio:</span>
                <span className="font-semibold">Up to 70%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Approval Rate:</span>
                <span className="font-semibold">90%+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#235a56] to-[#1e4a46]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Unlock Your Property's Value?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Get high loan amounts with competitive rates and flexible terms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleApplyNow} size="lg" className="bg-white text-[#235a56] hover:bg-teal-50">
                Apply Now
              </Button>
              <Button onClick={() => router.push('/contact')} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#235a56]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}