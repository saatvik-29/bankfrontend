import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { getLoanById } from '../../data/loanData';
import { CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { api } from '../../lib/api';

export const LoanApplicationForm = () => {
  const { loanType } = useParams<{ loanType: string }>();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const loan = getLoanById(loanType || '');

  if (!loan) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Loan Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    loan_amount: '',
    employment_type: '',
    monthly_income: '',
    pan_number: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    // Loan-specific fields
    down_payment: '',
    property_value: '',
    business_type: '',
    business_vintage: '',
    car_make: '',
    car_model: '',
    car_year: '',
    education_institution: '',
    course_name: '',
    course_duration: '',
    gold_weight: '',
    gold_purity: '',
    property_type: '',
    property_address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await api.submitLoanApplication({
        ...formData,
        loan_type: loanType,
        loan_amount: parseFloat(formData.loan_amount),
        monthly_income: parseFloat(formData.monthly_income),
      });

      if (result.success) {
        setApplicationNumber(result.applicationNumber);
        setSubmitted(true);
      } else {
        console.error('Failed to submit application:', result.message);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
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
              {loan.name} Application Submitted!
            </h2>
            <p className="text-gray-600 mb-6">
              Your {loan.name.toLowerCase()} application has been received. Our team will review it and get back to you within 24-48 hours.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-1">Your Application Number</p>
              <p className="text-2xl font-bold text-blue-600">{applicationNumber}</p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => navigate('/')}>Back to Home</Button>
              <Button onClick={() => navigate('/contact')}>Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getStepTitle = (stepNumber: number) => {
    switch (stepNumber) {
      case 1: return 'Personal Details';
      case 2: return 'Financial Information';
      case 3: return 'Loan Specific Details';
      case 4: return 'Review & Submit';
      default: return '';
    }
  };

  const getLoanSpecificFields = () => {
    switch (loanType) {
      case 'home':
        return (
          <>
            <Input
              label="Property Value (₹)"
              type="number"
              name="property_value"
              value={formData.property_value}
              onChange={handleChange}
              required
              min="100000"
            />
            <Input
              label="Down Payment (₹)"
              type="number"
              name="down_payment"
              value={formData.down_payment}
              onChange={handleChange}
              required
              min="0"
            />
          </>
        );
      case 'car':
        return (
          <>
            <Input
              label="Car Make"
              name="car_make"
              value={formData.car_make}
              onChange={handleChange}
              required
              placeholder="e.g., Maruti, Hyundai, Honda"
            />
            <Input
              label="Car Model"
              name="car_model"
              value={formData.car_model}
              onChange={handleChange}
              required
              placeholder="e.g., Swift, i20, City"
            />
            <Input
              label="Car Year"
              type="number"
              name="car_year"
              value={formData.car_year}
              onChange={handleChange}
              required
              min="2010"
              max="2024"
            />
          </>
        );
      case 'business':
        return (
          <>
            <Input
              label="Business Type"
              name="business_type"
              value={formData.business_type}
              onChange={handleChange}
              required
              placeholder="e.g., Manufacturing, Trading, Services"
            />
            <Input
              label="Business Vintage (Years)"
              type="number"
              name="business_vintage"
              value={formData.business_vintage}
              onChange={handleChange}
              required
              min="1"
            />
          </>
        );
      case 'education':
        return (
          <>
            <Input
              label="Institution Name"
              name="education_institution"
              value={formData.education_institution}
              onChange={handleChange}
              required
              placeholder="e.g., IIT Delhi, Harvard University"
            />
            <Input
              label="Course Name"
              name="course_name"
              value={formData.course_name}
              onChange={handleChange}
              required
              placeholder="e.g., MBA, Engineering, Medicine"
            />
            <Input
              label="Course Duration (Years)"
              type="number"
              name="course_duration"
              value={formData.course_duration}
              onChange={handleChange}
              required
              min="1"
            />
          </>
        );
      case 'gold':
        return (
          <>
            <Input
              label="Gold Weight (grams)"
              type="number"
              name="gold_weight"
              value={formData.gold_weight}
              onChange={handleChange}
              required
              min="1"
              step="0.1"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gold Purity
              </label>
              <select
                name="gold_purity"
                value={formData.gold_purity}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Gold Purity</option>
                <option value="18K">18 Karat</option>
                <option value="22K">22 Karat</option>
                <option value="24K">24 Karat</option>
              </select>
            </div>
          </>
        );
      case 'property':
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Type
              </label>
              <select
                name="property_type"
                value={formData.property_type}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Property Type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="plot">Plot</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Address
              </label>
              <textarea
                name="property_address"
                value={formData.property_address}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter complete property address"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Button
                variant="outline"
                onClick={() => navigate(`/loans/${loanType}`)}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{loan.name} Application</h1>
                <p className="text-gray-600">Complete the form to apply for your loan</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                {[1, 2, 3, 4].map((stepNumber) => (
                  <div key={stepNumber} className={`flex items-center ${step >= stepNumber ? 'text-blue-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                      {stepNumber}
                    </div>
                    <span className="ml-2 font-medium text-sm">{getStepTitle(stepNumber)}</span>
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
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
                  name="pan_number"
                  value={formData.pan_number}
                  onChange={handleChange}
                  required
                  placeholder="ABCDE1234F"
                />
                <Input
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <div className="grid md:grid-cols-3 gap-4">
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
                <Button type="button" onClick={() => setStep(2)} className="w-full">
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Financial Information</h2>
                <Input
                  label="Loan Amount (₹)"
                  type="number"
                  name="loan_amount"
                  value={formData.loan_amount}
                  onChange={handleChange}
                  required
                  min={loan.loanAmount.min}
                  max={loan.loanAmount.max}
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Employment Type
                  </label>
                  <select
                    name="employment_type"
                    value={formData.employment_type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Employment Type</option>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self Employed</option>
                    <option value="business">Business Owner</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>
                <Input
                  label="Monthly Income (₹)"
                  type="number"
                  name="monthly_income"
                  value={formData.monthly_income}
                  onChange={handleChange}
                  required
                  min="10000"
                />
                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-full">
                    Back
                  </Button>
                  <Button type="button" onClick={() => setStep(3)} className="w-full">
                    Continue <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {loan.name} Specific Details
                </h2>
                {getLoanSpecificFields()}
                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(2)} className="w-full">
                    Back
                  </Button>
                  <Button type="button" onClick={() => setStep(4)} className="w-full">
                    Continue <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Review Your Application</h2>
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Personal Details</h3>
                      <p className="text-sm text-gray-600">Name: {formData.full_name}</p>
                      <p className="text-sm text-gray-600">Email: {formData.email}</p>
                      <p className="text-sm text-gray-600">Phone: {formData.phone}</p>
                      <p className="text-sm text-gray-600">PAN: {formData.pan_number}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Financial Details</h3>
                      <p className="text-sm text-gray-600">Loan Amount: ₹{formData.loan_amount}</p>
                      <p className="text-sm text-gray-600">Monthly Income: ₹{formData.monthly_income}</p>
                      <p className="text-sm text-gray-600">Employment: {formData.employment_type}</p>
                    </div>
                  </div>
                  {getLoanSpecificFields() && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Loan Specific Details</h3>
                      {loanType === 'home' && (
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <p>Property Value: ₹{formData.property_value}</p>
                          <p>Down Payment: ₹{formData.down_payment}</p>
                        </div>
                      )}
                      {loanType === 'car' && (
                        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <p>Make: {formData.car_make}</p>
                          <p>Model: {formData.car_model}</p>
                          <p>Year: {formData.car_year}</p>
                        </div>
                      )}
                      {/* Add other loan types as needed */}
                    </div>
                  )}
                </div>
                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(3)} className="w-full">
                    Back
                  </Button>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

