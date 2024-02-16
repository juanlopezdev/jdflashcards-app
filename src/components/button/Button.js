import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import IconLoader from "../icons/loader";

const Button = ({
  children,
  onClick,
  buttonType,
  buttonStyle,
  className,
  href,
  disabled,
  loading,
  loadingText,
}) => {
  const styles = {
    primary:
      "bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-800",
    secondary:
      "bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 active:bg-gray-800",
    tertiary: "bg-black hover:bg-slate-900 focus:bg-slate-950 active:bg-black",
  };

  const tailwindClass = `
    px-4
    py-2
    text-white
    font-medium
    text-sm
    leading-tight
    rounded
    shadow-md
    hover:shadow-lg 
    focus:shadow-lg
    focus:outline-none
    focus:ring-0
    active:shadow-lg
    disabled:opacity-50
    transition
    duration-150
    ease-in-out
    ${styles[buttonStyle]}
    ${className}`;

  if (buttonType === "link") {
    return (
      <Link className={tailwindClass} to={href}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={tailwindClass}
        onClick={onClick}
        type={buttonType}
        disabled={disabled}
      >
        {loading ? (
          <>
            <IconLoader />
            <span className="ps-2">{loadingText}...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonType: PropTypes.oneOf(["button", "submit", "reset", "link"]),
  buttonStyle: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  className: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  buttonType: "button",
  buttonStyle: "primary",
  className: "",
  disabled: true,
  loadingText: "Cargando...",
};

export default Button;
