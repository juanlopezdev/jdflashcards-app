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

const getCard = async (cardId) => {
  try {
    const response = await fetch(`${API_URL}/cards/${cardId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(
          constants.KEY_TOKEN_NAME
        )}`,
      },
    });

    if (!response.ok) throw new Error("Error al obtener la tarjeta");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const saveCard = async (card) => {
  try {
    const response = await fetch(`${API_URL}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(
          constants.KEY_TOKEN_NAME
        )}`,
      },
      body: JSON.stringify(card),
    });

    if (!response.ok) throw new Error("Error al guardar la asignatura");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateCard = async (card) => {
  try {
    const response = await fetch(`${API_URL}/cards/${card.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(
          constants.KEY_TOKEN_NAME
        )}`,
      },
      body: JSON.stringify(card),
    });

    if (!response.ok) throw new Error("Error al actualizar la tarjeta");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getCard, getCardsBySubject, saveCard, updateCard };
