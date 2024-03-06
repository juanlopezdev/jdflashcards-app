import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./utils/PrivateRoutes";
import ViewHome from "./views/ViewHome";
import ViewFlashCards from "./views/ViewFlashCards";
import ViewLogin from "./views/ViewLogin";
import ViewCreateSubject from "./views/ViewCreateSubject";
import ViewSubjectCards from "./views/viewSubjectCards";
import ViewCreateCard from "./views/ViewCreateCard";
import ViewEditCard from "./views/ViewEditCard";

function App() {
  useEffect(() => {
    document.body.classList.add(
      "bg-gradient-to-r",
      "from-sky-500",
      "to-indigo-500"
    );

    return () => {
      document.body.classList.remove(
        "bg-gradient-to-r",
        "from-sky-500",
        "to-indigo-500"
      );
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/flashcards" element={<ViewFlashCards />} />
          <Route exact path="/create-subject" element={<ViewCreateSubject />} />
          <Route
            exact
            path="/subject/:subjectId/cards"
            element={<ViewSubjectCards />}
          />
          <Route exact path="/create-card" element={<ViewCreateCard />} />
          <Route exact path="/edit-card/:cardId" element={<ViewEditCard />} />
        </Route>
        <Route exact path="/" element={<ViewHome />} />
        <Route exact path="/login" element={<ViewLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
