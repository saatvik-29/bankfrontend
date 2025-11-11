import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { HomeLoan } from './pages/loans/HomeLoan';
import { PersonalLoan } from './pages/loans/PersonalLoan';
import { BusinessLoan } from './pages/loans/BusinessLoan';
import { CarLoan } from './pages/loans/CarLoan';
import { EducationLoan } from './pages/loans/EducationLoan';
import { PropertyLoan } from './pages/loans/PropertyLoan';
import { LoanApplicationForm } from './pages/loans/LoanApplicationForm';
import { EMICalculator } from './pages/EMICalculator';
import { Insurance } from './pages/Insurance';
import { CibilScore } from './pages/CibilScore';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Disclaimer } from './pages/Disclaimer';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';
import { AboutUs } from './pages/AboutUs';
import { BDPartner } from './pages/BDPartner';
import { Calculators } from './pages/Calculators';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Loan Information Pages - Reordered as requested */}
            <Route path="/loans/home" element={<HomeLoan />} />
            <Route path="/loans/property" element={<PropertyLoan />} />
            <Route path="/loans/car" element={<CarLoan />} />
            <Route path="/loans/personal" element={<PersonalLoan />} />
            <Route path="/loans/business" element={<BusinessLoan />} />
            <Route path="/loans/education" element={<EducationLoan />} />
            
            {/* Loan Application Forms */}
            <Route 
              path="/loans/:loanType/apply" 
              element={<LoanApplicationForm />} 
            />
            <Route path="/emi-calculator" element={<EMICalculator />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/cibil-score" element={<CibilScore />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/bd-partner" element={<BDPartner />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </BrowserRouter>
  );
};

function App() {
  return <AppRoutes />;
}

export default App;
