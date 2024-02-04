/** @format */

// ProfessorLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfessorLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      // Realiza la solicitud al backend para autenticar al profesor
      const response = await axios.post(
        "http://localhost:3000/professors/auth/login",
        {
          username,
          password,
        }
      );
      navigate(`/dashboard/professor/${username}`);
      console.log(response);
      setError(null); // Reinicia el estado de error si la autenticación fue exitosa
    } catch (error) {
      console.error("Error de autenticación:", error);
      // Maneja el error de autenticación
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex bg-white rounded-lg  flex-col justify-center px-6 py-12 lg:px-8 m-5">
      <div className=" flex justify-center">
        <img src="/LOGO.png" width={300} />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Inicia sesión Maestro
        </h2>
      </div>
      <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
        <label className="block text-sm font-medium leading-6 text-gray-900 mt-5">
          Username:{" "}
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
        <label className="block text-sm font-medium leading-6 text-gray-900 mt-5">
          Password:{" "}
        </label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="my-2 text-blue-600 hover:underline focus:outline-none focus:underline">
          {showPassword ? "Ocultar" : "Mostrar"} contraseña
        </button>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="flex w-full justify-center rounded-md bg-blue-600 mt-1  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default ProfessorLogin;
