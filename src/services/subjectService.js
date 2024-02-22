import constants from "../utils/constants";

const API_URL = constants.API_URL;

const getSubjectsByUserLogged = async () => {
  try {
    const response = await fetch(`${API_URL}/user/subjects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(
          constants.KEY_TOKEN_NAME
        )}`,
      },
    });

    if (!response.ok) throw new Error("Error al obtener las asignaturas");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const saveSubject = async (subject) => {
  try {
    const response = await fetch(`${API_URL}/subjects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(
          constants.KEY_TOKEN_NAME
        )}`,
      },
      body: JSON.stringify(subject),
    });

    if (!response.ok) throw new Error("Error al guardar la asignatura");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}



export { getSubjectsByUserLogged, saveSubject };
