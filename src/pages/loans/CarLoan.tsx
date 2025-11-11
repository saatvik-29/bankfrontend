import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { 
  Car, 
  CheckCircle,
  Star,
  Clock,
  Shield,
  FileText,
  ArrowRight,
  Zap
} from 'lucide-react';
import carLoanImage from '../../assets/carloan.png';

export const CarLoan = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/loans/car/apply');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Brown Theme */}
      <section className="bg-white pt-20 md:pt-24 pb-16 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side with Padding */}
          <div className="px-4 sm:px-6 lg:px-12 xl:px-20 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#7c2d12] mb-2 leading-tight">
                CAR LOAN
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-medium uppercase tracking-wide">
                Drive Your Dream
              </p>
            </div>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
              Drive your dream car with <span className="font-semibold text-[#7c2d12]">easy EMI options</span> starting at 8% p.a. 
              Get <span className="font-semibold text-[#7c2d12]">up to 90% financing</span> on both new and used cars with quick approval.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-3 max-w-lg">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-[#7c2d12] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Instant Approval</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-[#7c2d12] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Up to 90% Financing</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-[#7c2d12] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">New & Used Cars</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-[#7c2d12] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Flexible Tenure</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button 
                onClick={handleApplyNow} 
                className="bg-[#7c2d12] text-white hover:bg-[#92400e] font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200"
              >
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <button 
                onClick={() => navigate('/emi-calculator')}
                className="text-[#7c2d12] font-medium hover:text-[#92400e] transition-colors flex items-center text-sm"
              >
                Calculate EMI
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Image - Right Side, Edge to Edge */}
          <div className="hidden lg:block h-full">
            <img
              src={carLoanImage}
              alt="Car Loan illustration"
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
              <p className="text-3xl font-bold text-[#7c2d12]">8% - 15%</p>
              <p className="text-sm text-gray-600 mt-1">Interest Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#7c2d12]">₹1L - ₹50L</p>
              <p className="text-sm text-gray-600 mt-1">Loan Amount</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#7c2d12]">1 - 7 yrs</p>
              <p className="text-sm text-gray-600 mt-1">Tenure</p>
            </div>
          </div>
        </div>
      </div>

      {/* EMI Calculator Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 border border-amber-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#7c2d12] mb-6 text-center">EMI Calculator</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <span className="text-gray-700">Loan Amount:</span>
                <span className="font-semibold text-gray-900">₹8,00,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <span className="text-gray-700">Tenure:</span>
                <span className="font-semibold text-gray-900">5 years</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <span className="text-gray-700">Interest Rate:</span>
                <span className="font-semibold text-gray-900">11.0% p.a.</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-lg font-semibold text-[#7c2d12]">Monthly EMI:</span>
                <span className="text-3xl font-bold text-[#7c2d12]">₹17,389</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-6 border-[#7c2d12] text-[#7c2d12] hover:bg-[#7c2d12] hover:text-white rounded-lg" onClick={() => navigate('/emi-calculator')}>
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
                <span className="text-gray-700">Competitive interest rates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Quick approval process</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Flexible tenure options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Both new and used cars</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Online application</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Pre-approved offers</span>
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
                <span className="text-gray-700">Lower interest rates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Flexible down payment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Quick processing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">No hidden charges</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Expert guidance</span>
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
                <span className="text-gray-700">Age: 21-65 years</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Minimum income: ₹20,000/month</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">CIBIL score: 650+</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Valid driving license</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Down payment: 10-20%</span>
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
                <span className="text-gray-700">Income proof</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Driving license</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Car quotation/invoice</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Bank statements</span>
              </li>
            </ul>
          </div>

          {/* Processing Details */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="w-6 h-6 text-[#7c2d12] mr-2" />
              Processing Details
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Processing Fee:</span>
                <span className="font-semibold">1% - 2% of loan amount</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Processing Time:</span>
                <span className="font-semibold">24-48 hours</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Disbursement:</span>
                <span className="font-semibold">Quick disbursement</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Approval Rate:</span>
                <span className="font-semibold">92%+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#7c2d12] to-[#92400e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Drive Your Dream Car?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Get the best car loan rates and drive away today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleApplyNow} size="lg" className="bg-white text-[#7c2d12] hover:bg-amber-50">
                Apply Now
              </Button>
              <Button onClick={() => navigate('/contact')} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#7c2d12]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};