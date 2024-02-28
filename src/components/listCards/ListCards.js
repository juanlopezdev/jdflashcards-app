import React, { useEffect, useState } from "react";
import FlipCard from "../flipCard/flipCard";
import { getCardsBySubject } from "../../services/cardService";
import PropTypes from "prop-types";

const ListCards = ({ subjectId }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCardsBySubject(subjectId);
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCards();
  }, [subjectId]);

  return (
    <section>
      {cards.length === 0 ? (
        <p className="text-center text-white mt-10">
          No hay tarjetas para mostrar. Cree una nueva tarjeta.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <FlipCard
              key={card.id}
              title={card.question}
              content={card.answer}
              canDelete={true}
              canEdit={true}
            />
          ))}
        </div>
      )}
    </section>
  );
};

ListCards.propTypes = {
  subjectId: PropTypes.number.isRequired,
};

ListCards.defaultProps = {
  subjectId: 0,
};

export default ListCards;
