'use client';

import React, { useState } from "react";
import { Calculator, TrendingDown, DollarSign, Percent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import calculatorImage from "@/assets/13151.png";
import { EMICalculatorWidget } from "@/components/EMICalculatorWidget";
import { EligibilityCalculator } from "@/components/EligibilityCalculator";
import { PartPaymentCalculator } from "@/components/PartPaymentCalculator";

type CalculatorType = "emi" | "eligibility" | "partPayment";

export default function CalculatorsPage() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>("emi");

  const calculatorOptions = [
    {
      id: "emi" as CalculatorType,
      name: "EMI Calculator",
      icon: Calculator,
      description: "Calculate monthly payments",
    },
    {
      id: "eligibility" as CalculatorType,
      name: "Eligibility Calculator",
      icon: DollarSign,
      description: "Check loan eligibility",
    },
    {
      id: "partPayment" as CalculatorType,
      name: "Part Payment Calculator",
      icon: Percent,
      description: "Plan early repayment",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean Design */}
      <div className="relative py-20 overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 shadow-lg">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Financial Calculators
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Make informed financial decisions with our advanced calculators
              </p>

              {/* Calculator Options */}
              <div className="grid grid-cols-1 gap-3">
                {calculatorOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setActiveCalculator(option.id);
                      // Smooth scroll to calculator section
                      setTimeout(() => {
                        document
                          .getElementById("calculator-section")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }, 100);
                    }}
                    className={`flex items-center p-4 rounded-xl transition-all duration-300 text-left ${
                      activeCalculator === option.id
                        ? "bg-blue-600 text-white shadow-xl scale-105"
                        : "bg-white text-gray-700 hover:bg-blue-50 hover:shadow-lg shadow-md"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                        activeCalculator === option.id
                          ? "bg-blue-700"
                          : "bg-blue-100"
                      }`}
                    >
                      <option.icon
                        className={`w-6 h-6 ${
                          activeCalculator === option.id
                            ? "text-white"
                            : "text-blue-600"
                        }`}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">
                        {option.name}
                      </div>
                      <div
                        className={`text-sm ${
                          activeCalculator === option.id
                            ? "text-blue-100"
                            : "text-gray-600"
                        }`}
                      >
                        {option.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Illustration - Financial Calculator Image */}
            <div className="hidden lg:block">
              <div className="relative animate-float max-w-2xl mx-auto">
                <div className="relative">
                  {/* Main Image - Larger and Embedded */}
                  <div className="relative z-10">
                    <Image
                      src={calculatorImage}
                      alt="Financial Calculator Illustration"
                      className="w-full h-auto max-w-[700px] mx-auto drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Content Section */}
      <section id="calculator-section" className="py-16 scroll-mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* EMI Calculator */}
          {activeCalculator === "emi" && (
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <Calculator className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  EMI Calculator
                </h2>
                <p className="text-gray-600">
                  Calculate your monthly loan payments and plan your finances better
                </p>
              </div>
              <EMICalculatorWidget />
            </div>
          )}

          {/* Eligibility Calculator */}
          {activeCalculator === "eligibility" && (
            <div className="animate-fade-in">
              <EligibilityCalculator />
            </div>
          )}

          {/* Part Payment Calculator */}
          {activeCalculator === "partPayment" && (
            <div className="animate-fade-in">
              <PartPaymentCalculator />
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Use Our Calculators?
            </h2>
            <p className="text-xl text-gray-600">
              Make informed financial decisions with accurate calculations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Accurate Results
              </h3>
              <p className="text-gray-600">
                Get precise calculations based on current market rates and banking standards
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Real-time Updates
              </h3>
              <p className="text-gray-600">
                Instant calculations as you adjust loan amount, tenure, and interest rates
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Free to Use
              </h3>
              <p className="text-gray-600">
                All our financial calculators are completely free with no hidden charges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Tools Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Financial Tools
            </h2>
            <p className="text-xl text-gray-600">
              Explore our comprehensive suite of financial calculators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                CIBIL Score Check
              </h3>
              <p className="text-gray-600 mb-4">
                Check your credit score and get improvement tips
              </p>
              <Link
                href="/cibil-score"
                className="inline-block bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors font-semibold"
              >
                Check Score
              </Link>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                SIP Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Plan your systematic investment and wealth creation
              </p>
              <span className="inline-block bg-gray-300 text-gray-600 px-6 py-2 rounded-lg font-semibold">
                Coming Soon
              </span>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tax Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Calculate your income tax and plan tax savings
              </p>
              <span className="inline-block bg-gray-300 text-gray-600 px-6 py-2 rounded-lg font-semibold">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help with Your Loan Application?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our financial experts are here to guide you through the loan process and help you make the best financial decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Our Experts
            </Link>
            <Link
              href="/loans/home"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
            >
              Explore Loans
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}