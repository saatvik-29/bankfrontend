import React, { useState } from 'react';
import { Users, TrendingUp, Award, DollarSign, CheckCircle, Send } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const BDPartner: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    currentOccupation: '',
    whyJoin: '',
    expectedEarnings: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/bd-partner-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          city: '',
          experience: '',
          currentOccupation: '',
          whyJoin: '',
          expectedEarnings: ''
        });
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-4 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in becoming a BD Partner. We'll review your application and get back to you within 2-3 business days.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="w-full">
            Submit Another Application
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Us as a BD Partner</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Become a Business Development Partner and build a rewarding career in financial services
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Program Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">BD Partner Program</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join our network of successful Business Development Partners and help customers achieve their financial goals 
              while building a lucrative career for yourself.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">High Earnings</h3>
            <p className="text-gray-600">Attractive commission structure with unlimited earning potential</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
            <p className="text-gray-600">Build your own team and grow your business exponentially</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Training & Support</h3>
            <p className="text-gray-600">Comprehensive training and ongoing support from our expert team</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Work</h3>
            <p className="text-gray-600">Work on your own schedule with complete flexibility</p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <p className="text-lg">Competitive commission rates up to 1.5% of loan amount</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <p className="text-lg">Access to 275+ partner banks and NBFCs</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <p className="text-lg">Complete marketing and sales support</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <p className="text-lg">Digital tools and CRM access</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-500 mt-1" />
                <p className="text-lg">Regular training sessions and workshops</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-500 mt-1" />
                <p className="text-lg">Performance-based incentives and bonuses</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-500 mt-1" />
                <p className="text-lg">Dedicated support team assistance</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-500 mt-1" />
                <p className="text-lg">Recognition and awards program</p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Send className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply Now</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to start your journey as a BD Partner
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <Input
                label="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience in Sales/Finance
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
              <Input
                label="Current Occupation"
                name="currentOccupation"
                value={formData.currentOccupation}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Monthly Earnings
              </label>
              <select
                name="expectedEarnings"
                value={formData.expectedEarnings}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Range</option>
                <option value="25000-50000">₹25,000 - ₹50,000</option>
                <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                <option value="100000-200000">₹1,00,000 - ₹2,00,000</option>
                <option value="200000+">₹2,00,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why do you want to join as a BD Partner?
              </label>
              <textarea
                name="whyJoin"
                value={formData.whyJoin}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your motivation and goals..."
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};