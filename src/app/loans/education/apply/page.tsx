'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function EducationLoanApplicationPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    loanAmount: '',
    employmentType: 'student',
    monthlyIncome: '',
    panNumber: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    companyName: '',
    workExperience: '0',
    educationInstitution: '',
    courseName: '',
    courseDuration: '',
    loanType: 'education'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/loan-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setApplicationNumber(result.applicationNumber);
        setSubmitted(true);
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Education Loan Application Submitted!
            </h2>
            <p className="text-gray-600 mb-6">
              Your education loan application has been received. Our team will review it and get back to you within 24-48 hours via WhatsApp.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-1">Your Application Number</p>
              <p className="text-2xl font-bold text-blue-600">{applicationNumber}</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800">
                📱 <strong>WhatsApp Notifications Sent!</strong><br />
                • Admin team notified for review<br />
                • Confirmation sent to your WhatsApp number<br />
                We'll contact you within 24-48 hours.
              </p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => router.push('/')}>Back to Home</Button>
              <Button onClick={() => router.push('/contact')}>Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Button
                variant="outline"
                onClick={() => router.push('/loans/education')}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Education Loan Application</h1>
                <p className="text-gray-600">Complete the form to apply for your education loan</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800">
                📱 <strong>Dual WhatsApp Notifications:</strong> Both you and our admin team receive instant WhatsApp updates for faster processing and transparency!
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Input
                label="PAN Number"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                required
                placeholder="ABCDE1234F"
              />
            </div>

            <Input
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <div className="grid md:grid-cols-3 gap-6">
              <Input
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <Input
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
              <Input
                label="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>

            <Input
              label="Loan Amount (₹)"
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              required
              min="50000"
              max="5000000"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Institution Name"
                name="educationInstitution"
                value={formData.educationInstitution}
                onChange={handleChange}
                required
                placeholder="e.g., IIT Delhi, Harvard University"
              />
              <Input
                label="Course Name"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                required
                placeholder="e.g., MBA, Engineering, Medicine"
              />
            </div>

            <Input
              label="Course Duration (Years)"
              type="number"
              name="courseDuration"
              value={formData.courseDuration}
              onChange={handleChange}
              required
              min="1"
              max="10"
            />

            <Input
              label="Family Monthly Income (₹)"
              type="number"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              required
              min="20000"
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Education Loan Application'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}