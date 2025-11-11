import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Insurance = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Insurance Plans</h1>
          <p className="text-xl text-gray-600">
            Protect yourself and your family with comprehensive insurance coverage
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-8">
            We're preparing comprehensive insurance solutions for you. Stay tuned!
          </p>
          <Link
            to="/"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
