/*import React, { useState } from "react";
import UserServiceAPI from "../services/userServiceAPI";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await UserServiceAPI.login(user, password);
      const { token, idRol } = await response.json();
      // Almacenar el token de sesión en una cookie o en el almacenamiento local
      localStorage.setItem("token", token);
      if (idRol === 1) {
        window.location.href = "/admin";
      } else if (idRol === 2) {
        window.location.href = `/user/:id`;
      } else {
        setError("No se puede identificar el rol del usuario");
      }
    } catch (error) {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input
          type="text"
          value={user}
          onChange={(event) => setUser(event.target.value)}
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
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;*/
