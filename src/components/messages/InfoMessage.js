import React from "react";
import PropTypes from "prop-types";

const InfoMessage = ({ message, type }) => {
  const bgColor = type === "error" ? "bg-red-500" : "bg-green-500";

  return (
    <div className={`p-4 mb-2 rounded ${bgColor} text-white text-sm`}>
      {message}
    </div>
  );
};

InfoMessage.defaultProps = {
  type: "success",
  message: ""
};

InfoMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error"])
};

export default InfoMessage;
