'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { 
  Briefcase, 
  CheckCircle,
  Star,
  Clock,
  Shield,
  FileText,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';
import businessLoanImage from '@/assets/buisnessloan.png';

export default function BusinessLoanPage() {
  const router = useRouter();

  const handleApplyNow = () => {
    router.push('/loans/business/apply');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white relative overflow-hidden">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Content - Left Side with Padding */}
          <div className="py-20 px-4 sm:px-6 lg:px-12 xl:px-20 space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-purple-900 mb-3 leading-none">
                BUSINESS LOAN
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light uppercase tracking-[0.3em]">
                Fuel Your Growth
              </p>
            </div>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
              Scale your business with <span className="font-semibold text-purple-900">flexible funding solutions</span> starting at 12% p.a. 
              Get <span className="font-semibold text-purple-900">collateral-free loans up to ₹50 lakhs</span> with quick approval and minimal paperwork.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Approval in 3-5 Days</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Up to ₹50 Lakhs</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Minimal Documentation</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Flexible Repayment</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button 
                onClick={handleApplyNow} 
                className="bg-purple-700 text-white hover:bg-purple-800 font-semibold px-8 py-4 rounded-lg text-base transition-all duration-200"
              >
                Apply Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <button 
                onClick={() => router.push('/emi-calculator')}
                className="text-purple-700 font-medium hover:text-purple-900 transition-colors flex items-center text-base"
              >
                Calculate EMI
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>

          {/* Image - Right Side, Full Height */}
          <div className="hidden lg:block relative h-full min-h-[600px]">
            <Image
              src={businessLoanImage}
              alt="Business Loan illustration"
              className="w-full h-full object-cover"
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
              <p className="text-3xl font-bold text-purple-900">12% - 24%</p>
              <p className="text-sm text-gray-600 mt-1">Interest Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-900">₹1L - ₹50L</p>
              <p className="text-sm text-gray-600 mt-1">Loan Amount</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-900">1 - 5 yrs</p>
              <p className="text-sm text-gray-600 mt-1">Tenure</p>
            </div>
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
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Quick approval process</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Collateral-free options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Flexible repayment terms</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Working capital solutions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Equipment financing</span>
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
                <span className="text-gray-700">Competitive interest rates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Tax benefits available</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">No prepayment penalties</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Expert business guidance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Multiple funding options</span>
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
                <span className="text-gray-700">Business vintage: 2+ years</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Annual turnover: ₹10L+</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">CIBIL score: 650+</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Profitable business</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Valid business registration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get the funding you need to take your business to the next level
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleApplyNow} size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                Apply Now
              </Button>
              <Button onClick={() => router.push('/contact')} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}