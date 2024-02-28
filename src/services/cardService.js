import constants from "../utils/constants";

const API_URL = constants.API_URL;

const getCardsBySubject = async (subjectId) => {
  try {
    const response = await fetch(`${API_URL}/cards/subject/${subjectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(
          constants.KEY_TOKEN_NAME
        )}`,
      },
    });

    if (!response.ok) throw new Error("Error al obtener las tarjetas");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getCardsBySubject };
