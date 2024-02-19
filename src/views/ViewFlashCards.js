import React, { useState, useEffect } from "react";
import imgDeckCards from "../assets/images/deck-cards-jdflashcards.png";
import CardDeck from "../components/cardDeck/CardDeck";
import Header from "../components/header/Header";
import { getSubjectsByUserLogged } from "../services/subjectService";

const ViewFlashCards = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    document.body.classList.add(
      "bg-gradient-to-r",
      "from-sky-500",
      "to-indigo-500"
    );

    const fetchSubjects = async () => {
      try {
        const data = await getSubjectsByUserLogged();
        setSubjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubjects();

    return () => {
      document.body.classList.remove(
        "bg-gradient-to-r",
        "from-sky-500",
        "to-indigo-500"
      );
    };
  });

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <div className="mt-4 mb-8">
          <img
            src={imgDeckCards}
            alt="Barajas JDFlashcards"
            className="w-40 m-auto"
          />
          <h1 className="text-4xl font-bold text-center">Mis Barajas</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subjects.map((subject) => (
            <CardDeck title={subject.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewFlashCards;
