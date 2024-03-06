import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../components/header/Header";
import PageTitle from "../components/pageTitle/PageTitle";
import Textfield from "../components/input/Textfield";
import Button from "../components/button/Button";
import InfoMessage from "../components/messages/InfoMessage";
import IconClose from "../components/icons/Close";
import { getCard, updateCard } from "../services/cardService";

const ViewEditCard = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const [card, setCard] = useState(null);

  const formik = useFormik({
    initialValues: {
      question: "",
      answer: "",
    },
    validationSchema: Yup.object({
      question: Yup.string()
        .required("La pregunta es requerida")
        .max(255, "La pregunta no debe exceder los 255 caracteres"),
      answer: Yup.string()
        .required("La respuesta es requerida")
        .max(255, "La pregunta no debe exceder los 255 caracteres"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      setSubmitting(true);
      try {
        await updateCard({
          ...values,
          id: cardId,
        });
        navigate(`/subject/${card.subject_id}/cards`);
      } catch (error) {
        console.error(error);
        setFieldError("server", "Error al actualizar una tarjeta");
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const data = await getCard(cardId);
        setCard(data);

        formik.resetForm({
          values: { question: data.question, answer: data.answer },
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchCard();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardId]);

  const handleCloseClick = () => {
    navigate(`/subject/${card.subject_id}/cards`);
  }

  return (
    <div>
      <Header />

      <div className="container mx-auto px-4">
        <PageTitle title="Editar tarjeta" />

        <div className="w-full rounded-md bg-white p-4">
          <form onSubmit={formik.handleSubmit}>
            {formik.errors.server && (
              <InfoMessage message={formik.errors.server} type="error" />
            )}

            <div className="mb-4">
              <Textfield
                type="text"
                id="question"
                name="question"
                placeholder="Ingrese la pregunta o concepto"
                label="Pregunta, concepto o palabra ❓"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.question}
                error={
                  formik.touched.question && formik.errors.question
                    ? formik.errors.question
                    : null
                }
              />
            </div>
            <div className="mb-4">
              <Textfield
                type="text"
                id="answer"
                name="answer"
                placeholder="Ingrese la respuesta o significado"
                label="Respuesta o significado 💬"
                multiline={true}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.answer}
                error={
                  formik.touched.answer && formik.errors.answer
                    ? formik.errors.answer
                    : null
                }
              />
            </div>
            <div>
              <Button
                buttonType="submit"
                buttonStyle="primary"
                className="flex"
                disabled={formik.isSubmitting || !formik.dirty}
                loading={formik.isSubmitting}
                loadingText="Procesando"
              >
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 pb-5 flex justify-center items-center">
        <Button buttonStyle="circleTertiary" className="px-5 py-5 ml-2" onClick={handleCloseClick}>
          <IconClose />
        </Button>
      </div>
    </div>
  );
};

export default ViewEditCard;
