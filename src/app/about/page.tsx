import React from 'react';
import Link from 'next/link';
import { Home, Shield, Users, TrendingUp, Award, Linkedin } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#059669] to-[#047857] text-white pt-20 md:pt-24 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-300">BankersDen</span></h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in making smart financial decisions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-green-100">
          <div className="text-center mb-8">
            <Home className="w-16 h-16 text-[#059669] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              At Bankers Den, we help our customers choose the best home loan scheme from various 
              <strong> Nationalised Banks, Private Sector Banks, and NBFCs</strong>.
            </p>
            
            <p className="text-lg mb-6">
              Whether you're <strong>purchasing a new home</strong>, <strong>constructing your dream house</strong>, 
              <strong> renovating</strong>, or <strong>buying a plot to build in the future</strong> — we assist you every step of the way.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <TrendingUp className="w-12 h-12 text-[#059669] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Repayment Tenure</h3>
            <p className="text-gray-600">Up to 30 years</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Award className="w-12 h-12 text-[#059669] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Loan-to-Value</h3>
            <p className="text-gray-600">Up to 90% LTV</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Shield className="w-12 h-12 text-[#059669] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Interest Rates</h3>
            <p className="text-gray-600">Starting at 7.35% p.a.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Users className="w-12 h-12 text-[#059669] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Loan Transfer</h3>
            <p className="text-gray-600">From higher to lower ROI</p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 mb-12 border border-green-200">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Special Benefits for Direct Website Customers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#059669] rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">Exclusive concessions on interest rates</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#059669] rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">Waived bank processing charges</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#059669] rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">Priority processing and approval</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#047857] rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">Dedicated relationship manager</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#047857] rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">Doorstep documentation service</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#047857] rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">Lifetime support for all queries</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-green-100">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#059669] transition-colors">
                <Shield className="w-8 h-8 text-[#059669] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Honesty</h3>
              <p className="text-gray-600">Transparent dealings with complete disclosure</p>
            </div>
            
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#059669] transition-colors">
                <Award className="w-8 h-8 text-[#059669] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Integrity</h3>
              <p className="text-gray-600">Ethical practices in all our operations</p>
            </div>
            
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#059669] transition-colors">
                <Users className="w-8 h-8 text-[#059669] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Transparency</h3>
              <p className="text-gray-600">Clear communication at every step</p>
            </div>
            
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#059669] transition-colors">
                <TrendingUp className="w-8 h-8 text-[#059669] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Service</h3>
              <p className="text-gray-600">Customer-first approach always</p>
            </div>
          </div>
        </div>

        {/* Our Promise */}
        <div className="bg-gradient-to-r from-[#059669] to-[#047857] text-white rounded-2xl p-8 mb-12 shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Promise to You</h2>
            <p className="text-xl mb-6 max-w-4xl mx-auto leading-relaxed">
              We believe in simplifying your financial decisions and ensuring a smooth, stress-free loan experience. 
              Our aim is to be your trusted financial partner throughout your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-[#059669] px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/loans/home"
                className="inline-block bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Loans
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-[#059669]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Visit Us</h3>
                <p className="text-gray-600">
                  BD PHYGITAL PVT. LTD - Bankers Den<br />
                  1st Floor, City Avenue, 107,<br />
                  Wakad, Pune, Maharashtra 411057
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#059669]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Call Us</h3>
                <p className="text-gray-600">
                  +91 9145023840<br />
                  +91 7758955586
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-8 h-8 text-[#059669]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Connect</h3>
                <p className="text-gray-600">
                  support@bankersden.com<br />
                  Follow us on social media
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}