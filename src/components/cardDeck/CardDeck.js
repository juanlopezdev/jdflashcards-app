import React from "react";
import PropTypes from "prop-types";

const CardDeck = ({ title, onClick }) => {
  return (
    <article className="bg-white shadow-md rounded p-4" onClick={onClick}>
      <b>{title}</b>
    </article>
  );
};

CardDeck.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CardDeck.defaultProps = {
  title: "Sin título",
  onClick: () => {},
};

export default CardDeck;
