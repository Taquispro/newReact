/* eslint-disable react/prop-types */
import { useId } from "react";

function Input({
  label = "Amount", // Default label
  amount = 0,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-gray-800 p-4 rounded-lg text-sm flex items-center gap-4 shadow-md ${className}`}
    >
      {/* Amount Input */}
      <div className="flex-1">
        <label
          htmlFor={amountInputId}
          className="text-gray-400 mb-2 inline-block uppercase text-xs tracking-wide"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-gray-700 text-gray-100 py-2 px-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          type="number"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency Selector */}
      <div className="flex-1">
        <p className="text-gray-400 mb-2 uppercase text-xs tracking-wide">
          Currency Type
        </p>
        <select
          className="w-full rounded-md px-3 py-2 bg-gray-700 text-gray-100 cursor-pointer outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency} className="text-black">
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
