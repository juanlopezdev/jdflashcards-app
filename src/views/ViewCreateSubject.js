import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../components/header/Header";
import PageTitle from "../components/pageTitle/PageTitle";
import Textfield from "../components/input/Textfield";
import Button from "../components/button/Button";
import imgFolder from "../assets/images/folder-jdflashcards.png";
import { saveSubject } from "../services/subjectService";
import constants from "../utils/constants";
import InfoMessage from "../components/messages/InfoMessage";
import IconHome from "../components/icons/Home";

const ViewCreateSubject = () => {
  const navigate = useNavigate();

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

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre de asignatura es requerido"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      setSubmitting(true);
      try {
        const user = JSON.parse(localStorage.getItem(constants.KEY_USER_DATA));
        const savedSubject = await saveSubject({ ...values, user_id: user.id });
        console.log(savedSubject);
        navigate("/flashcards");
      } catch (error) {
        console.log(error);
        setFieldError("server", "Error al registrar una asignatura");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <Header />

      <div className="container mx-auto px-4">
        <PageTitle title="Crear nueva asignatura" image={imgFolder} />
        <div className="w-full rounded-md bg-white p-4">
          <form onSubmit={formik.handleSubmit}>
            {formik.errors.server && (
              <InfoMessage message={formik.errors.server} type="error" />
            )}

            <p className="mb-4">
              Crea una asignatura para luego agregarles tus tarjetas
            </p>

            <div className="mb-4">
              <Textfield
                type="text"
                id="name"
                name="name"
                placeholder="Ingrese el nombre de la asignatura"
                label="Nombre de asignatura"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                error={
                  formik.touched.name && formik.errors.name
                    ? formik.errors.name
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
        <Button buttonType="link" buttonStyle="circleTertiary" className="px-5 py-5" href="/flashcards">
          <IconHome />
        </Button>
      </div>
    </div>
  );
};

export default ViewCreateSubject;
