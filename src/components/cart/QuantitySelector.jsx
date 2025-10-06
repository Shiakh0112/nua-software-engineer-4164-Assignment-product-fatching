import React from "react";

const QuantitySelector = ({ value, min = 1, max = 10, onChange }) => {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleDecrease}
        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l-md hover:bg-gray-300 transition"
        disabled={value <= min}
      >
        -
      </button>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="w-12 text-center border-t border-b border-gray-200 py-1"
      />
      <button
        onClick={handleIncrease}
        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r-md hover:bg-gray-300 transition"
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
