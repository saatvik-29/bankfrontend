import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import {
  GraduationCap,
  CheckCircle,
  Star,
  Clock,
  Shield,
  FileText,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import educationLoanImage from "../../assets/eduloan.png";

export const EducationLoan = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate("/loans/education/apply");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Green Theme */}
      <section className="pt-20 md:pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left Side */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#15803d] mb-2 leading-tight">
                  EDUCATION
                  <br />
                  LOAN
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-medium uppercase tracking-wide">
                  Invest In Your Future
                </p>
              </div>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
                Invest in your future with{" "}
                <span className="font-semibold text-[#15803d]">
                  comprehensive education loans
                </span>{" "}
                starting at 9% p.a. Get{" "}
                <span className="font-semibold text-[#15803d]">
                  up to ₹1.5 crore
                </span>{" "}
                for studies in India and abroad with flexible repayment.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-3 max-w-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#15803d] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">India & Abroad</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#15803d] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Moratorium Period
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#15803d] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">100% Financing</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#15803d] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Tax Benefits</span>
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
                  onClick={() => navigate("/emi-calculator")}
                  className="text-[#15803d] font-medium hover:text-[#166534] transition-colors flex items-center text-sm"
                >
                  Calculate EMI
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Image - Right Side, Blended */}
            <div className="hidden lg:flex justify-center items-center">
              <img
                src={educationLoanImage}
                alt="Education Loan illustration"
                className="w-full h-auto scale-110"
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
              <p className="text-3xl font-bold text-[#15803d]">9% - 14%</p>
              <p className="text-sm text-gray-600 mt-1">Interest Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#15803d]">₹1L - ₹1.5Cr</p>
              <p className="text-sm text-gray-600 mt-1">Loan Amount</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#15803d]">5 - 15 yrs</p>
              <p className="text-sm text-gray-600 mt-1">Tenure</p>
            </div>
          </div>
        </div>
      </div>

      {/* EMI Calculator Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#15803d] mb-6 text-center">
              EMI Calculator
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-green-100">
                <span className="text-gray-700">Loan Amount:</span>
                <span className="font-semibold text-gray-900">₹10,00,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-100">
                <span className="text-gray-700">Tenure:</span>
                <span className="font-semibold text-gray-900">10 years</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-100">
                <span className="text-gray-700">Interest Rate:</span>
                <span className="font-semibold text-gray-900">12.0% p.a.</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-lg font-semibold text-[#15803d]">
                  Monthly EMI:
                </span>
                <span className="text-3xl font-bold text-[#15803d]">
                  ₹14,347
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full mt-6 border-[#15803d] text-[#15803d] hover:bg-[#15803d] hover:text-white rounded-lg"
              onClick={() => navigate("/emi-calculator")}
            >
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
                <span className="text-gray-700">Covers tuition fees</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Living expenses included</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Study abroad options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Moratorium period available
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Tax benefits under Section 80E
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  No collateral (up to ₹7.5 lakhs)
                </span>
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 text-[#15803d] mr-2" />
              Benefits
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Tax benefits available</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Moratorium during course</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Competitive interest rates
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Comprehensive coverage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Flexible repayment</span>
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
                <span className="text-gray-700">Age: 18-35 years</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Admission to recognized institution
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Indian citizen or NRI</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Co-borrower required</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Academic performance record
                </span>
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
                <span className="text-gray-700">Admission letter</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Fee structure</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Academic records</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Identity proof</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  Income proof (co-borrower)
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  Property documents (if required)
                </span>
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
                <span className="font-semibold">1% - 2% of loan amount</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Processing Time:</span>
                <span className="font-semibold">5-7 business days</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Disbursement:</span>
                <span className="font-semibold">Direct to institution</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Approval Rate:</span>
                <span className="font-semibold">88%+</span>
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
              Invest in Your Future Today
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Get the education you deserve with our comprehensive loan options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleApplyNow}
                size="lg"
                variant="primary"
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                Apply Now
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
