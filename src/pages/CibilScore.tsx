import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const CibilScore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 pt-20 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#be185d] text-white rounded-full mb-4">
            <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#be185d] mb-3 md:mb-4">
            CIBIL Score Check
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Check your credit score and get personalized loan recommendations
          </p>
        </div>

        <div className="bg-white rounded-xl border border-pink-200 p-8 md:p-12 text-center max-w-2xl mx-auto shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed">
            We're integrating CIBIL score checking functionality. Check back
            soon!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block bg-[#be185d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9d174d] transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-white border-2 border-[#be185d] text-[#be185d] px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl border border-pink-200 p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-[#be185d] mb-2">
            🎨 Dynamic Navbar Demo
          </h3>
          <p className="text-gray-600 text-sm">
            Notice how the navbar changes to a pink theme on this page! Try
            navigating to different loan pages to see the navbar adapt to each
            page's color scheme.
          </p>
        </div>
      </div>
    </div>
  );
};
