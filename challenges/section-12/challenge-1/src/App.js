import "./App.css";

import { useEffect, useState } from "react";

export default function App() {
  const [currencyToConvert, setCurrencyToConvert] = useState("");
  const [currencyConverted, setCurrencyConverted] = useState("");
  const [amountConverted, setAmountConverted] = useState(0);
  const [amount, setAmount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(function () {
    if(!currencyConverted || !currencyToConvert || !amount || currencyConverted === currencyToConvert) return;
    async function fetchCurrency() {
      setIsLoading(true)
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currencyToConvert}&symbols=${currencyConverted}`
      );

      const data = await res.json();
      setAmountConverted(data.rates[currencyConverted])
      setIsLoading(false)
    }
    fetchCurrency();
  }, [currencyToConvert, currencyConverted, amount]);

  return (
    <div>
      <input type="text" onChange={(e) => setAmount(+e.target.value)} disabled={isLoading}/>
      <select value={currencyToConvert} onChange={(e) => setCurrencyToConvert(e.target.value)}disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={currencyConverted} onChange={(e) => setCurrencyConverted(e.target.value)}disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{amountConverted} {currencyConverted}</p>
    </div>
  );
}
