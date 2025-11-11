import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import {
  Home,
  CheckCircle,
  Star,
  Clock,
  Shield,
  FileText,
  ArrowRight,
} from "lucide-react";
import homeLoanImage from "../../assets/homeloan.png";

export const HomeLoan = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate("/loans/home/apply");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Purple Blob Theme (More Convincing) */}
      <section className="bg-white pt-20 md:pt-24 pb-16 relative overflow-hidden min-h-[500px]">
        {/* Large organic purple blob shape on right side - Multiple layers for depth */}
        <div className="absolute top-0 right-0 w-3/5 h-full hidden lg:block">
          <svg
            viewBox="0 0 1000 800"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Main large blob */}
            <path
              d="M 250 -50 Q 150 100 180 250 Q 210 400 280 520 Q 380 640 520 680 Q 680 720 820 650 Q 960 580 1000 400 L 1000 -50 Z"
              fill="#e9d5ff"
              opacity="0.7"
            />
            {/* Secondary blob for depth */}
            <ellipse
              cx="700"
              cy="250"
              rx="320"
              ry="350"
              fill="#ddd6fe"
              opacity="0.6"
            />
            {/* Accent blob */}
            <ellipse
              cx="600"
              cy="450"
              rx="280"
              ry="260"
              fill="#f3e8ff"
              opacity="0.8"
            />
            {/* Small accent blob */}
            <circle cx="800" cy="150" r="120" fill="#fae8ff" opacity="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-900 mb-2 leading-tight">
                  HOME LOAN
                </h1>
                <p className="text-lg md:text-xl text-gray-500 font-medium uppercase tracking-wide">
                  Make Your Dream Come True
                </p>
              </div>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
                Turn your dream home into reality with{" "}
                <span className="font-semibold text-purple-900">
                  India's lowest interest rates
                </span>{" "}
                starting at just 8.5% p.a. Get instant approval with{" "}
                <span className="font-semibold text-purple-900">
                  zero hidden charges
                </span>{" "}
                and flexible repayment options.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-3 max-w-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Instant Approval in 24 Hours
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Up to 90% Loan Amount
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Minimal Documentation
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Tax Benefits up to ₹3.5L
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button
                  onClick={handleApplyNow}
                  className="bg-purple-700 text-white hover:bg-purple-800 font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200"
                >
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <button
                  onClick={() => navigate("/emi-calculator")}
                  className="text-purple-700 font-medium hover:text-purple-900 transition-colors flex items-center text-sm"
                >
                  Calculate EMI
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Image with blob background */}
            <div className="hidden lg:block relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img
                  src={homeLoanImage}
                  alt="Home Loan illustration"
                  className="w-full max-w-2xl mx-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-white py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 max-w-3xl">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-900">8.5% - 12%</p>
              <p className="text-sm text-gray-600 mt-1">Interest Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-900">₹5L - ₹1Cr</p>
              <p className="text-sm text-gray-600 mt-1">Loan Amount</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-900">5 - 30 yrs</p>
              <p className="text-sm text-gray-600 mt-1">Tenure</p>
            </div>
          </div>
        </div>
      </div>

      {/* EMI Calculator Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center">
              EMI Calculator
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-purple-100">
                <span className="text-gray-700">Loan Amount:</span>
                <span className="font-semibold text-gray-900">₹50,00,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-purple-100">
                <span className="text-gray-700">Tenure:</span>
                <span className="font-semibold text-gray-900">20 years</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-purple-100">
                <span className="text-gray-700">Interest Rate:</span>
                <span className="font-semibold text-gray-900">9.5% p.a.</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-lg font-semibold text-purple-700">
                  Monthly EMI:
                </span>
                <span className="text-3xl font-bold text-purple-900">
                  ₹46,579
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full mt-6 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white rounded-full"
              onClick={() => navigate("/emi-calculator")}
            >
              Calculate Your EMI
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Key Features */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-200 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
              <Star className="w-6 h-6 text-purple-600 mr-2" />
              Key Features
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Competitive interest rates
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Flexible repayment tenure</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Pre-approved loans available
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Balance transfer facility</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Top-up loans available</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Online application process
                </span>
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-200 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 text-purple-600 mr-2" />
              Benefits
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Tax benefits under Section 24 and 80C
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  No prepayment charges after 1 year
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Quick loan processing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Expert guidance throughout
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Transparent fee structure</span>
              </li>
            </ul>
          </div>

          {/* Eligibility */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-200 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-purple-600 mr-2" />
              Eligibility
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Age: 21-65 years</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Minimum income: ₹25,000/month
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">CIBIL score: 650+</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Stable employment history</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Valid property documents</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Documents & Processing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
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
                <span className="text-gray-700">
                  Identity proof (Aadhaar/PAN)
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Address proof</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  Income proof (Salary slips/Bank statements)
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Property documents</span>
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
                <span className="font-semibold">0.5% - 1% of loan amount</span>
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
                <span className="font-semibold">95%+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blob Separator 4 */}
      <div className="relative bg-white">
        <svg
          className="w-full h-24 md:h-32"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,42.7C672,32,768,32,864,42.7C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#7c3aed"
          />
        </svg>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-violet-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Apply for Home Loan?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get started with our simple online application process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleApplyNow}
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50"
              >
                Apply Now
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
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
