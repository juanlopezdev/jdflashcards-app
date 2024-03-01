import React from "react";
import imgDeckCards from "../assets/images/deck-cards-jdflashcards.png";
import Header from "../components/header/Header";
import ListSubjects from "../components/listSubjects/ListSubjects";
import PageTitle from "../components/pageTitle/PageTitle";
import IconPlus from "../components/icons/Plus";
import Button from "../components/button/Button";

const ViewFlashCards = () => {
  return (
    <div>
      <Header />

      <div className="container mx-auto px-4">
        <PageTitle title="Mis asignaturas" image={imgDeckCards} />
        <div>
          <ListSubjects />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 pb-5 text-center">
        <Button
          buttonType="link"
          buttonStyle="circleSuccess"
          className="px-5 py-5"
          href="/create-subject"
        >
          <IconPlus />
        </Button>
      </div>
    </div>
  );
};

export default ViewFlashCards;
