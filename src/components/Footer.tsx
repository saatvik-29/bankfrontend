import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="text-white text-lg md:text-xl font-bold mb-3 md:mb-4">BankersDen</h3>
            <p className="text-sm mb-3 md:mb-4 leading-relaxed">
              Your trusted partner for all financial needs. Get the best deals on loans, credit cards, and insurance.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/bharat-adatiya-78110b245/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/bankersdens/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4">Loans</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/loans/home" className="hover:text-gray-100 transition-colors">Home Loan</Link></li>
              <li><Link to="/loans/personal" className="hover:text-gray-100 transition-colors">Personal Loan</Link></li>
              <li><Link to="/loans/business" className="hover:text-gray-100 transition-colors">Business Loan</Link></li>
              <li><Link to="/loans/car" className="hover:text-gray-100 transition-colors">Car Loan</Link></li>
              <li><Link to="/loans/education" className="hover:text-gray-100 transition-colors">Education Loan</Link></li>
              <li><Link to="/loans/property" className="hover:text-gray-100 transition-colors">Loan Against Property</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gray-100 transition-colors">About Us</Link></li>
              <li><Link to="/bd-partner" className="hover:text-gray-100 transition-colors">BD Partner</Link></li>
              <li><Link to="/insurance" className="hover:text-gray-100 transition-colors">Insurance</Link></li>
              <li><Link to="/calculators" className="hover:text-gray-100 transition-colors">Calculators</Link></li>
              <li><Link to="/cibil-score" className="hover:text-gray-100 transition-colors">CIBIL Score Check</Link></li>
              <li><Link to="/blog" className="hover:text-gray-100 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-gray-100 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">BD PHYGITAL PVT. LTD - Bankers Den<br />1st Floor, City Avenue, 107,<br />Wakad, Pune, Maharashtra 411057, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
                <span>+91 9145023840 / 7758955586</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
                <span>support@bankersden.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2025 BankersDen. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="hover:text-gray-100 transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-gray-100 transition-colors">Privacy Policy</Link>
              <Link to="/disclaimer" className="hover:text-gray-100 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
