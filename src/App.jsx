import React from "react";
import ConverterForm from "./components/ConverterForm";

export default function App() {
  return (
    <div className="currency-converter">
      <h2 className="converter-title">Currency Converter</h2>
      <ConverterForm />
    </div>
  );
}
