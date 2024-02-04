/** @format */

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistroEstudianteFormulario = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Crear la solicitud al backend para registrar al estudiante
      const response = await axios.post(
        "http://localhost:3000/students/auth/register",
        {
          name,
          username,
          password,
        }
      );
      navigate(`/login/student`);
      console.log(response.data);
      // Manejar la respuesta del servidor como sea necesario
    } catch (error) {
      console.error("Error al registrar al estudiante:", error.message);
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    }
  };

  return (
    <div className="flex bg-white rounded-lg  flex-col justify-center px-6 py-12 lg:px-8 m-5">
      <div className=" flex justify-center">
        <img src="/LOGO.png" width={300} />
      </div>
      <form
        className=" sm:mx-auto sm:w-full sm:max-w-sm"
        onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900 mt-5">
            Nombre:
          </label>
          <input
            className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="block text-sm font-medium leading-6 text-gray-900 mt-5">
            Nombre de usuario:
          </label>
          <input
            className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="block text-sm font-medium leading-6 text-gray-900 mt-5">
            Contraseña:
          </label>
          <input
            className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="flex w-full justify-center rounded-md mt-5 bg-blue-600 
            px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          type="submit">
          Registrar Estudiante
        </button>
      </form>
    </div>
  );
};

export default RegistroEstudianteFormulario;
