import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import { getSubjectsByUserLogged } from "../../services/subjectService";

const ListSubjects = () => {
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {subjects.map((subject) => (
        <Card key={subject.id} title={subject.name} />
      ))}
    </div>
  );
};

export default ListSubjects;
