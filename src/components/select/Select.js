import React from "react";
import PropTypes from "prop-types";

const Select = ({ label, id, name, onChange, onBlur, value, error, options }) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={`block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
          error ? "border-red-500" : ""
        }`}
      >
        <option value="">Seleccione</option>
        {options.length &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.array,
};

Select.defaultProps = {
  options: [],
  value: "",
};

export default Select;
