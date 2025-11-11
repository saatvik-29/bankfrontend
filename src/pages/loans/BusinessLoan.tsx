import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
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
import businessLoanImage from '../../assets/buisnessloan.png';

export const BusinessLoan = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/loans/business/apply');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Image extends to edge */}
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
                <span className="text-sm text-gray-700">No Collateral Required</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Flexible Repayment</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Working Capital Support</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 pt-2">
              <Button 
                onClick={handleApplyNow} 
                size="lg" 
                className="bg-purple-600 text-white hover:bg-purple-700 font-semibold shadow-xl hover:shadow-2xl rounded-full px-10 py-4 text-base transition-all duration-300 hover:scale-105"
              >
                Apply Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <button 
                onClick={() => navigate('/emi-calculator')}
                className="text-purple-600 font-semibold hover:text-purple-800 transition-colors flex items-center"
              >
                Calculate EMI
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Image - Right Side, Edge to Edge */}
          <div className="hidden lg:block h-full">
            <img
              src={businessLoanImage}
              alt="Business Loan illustration"
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-white py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 max-w-3xl">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-900">12% - 20%</p>
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

      {/* EMI Calculator Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center">EMI Calculator</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-purple-100">
                <span className="text-gray-700">Loan Amount:</span>
                <span className="font-semibold text-gray-900">₹20,00,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-purple-100">
                <span className="text-gray-700">Tenure:</span>
                <span className="font-semibold text-gray-900">3 years</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-purple-100">
                <span className="text-gray-700">Interest Rate:</span>
                <span className="font-semibold text-gray-900">16.0% p.a.</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-lg font-semibold text-purple-700">Monthly EMI:</span>
                <span className="text-3xl font-bold text-purple-900">₹70,334</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-6 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full" onClick={() => navigate('/emi-calculator')}>
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
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Working capital support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Business expansion funding</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Equipment financing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Seasonal credit facilities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Quick approval process</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Flexible repayment</span>
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
                <span className="text-gray-700">No collateral required (up to ₹50 lakhs)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Competitive interest rates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Flexible repayment tenure</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Quick disbursement</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Expert business guidance</span>
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
                <span className="text-gray-700">Annual turnover: ₹10 lakhs+</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">CIBIL score: 650+</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Valid business registration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Bank statements (12 months)</span>
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
                <span className="text-gray-700">Business registration certificate</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">GST registration</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Bank statements (12 months)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">ITR returns (2 years)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Business plan</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Identity proof of directors</span>
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
                <span className="font-semibold">1% - 3% of loan amount</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Processing Time:</span>
                <span className="font-semibold">3-5 business days</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Disbursement:</span>
                <span className="font-semibold">Quick disbursement</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Approval Rate:</span>
                <span className="font-semibold">85%+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get the funding you need to take your business to the next level
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleApplyNow} size="lg" variant="primary" className="bg-white text-purple-600 hover:bg-gray-100">
                Apply Now
              </Button>
              <Button onClick={() => navigate('/contact')} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};