import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../card/Card";
import { getSubjectsByUserLogged } from "../../services/subjectService";

const ListSubjects = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const data = await getSubjectsByUserLogged();
        setSubjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubjects();

    return () => {};
  }, []);

  const handleCardClick = (subject) => {
    navigate("/subject/" + subject.id + "/cards", { state: { subject } });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {subjects.map((subject) => (
        <Card
          key={subject.id}
          title={subject.name}
          onClick={() => handleCardClick(subject)}
        />
      ))}
    </div>
  );
};

export default ListSubjects;
