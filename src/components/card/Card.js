import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, onClick }) => {
  return (
    <article className="bg-white shadow-md rounded p-4" onClick={onClick}>
      <b>{title}</b>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  title: "Sin título",
  onClick: () => {},
};

export default Card;
