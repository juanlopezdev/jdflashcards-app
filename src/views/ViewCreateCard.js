import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../components/header/Header";
import PageTitle from "../components/pageTitle/PageTitle";
import Textfield from "../components/input/Textfield";
import Button from "../components/button/Button";
import InfoMessage from "../components/messages/InfoMessage";
import Select from "../components/select/Select";
import { saveCard } from "../services/cardService";
import { getSubjectsByUserLogged } from "../services/subjectService";
import constants from "../utils/constants";
import IconHome from "../components/icons/Home";

const ViewCreateCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [subjectsOptions, setSubjectsOptions] = useState([]);
  // Accede al ID de la asignatura desde el estado de navegación
  const subjectId = location.state?.subjectId;

  useEffect(() => {
    document.body.classList.add(
      "bg-gradient-to-r",
      "from-sky-500",
      "to-indigo-500"
    );

    const fetchSubjects = async () => {
      try {
        const data = await getSubjectsByUserLogged();
        setSubjectsOptions(
          data.map((subject) => ({ value: subject.id, label: subject.name }))
        );
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
  }, []);

  const formik = useFormik({
    initialValues: {
      subject_id: subjectId || "",
      question: "",
      answer: "",
    },
    validationSchema: Yup.object({
      subject_id: Yup.string().required("La asignatura es requerida"),
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
        const user = JSON.parse(localStorage.getItem(constants.KEY_USER_DATA));
        const savedCard = await saveCard({ ...values, user_id: user.id });
        console.log(savedCard);
        navigate(`/subject/${values.subject_id}/cards`);
      } catch (error) {
        console.error(error);
        setFieldError("server", "Error al registrar una tarjeta");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <Header />

      <div className="container mx-auto px-4">
        <PageTitle title="Crear tarjeta" />

        <div className="w-full rounded-md bg-white p-4">
          <form onSubmit={formik.handleSubmit}>
            {formik.errors.server && (
              <InfoMessage message={formik.errors.server} type="error" />
            )}

            <p className="mb-4">
              Crea una tarjeta para ✍ aprender y practicar
            </p>

            <div className="mb-4">
              <Select
                label="Asignatura"
                id="subject_id"
                name="subject_id"
                options={subjectsOptions}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject_id}
                error={
                  formik.touched.subject_id && formik.errors.subject_id
                    ? formik.errors.subject_id
                    : null
                }
              />
            </div>

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
                disabled={formik.isSubmitting}
                loading={formik.isSubmitting}
                loadingText="Procesando"
              >
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 pb-5 text-center">
        <Button
          buttonType="link"
          buttonStyle="circleTertiary"
          className="px-5 py-5"
          href="/flashcards"
        >
          <IconHome />
        </Button>
      </div>
    </div>
  );
};

export default ViewCreateCard;
