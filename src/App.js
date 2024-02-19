import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./utils/PrivateRoutes";
import ViewHome from "./views/ViewHome";
import ViewFlashCards from "./views/ViewFlashCards";
import ViewLogin from "./views/ViewLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/flashcards" element={<ViewFlashCards />} />
        </Route>
        <Route exact path="/" element={<ViewHome />}/>
        <Route exact path="/login" element={<ViewLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
