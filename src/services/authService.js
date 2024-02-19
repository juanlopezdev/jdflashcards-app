import constants from "../utils/constants";

const API_URL = constants.API_URL;

const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error("Error en la autenticación");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const logout = async () => {
  try {
    const response = await fetch(`${API_URL}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(constants.KEY_TOKEN_NAME)}`,
      }
    });

    if (!response.ok) throw new Error("Error al cerrar sesión");

    localStorage.removeItem(constants.KEY_TOKEN_NAME);
    window.location.href = "/";
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { login, logout };
