import React, { useState, useEffect } from "react";
import UserHandlerAPI from "../api/UserHandlerAPI";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [idRol, setIdRol] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const userData = await UserHandlerAPI.loadUser(id);
      setToken(userData.token);
      setIdRol(userData.idRol);
    }
    fetchUser();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/login/cliente", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const { token, idRol } = await response.json();
    setToken(token);
    setIdRol(idRol);
    if (idRol === 1) {
      // redirigir al usuario a la vista de administrador
    } else if (idRol === 2) {
      // redirigir al usuario a la vista de perfil de cliente
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default Login;
