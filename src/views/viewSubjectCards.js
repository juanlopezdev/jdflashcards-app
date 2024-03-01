import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Button from "../components/button/Button";
import IconHome from "../components/icons/Home";
import IconPlus from "../components/icons/Plus";
import PageTitle from "../components/pageTitle/PageTitle";
import ListCards from "../components/listCards/ListCards";
import { getSubject } from "../services/subjectService";
import IconPlay from "../components/icons/Play";

const ViewSubjectCards = () => {
  const navigate = useNavigate();
  const { subjectId } = useParams();
  const [subject, setSubject] = useState({});

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const data = await getSubject(subjectId);
        setSubject(data);
      } catch (error) {
        console.error(error);
      }
    };

    document.body.classList.add(
      "bg-gradient-to-r",
      "from-sky-500",
      "to-indigo-500"
    );

    fetchSubject();

    return () => {
      document.body.classList.remove(
        "bg-gradient-to-r",
        "from-sky-500",
        "to-indigo-500"
      );
    };
  }, [subjectId]);

  const handleCreateCardClick = () => {
    navigate("/create-card", { state: { subjectId } });
  };

  return (
    <div>
      <Header />

      <div className="container mx-auto px-4 pb-32">
        <PageTitle title={subject.name} />
        <ListCards subjectId={+subjectId} />
      </div>

      <div className="fixed inset-x-0 bottom-0 pb-5 flex justify-center items-center">
        <Button
          buttonStyle="circleSuccess"
          className="px-5 py-5"
          onClick={handleCreateCardClick}
        >
          <IconPlus />
        </Button>

        <Button
          buttonType="link"
          buttonStyle="circleTertiary"
          className="px-5 py-5 ml-2"
          href="/flashcards"
        >
          <IconHome />
        </Button>

        <Button buttonStyle="circlePrimary" className="px-5 py-5 ml-2">
          <IconPlay />
        </Button>
      </div>
    </div>
  );
};

export default ViewSubjectCards;
