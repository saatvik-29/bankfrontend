'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { 
  User, 
  CheckCircle,
  Star,
  Clock,
  Shield,
  FileText,
  ArrowRight,
  Wallet
} from 'lucide-react';
import Image from 'next/image';
import personalLoanImage from '@/assets/personalloan.png';

export default function PersonalLoanPage() {
  const router = useRouter();

  const handleApplyNow = () => {
    router.push('/loans/personal/apply');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Green Theme */}
      <section className="bg-white pt-20 md:pt-24 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left Side */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#15803d] mb-2 leading-tight">
                  PERSONAL
                  <br />
                  LOAN
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-medium uppercase tracking-wide">
                  Quick & Easy Approval
                </p>
              </div>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
                Get personal loans up to <span className="font-semibold text-[#15803d]">₹25 lakhs</span> with competitive interest rates starting from 8.5% p.a. 
                <span className="font-semibold text-[#15803d]"> Minimal documentation</span> and quick approval in 24 hours.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-3 max-w-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#15803d] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">24 Hour Approval</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#15803d] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">No Collateral</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#15803d] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Minimal Documents</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#15803d] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Flexible Tenure</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button 
                  onClick={handleApplyNow} 
                  className="bg-[#15803d] text-white hover:bg-[#166534] font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200"
                >
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <button 
                  onClick={() => router.push('/emi-calculator')}
                  className="text-[#15803d] font-medium hover:text-[#166534] transition-colors flex items-center text-sm"
                >
                  Calculate EMI
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Image - Right Side, Blended */}
            <div className="hidden lg:flex justify-center items-center">
              <Image
                src={personalLoanImage}
                alt="Personal Loan illustration"
                className="w-full h-auto scale-150"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-white py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 max-w-3xl">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#15803d]">8.5% - 18%</p>
              <p className="text-sm text-gray-600 mt-1">Interest Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#15803d]">₹1L - ₹25L</p>
              <p className="text-sm text-gray-600 mt-1">Loan Amount</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#15803d]">1 - 5 yrs</p>
              <p className="text-sm text-gray-600 mt-1">Tenure</p>
            </div>
          </div>
        </div>
      </div>

      {/* EMI Calculator Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#15803d] mb-6 text-center">EMI Calculator</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-green-100">
                <span className="text-gray-700">Loan Amount:</span>
                <span className="font-semibold text-gray-900">₹5,00,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-100">
                <span className="text-gray-700">Tenure:</span>
                <span className="font-semibold text-gray-900">3 years</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-100">
                <span className="text-gray-700">Interest Rate:</span>
                <span className="font-semibold text-gray-900">12.0% p.a.</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-lg font-semibold text-[#15803d]">Monthly EMI:</span>
                <span className="text-3xl font-bold text-[#15803d]">₹16,607</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-6 border-[#15803d] text-[#15803d] hover:bg-[#15803d] hover:text-white rounded-lg" onClick={() => router.push('/emi-calculator')}>
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
                <CheckCircle className="w-5 h-5 text-[#15803d] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Quick approval in 24 hours</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#15803d] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Minimal documentation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#15803d] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">No collateral required</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#15803d] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Flexible repayment options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#15803d] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Online application available</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#15803d] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Instant loan disbursement</span>
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
                <span className="text-gray-700">No security required</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Competitive interest rates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Flexible tenure options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Quick processing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Transparent pricing</span>
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
                <span className="text-gray-700">Age: 21-60 years</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Minimum income: ₹15,000/month</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">CIBIL score: 650+</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Stable employment (6+ months)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Valid bank account</span>
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
                <span className="text-gray-700">Identity proof (Aadhaar/PAN)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Address proof</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Income proof (Salary slips)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Bank statements (3 months)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Employment certificate</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Photographs</span>
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
                <span className="font-semibold">2% - 4% of loan amount</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Processing Time:</span>
                <span className="font-semibold">24 hours</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Disbursement:</span>
                <span className="font-semibold">Instant disbursement</span>
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
      <div className="bg-gradient-to-r from-[#15803d] to-[#166534]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Apply for Personal Loan?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get instant approval for your personal loan needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleApplyNow} size="lg" className="bg-white text-[#15803d] hover:bg-green-50">
                Apply Now
              </Button>
              <Button onClick={() => router.push('/contact')} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#15803d]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}