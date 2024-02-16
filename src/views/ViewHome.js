import React, { useEffect } from "react";
import Button from "../components/button/Button";

const ViewHome = () => {

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
  });

  return (
    <section className="container grid place-items-center h-screen px-4 mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-center text-white mb-4">JD Flashcards</h1>
        <div
          className="
          w-52
          h-52
          mx-auto
          mb-4
          bg-logo-flashcards 
          bg-cover 
          bg-center  
          rounded"
        ></div>
        <p className="w-full sm:w-1/2 mx-auto mb-6 px-6 text-center text-white">
          JDFlashcards es una aplicación de tarjetas de memoria que te ayuda a
          memorizar de forma rápida y efectiva. Crea tus propios mazos con la
          información que deseas aprender, personaliza tus tarjetas con texto
          (próximamente imágenes y audio), y estudia a tu ritmo con el algoritmo
          de repetición espaciada.
        </p>
        <div className="text-center">
          <Button buttonType="link" buttonStyle="tertiary" href="/login">Iniciar sesión</Button>
        </div>
      </div>
    </section>
  );
};

export default ViewHome;
