import { useState, useEffect } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

export const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure]);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure;

    if (monthlyRate === 0) {
      const calculatedEmi = principal / months;
      setEmi(calculatedEmi);
      setTotalInterest(0);
      setTotalAmount(principal);
      return;
    }

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalAmountValue = emiValue * months;
    const totalInterestValue = totalAmountValue - principal;

    setEmi(emiValue);
    setTotalInterest(totalInterestValue);
    setTotalAmount(totalAmountValue);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const principalPercentage = ((loanAmount / totalAmount) * 100).toFixed(1);
  const interestPercentage = ((totalInterest / totalAmount) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
            <Calculator className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">EMI Calculator</h1>
          <p className="text-xl text-gray-600">
            Calculate your monthly loan payments and plan your finances better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Details</h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Loan Amount</label>
                  <span className="text-sm font-semibold text-blue-600">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="10000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                  <span>₹10K</span>
                  <input
                    type="number"
                    min="10000"
                    max="10000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value) || 10000)}
                    className="w-24 px-2 py-1 text-center border border-gray-300 rounded text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span>₹1Cr</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Interest Rate</label>
                  <span className="text-sm font-semibold text-blue-600">{interestRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                  <span>5%</span>
                  <input
                    type="number"
                    min="5"
                    max="30"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value) || 5)}
                    className="w-16 px-2 py-1 text-center border border-gray-300 rounded text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span>30%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Loan Tenure</label>
                  <span className="text-sm font-semibold text-blue-600">
                    {tenure} {tenure === 1 ? 'Month' : 'Months'} ({Math.round(tenure / 12)} Years)
                  </span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="360"
                  step="6"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                  <span>6 Months</span>
                  <input
                    type="number"
                    min="6"
                    max="360"
                    step="6"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value) || 6)}
                    className="w-16 px-2 py-1 text-center border border-gray-300 rounded text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span>30 Years</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Monthly EMI</span>
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">{formatCurrency(emi)}</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-700">Principal Amount</span>
                  <span className="text-xl font-semibold text-gray-900">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-700">Total Interest</span>
                  <span className="text-xl font-semibold text-orange-600">
                    {formatCurrency(totalInterest)}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-700">Total Amount Payable</span>
                  <span className="text-xl font-semibold text-blue-600">
                    {formatCurrency(totalAmount)}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Breakdown</h3>
                <div className="flex h-8 rounded-lg overflow-hidden">
                  <div
                    className="bg-blue-600 flex items-center justify-center text-white text-sm font-semibold"
                    style={{ width: `${principalPercentage}%` }}
                  >
                    {principalPercentage}%
                  </div>
                  <div
                    className="bg-orange-500 flex items-center justify-center text-white text-sm font-semibold"
                    style={{ width: `${interestPercentage}%` }}
                  >
                    {interestPercentage}%
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
                    <span className="text-sm text-gray-700">Principal</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                    <span className="text-sm text-gray-700">Interest</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
              <p className="mb-6">
                Get your loan approved with the best interest rates from 275+ partner banks.
              </p>
              <a
                href="/loans/personal"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Apply for Loan
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding EMI</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              EMI (Equated Monthly Installment) is the fixed amount you pay every month towards repaying your loan.
              It consists of two components:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <strong>Principal:</strong> The actual loan amount you borrowed
              </li>
              <li>
                <strong>Interest:</strong> The cost of borrowing money from the lender
              </li>
            </ul>
            <p>
              The EMI remains constant throughout the loan tenure, but the proportion of principal and interest
              changes with each payment. Initially, a larger portion goes towards interest, and as you continue
              paying, more goes towards the principal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
