import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('Celsius');
  const [toUnit, setToUnit] = useState('Fahrenheit');
  const [result, setResult] = useState('');

  const convertTemperature = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult('Please enter a valid number');
      return;
    }

    let convertedValue;
    if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
      convertedValue = (value * 9 / 5) + 32;
    } else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
      convertedValue = value + 273.15;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
      convertedValue = (value - 32) * 5 / 9;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
      convertedValue = ((value - 32) * 5 / 9) + 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
      convertedValue = value - 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
      convertedValue = ((value - 273.15) * 9 / 5) + 32;
    } else {
      convertedValue = value; // Same unit conversion
    }

    setResult(`${value} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`);
  };

  return (
    <div className="App">
      <h1 style={{ color: '#4CAF50', fontSize: '2.5rem', marginBottom: '1rem' }}>🌡️ Temperature Converter 🌡️</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Enter value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
          </select>
        </div>
        <button
          onClick={convertTemperature}
          style={{ padding: '0.5rem 1rem', fontSize: '1rem', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', marginTop: '1rem' }}
        >
          Convert
        </button>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc', marginTop: '1rem' }}
        >
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>
      </div>
      {result && (
        <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#333' }}>{result}</p>
      )}
    </div>
  );
}

export default App;
