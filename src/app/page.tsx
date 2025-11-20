'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Home as HomeIcon,
  Briefcase,
  Car,
  GraduationCap,
  Building2,
  TrendingUp,
  ArrowRight,
  IndianRupee,
  CheckCircle,
  Star,
  Calculator,
  Phone,
  Zap,
  Target,
  Globe,
  Shield,
  FileText,
  CreditCard,
  Clock,
  HandCoins
} from 'lucide-react';

export default function HomePage() {
  const [currentHeroCard, setCurrentHeroCard] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroCards = [
    {
      title: "Personal Loans",
      subtitle: "Instant Digital Approval",
      description: "Get personal loans up to ₹50 lakhs with competitive interest rates starting from 8.5% p.a. 100% digital process with instant approval.",
      icon: IndianRupee,
      buttonText: "Apply Now",
      buttonLink: "/loans/personal",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      title: "Home Loans",
      subtitle: "Your Dream Home Awaits",
      description: "Secure your dream home with India's lowest interest rates starting from 8.25% p.a. Pre-approved loans up to ₹5 crores with flexible tenure.",
      icon: HomeIcon,
      buttonText: "Get Pre-Approved",
      buttonLink: "/loans/home",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      title: "Business Loans",
      subtitle: "Fuel Your Growth Story",
      description: "Power your business expansion with collateral-free loans up to ₹75 lakhs. Quick disbursals and competitive rates for MSMEs.",
      icon: TrendingUp,
      buttonText: "Scale Your Business",
      buttonLink: "/loans/business",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50"
    },
  ];

  const loanProducts = [
    {
      icon: HomeIcon,
      title: "Home Loan",
      description: "India's lowest rates starting from 8.25% p.a. with doorstep service",
      rate: "8.25%",
      amount: "₹5 Cr",
      link: "/loans/home",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: IndianRupee,
      title: "Personal Loan",
      description: "Instant approval up to ₹50 lakhs with minimal documentation",
      rate: "8.5%",
      amount: "₹50 L",
      link: "/loans/personal",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Briefcase,
      title: "Business Loan",
      description: "Collateral-free business loans for MSMEs and startups",
      rate: "9.5%",
      amount: "₹75 L",
      link: "/loans/business",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Car,
      title: "Car Loan",
      description: "Drive your dream car with 90% financing and quick approval",
      rate: "8.75%",
      amount: "₹1 Cr",
      link: "/loans/car",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: GraduationCap,
      title: "Education Loan",
      description: "Study abroad or in India with comprehensive education financing",
      rate: "9.25%",
      amount: "₹1.5 Cr",
      link: "/loans/education",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Building2,
      title: "Property Loan",
      description: "Unlock your property's value with attractive interest rates",
      rate: "8.95%",
      amount: "₹10 Cr",
      link: "/loans/property",
      color: "from-teal-500 to-teal-600"
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Quick Approval",
      description: "Get loan approvals quickly with our advanced credit assessment system.",
      stat: "Fast"
    },
    {
      icon: Target,
      title: "Lowest Rates",
      description: "Access India's most competitive interest rates across 50+ leading banks and NBFCs.",
      stat: "8.25%"
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Bank-grade security with 256-bit SSL encryption and RBI-compliant data protection.",
      stat: "256-bit"
    },
    {
      icon: Globe,
      title: "Pan India Service",
      description: "Serving customers across 500+ cities with dedicated relationship managers.",
      stat: "500+ Cities"
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner, Mumbai",
      content: "Got my business loan approved quickly! The process was completely digital and hassle-free. Highly recommended!",
      rating: 5,
      amount: "₹25 Lakhs"
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer, Bangalore",
      content: "Amazing service! Got the best home loan rates in the market. The team guided me through every step of the process.",
      rating: 5,
      amount: "₹75 Lakhs"
    },
    {
      name: "Amit Patel",
      role: "Entrepreneur, Delhi",
      content: "Quick personal loan approval helped me during a medical emergency. Forever grateful for their prompt service!",
      rating: 5,
      amount: "₹8 Lakhs"
    }
  ];



  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroCard((prev) => (prev + 1) % heroCards.length);
    }, 5000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(heroInterval);
      clearInterval(testimonialInterval);
    };
  }, [heroCards.length, testimonials.length]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Bankers Den",
            "description": "India's #1 Digital Lending Platform offering personal loans, home loans, business loans with quick approvals and competitive rates.",
            "url": typeof window !== 'undefined' ? window.location.origin : "https://bankersdens.com",
            "logo": (typeof window !== 'undefined' ? window.location.origin : "https://bankersdens.com") + "/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9145023840",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1st Floor, City Avenue, 107, Wakad",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "postalCode": "411057",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.linkedin.com/in/bharat-adatiya-78110b245/",
              "https://www.instagram.com/bankersdens/"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Loan Products",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "LoanOrCredit",
                    "name": "Personal Loan",
                    "description": "Quick personal loans up to ₹50 lakhs with competitive rates"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "LoanOrCredit",
                    "name": "Home Loan",
                    "description": "Home loans with attractive interest rates starting from 8.25%"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "LoanOrCredit", 
                    "name": "Business Loan",
                    "description": "Collateral-free business loans for growth and expansion"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "700"
            }
          })
        }}
      />
      
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-2xl"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-indigo-100/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gray-100/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Hero Content */}
          <div className="text-center mb-8 pt-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-gray-900">India's</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                #1 Digital
              </span>
              <br />
              <span className="text-gray-900">Lending Platform</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Get quick loan approvals with competitive interest rates. 
              <span className="text-blue-600 font-semibold"> ₹585+ Crores disbursed</span> to 
              <span className="text-blue-600 font-semibold"> 700+ happy customers</span> across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Link href="/loans/personal">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Get Instant Loan
                  </div>
                </button>
              </Link>
              <Link href="/calculators">
                <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 hover:border-gray-400 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate EMI
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* Hero Cards Slider */}
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentHeroCard * 100}%)` }}
              >
                {heroCards.map((card, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${card.bgGradient} p-6 md:p-8`}>
                      <div className="grid lg:grid-cols-2 gap-6 items-center">
                        <div>
                          <div className="flex items-center mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center mr-3 shadow-lg`}>
                              <card.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                                {card.title}
                              </h2>
                              <p className="text-sm text-gray-600 font-medium">
                                {card.subtitle}
                              </p>
                            </div>
                          </div>
                          <p className="text-base mb-6 text-gray-700 leading-relaxed">
                            {card.description}
                          </p>
                          <Link href={card.buttonLink}>
                            <button className={`bg-gradient-to-r ${card.gradient} text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                              <div className="flex items-center">
                                {card.buttonText}
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </div>
                            </button>
                          </Link>
                        </div>
                        <div className="hidden lg:block">
                          <div className="relative">
                            <div className="bg-white rounded-xl p-6 shadow-xl">
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-gray-600">Interest Rate</span>
                                  <span className="font-semibold text-emerald-600">Starting 8.25%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-gray-600">Processing Time</span>
                                  <span className="font-semibold text-blue-600">Quick</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-gray-600">Documentation</span>
                                  <span className="font-semibold text-purple-600">Minimal</span>
                                </div>
                                <div className="pt-3 border-t">
                                  <div className="flex items-center text-emerald-600">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    <span className="font-medium text-sm">Quick Approval</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Indicators */}
            <div className="flex justify-center mt-6 space-x-3">
              {heroCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroCard(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentHeroCard
                      ? "bg-emerald-400 w-8"
                      : "bg-white/30 w-6"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-md">
              <div className="text-xl md:text-2xl font-bold mb-1 text-blue-600">₹585Cr+</div>
              <div className="text-gray-600 text-xs font-medium">Loans Disbursed</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-md">
              <div className="text-xl md:text-2xl font-bold mb-1 text-indigo-600">700+</div>
              <div className="text-gray-600 text-xs font-medium">Happy Customers</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-md">
              <div className="text-xl md:text-2xl font-bold mb-1 text-purple-600">Fast</div>
              <div className="text-gray-600 text-xs font-medium">Approval Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Your Loan - Steps Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get Your Loan in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Simple Steps
              </span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures you get your loan approved and disbursed quickly
            </p>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block">
              <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Step 1 */}
              <div className="group text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-all duration-300 relative z-10">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Apply Online
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Fill out our simple online application form quickly. No paperwork required.
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-all duration-300 relative z-10">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  Instant Verification
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Our system verifies your details and credit score instantly using secure APIs.
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-all duration-300 relative z-10">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Get Approved
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Receive instant approval notification via WhatsApp and email quickly.
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-all duration-300 relative z-10">
                    <HandCoins className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Get Funds
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Money transferred directly to your account after approval.
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Loan Journey?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who got their loans approved quickly
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/loans/personal">
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center">
                        <Zap className="w-5 h-5 mr-2" />
                        Start Application
                      </div>
                    </button>
                  </Link>
                  <Link href="/calculators">
                    <button className="bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded-xl border-2 border-gray-300 hover:border-gray-400 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center">
                        <Calculator className="w-5 h-5 mr-2" />
                        Calculate EMI
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Perfect Loan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare rates, get instant approvals, and choose from India's widest range of loan products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanProducts.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="text-sm text-gray-500">Starting from</div>
                      <div className="text-2xl font-bold text-emerald-600">{product.rate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Up to</div>
                      <div className="text-2xl font-bold text-blue-600">{product.amount}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                    Apply Now{" "}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                700+ Customers
              </span>{" "}
              Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of lending with our cutting-edge technology and personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <feature.icon className="w-10 h-10" />
                </div>
                
                <div className="text-3xl font-bold text-emerald-600 mb-2">{feature.stat}</div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-blue-100 relative overflow-hidden">
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories from Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Happy Customers
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real experiences from real people who achieved their financial goals with us
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
                      <div className="text-center">
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        
                        <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed italic">
                          "{testimonial.content}"
                        </blockquote>
                        
                        <div className="flex items-center justify-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div className="text-left">
                            <div className="text-gray-900 font-bold text-lg">{testimonial.name}</div>
                            <div className="text-gray-600">{testimonial.role}</div>
                            <div className="text-blue-600 font-semibold">Loan Amount: {testimonial.amount}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 w-6"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Your Loan Approved?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who got their loans approved quickly. 
            Start your journey to financial freedom today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/loans/personal">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Apply for Loan Now
                </div>
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-bold py-4 px-8 rounded-xl transition-all duration-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to Expert
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}