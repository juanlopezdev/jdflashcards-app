import React from "react";
import Button from "../button/Button";
import IconLogout from "../icons/Logout";
import { logout } from "../../services/authService";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("jdfc-user"));

  return (
    <header className="p-4 flex justify-between items-center bg-black">
      <div className="text-white">
        Bienvenido <b>{ user.name }</b>
      </div>
      <Button
        buttonStyle="primary"
        className="flex items-center"
        onClick={logout}
      >
        <span className="pe-2">Salir</span>
        <IconLogout />
      </Button>
    </header>
  );
};

export default Header;
