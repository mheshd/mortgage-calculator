import React, { useState } from "react";

const Card = () => {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanTime, setLoanTime] = useState(25);
  const [interestRate, setInterestRate] = useState("3");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);

  const MortgageCal = () => {
    const loanAmount = purchasePrice - downPayment;
    if (loanAmount <= 0) {
      alert("Down payment must be less than the purchase price.");
      return;
    }

    const rate = parseFloat(interestRate) / 100 / 12;
    const paymentMethod = loanTime * 12;

    const monthlyAmount =
      interestRate > 0
        ? (loanAmount * (rate * Math.pow(1 + rate, paymentMethod))) /
          (Math.pow(1 + rate, paymentMethod) - 1)
        : loanAmount / paymentMethod;

    setLoanAmount(loanAmount);
    setMonthlyPayment(monthlyAmount.toFixed(2));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Mortgage Calculator
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="text-gray-700 font-medium mb-1 block">
              Purchase price:
            </label>
            <input
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              placeholder="e.g. 450000"
              className="w-full border border-gray-300 rounded-lg p-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium mb-1 block">
              Down payment:
            </label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              placeholder="e.g. 135000"
              className="w-full border border-gray-300 rounded-lg p-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium mb-1 block">
              Repayment time (years):
            </label>
            <input
              type="number"
              value={loanTime}
              onChange={(e) => setLoanTime(Number(e.target.value))}
              placeholder="e.g. 25"
              className="w-full border border-gray-300 rounded-lg p-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium mb-1 block">
              Interest rate (%):
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              placeholder="e.g. 3"
              className="w-full border border-gray-300 rounded-lg p-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8 text-center">
          <div>
            <p className="text-gray-500 mb-1">Loan amount</p>
            <p className="text-2xl font-bold text-gray-800">
              ${loanAmount.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Estimated pr. month</p>
            <p className="text-2xl font-bold text-gray-800">
              ${monthlyPayment}
            </p>
          </div>
        </div>

        <button
          onClick={MortgageCal}
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Get a mortgage quote
        </button>
      </div>
    </div>
  );
};

export default Card;
