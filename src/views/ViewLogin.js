import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../components/button/Button";
import IconLogin from "../components/icons/login";
import Textfield from "../components/input/Textfield";
import { login } from "../services/authService";

const ViewLogin = () => {
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
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El correo electrónico no es válido")
        .required("El correo electrónico es requerido"),
      password: Yup.string()
        .required("La contraseña es requerida")
        .min(4, "La contraseña debe tener al menos 4 caracteres"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      setSubmitting(true);
      try {
        const { token } = await login(values.email, values.password);
        localStorage.setItem("jdfc-token", token);
      } catch (error) {
        setFieldError("server", "Correo electrónico o contraseña inválidos");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="container grid place-items-center h-screen px-4 mx-auto">
      <div className="flex flex-col sm:flex-row w-full lg:w-1/2 mx-auto shadow-2xl rounded">
        <div
          className="
          bg-logo-flashcards
          bg-cover
          bg-center
          w-full
          rounded-s
          h-52
          sm:w-1/3
          sm:h-auto"
        ></div>
        <form
          className="w-full sm:w-2/3 p-4 bg-white"
          onSubmit={formik.handleSubmit}
        >
          {formik.errors.server && (
            <div className="p-4 mb-2 rounded bg-red-500 text-white text-sm">
              {formik.errors.server}
            </div>
          )}

          <h1 className="text-2xl font-bold mb-1">JD Flashcards</h1>
          <p className="mb-4">Ingresa a tu cuenta</p>
          <div className="mb-4">
            <Textfield
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese su correo electrónico"
              label="Correo"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
            />
          </div>
          <div className="mb-4">
            <Textfield
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              label="Contraseña"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
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
              <IconLogin />
              <span className="ps-2">Ingresar</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewLogin;
