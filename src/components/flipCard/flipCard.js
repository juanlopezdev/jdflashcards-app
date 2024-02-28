import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";

const FlipCard = ({ title, content, canEdit, canDelete }) => {
  const [shouldFlip, setShouldFlip] = useState(false);

  const handleCardClick = () => {
    setShouldFlip(!shouldFlip);
  };

  return (
    <div>
      <article
        className="group h-32 cursor-pointer [perspective:1000px] mb-4"
        onClick={handleCardClick}
      >
        <div
          className={`relative w-full h-full text-center transition-transform duration-500 [transform-style:preserve-3d] ${
            shouldFlip ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div className="absolute w-full h-full p-5 [backface-visibility:hidden] bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold mb-5">{title}</h2>
          </div>
          <div className="absolute w-full h-full p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-black rounded-lg text-white">
            <p>{content}</p>
          </div>
        </div>
      </article>

      <div className="flex justify-center gap-4">
        {canEdit && <Button>Editar</Button>}
        {canDelete && <Button buttonStyle="danger">Eliminar</Button>}
      </div>
    </div>
  );
};

FlipCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  canEdit: PropTypes.bool,
  canDelete: PropTypes.bool,
};

FlipCard.defaultProps = {
  canEdit: false,
  canDelete: false,
};

export default FlipCard;
