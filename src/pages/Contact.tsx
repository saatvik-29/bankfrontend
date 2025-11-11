import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { api } from '../lib/api';

export const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    category: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
      const result = await api.contact(formData);

      if (result.success) {
        setSubmitted(true);
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          category: 'general',
          message: '',
        });
      } else {
        console.error('Failed to send message:', result.message);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
          <p className="text-xl text-black">
            Have questions? We're here to help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Get in Touch</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  Thank you! We've received your message and will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
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
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="loan_inquiry">Loan Inquiry</option>
                    <option value="complaint">Complaint</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 text-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-black mb-1">Address</h3>
                    <p className="text-black">
                      BD PHYGITAL PVT. LTD - Bankers Den<br />
                      1st Floor, City Avenue, 107,<br />
                      Wakad, Pune, Maharashtra 411057, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 text-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-black mb-1">Phone</h3>
                    <p className="text-black">
                      +91 9145023840<br />
                      +91 7758955586
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 text-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <p className="text-black">
                      support@bankersden.com<br />
                      info@bankersden.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 text-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-black mb-1">Business Hours</h3>
                    <p className="text-black">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Request a Callback</h3>
              <p className="mb-6">
                Not able to call? Leave your number and we'll call you back.
              </p>
              <a
                href="#"
                className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Request Callback
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
