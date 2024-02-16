import React from "react";
import PropTypes from "prop-types";

const Textfield = ({
  label,
  type,
  id,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  error,
}) => {
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
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={`block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 
        focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

Textfield.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.string
};

Textfield.defaultProps = {
  type: "text",
  onChange: () => {},
  onBlur: () => {}
};

export default Textfield;
