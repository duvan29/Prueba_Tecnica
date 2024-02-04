/** @format */

// ResultadosExam.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResultadosExam = () => {
  const [resultados, setResultados] = useState(null);
  const { studentId, examId } = useParams();

  useEffect(() => {
    // Obtener los resultados del examen por ID al cargar el componente
    axios
      .get(`http://localhost:3000/students/${studentId}/results/${examId}`)
      .then((response) => {
        setResultados(response.data);
      })
      .catch((error) => {
        console.error("Error obteniendo resultados del examen:", error);
      });
  }, [studentId, examId]);

  if (!resultados) {
    return <p>Cargando resultados...</p>;
  }

  // Lógica para asignar colores y emojis según el rango de puntuación
  let bgColor = "";
  let emoji = "";

  if (resultados.totalPoints < 40) {
    bgColor = "bg-red-500";
    emoji = "😞";
  } else if (resultados.totalPoints >= 40 && resultados.totalPoints < 60) {
    bgColor = "bg-yellow-500";
    emoji = "😐";
  } else {
    bgColor = "bg-green-500";
    emoji = "😃";
  }

  return (
    <div className="container mx-auto">
      <div
        className={`flex flex-row justify-between my-5 ${bgColor} p-4 rounded-lg`}>
        <h1 className="text-4xl font-bold">Resultados del Examen</h1>
      </div>
      <div className="flex justify-center gap-5">
        <div
          className={`py-20 px-5 rounded-md  flex text-large-light ${bgColor} bg-opacity-25`}>
          <p>
            Preguntas Correctas:{" "}
            <span className=" text-display-light ">
              {resultados.correctAnswers}
            </span>
          </p>
        </div>
        <div
          className={`py-20 px-5 rounded-md flex text-large-light  ${bgColor} bg-opacity-25`}>
          <p>
            Preguntas Incorrectas:{" "}
            <span className=" text-display-light ">
              {resultados.incorrectAnswers}
            </span>
          </p>
        </div>
        <div
          className={`py-20 px-5 rounded-md flex text-large-light  ${bgColor} bg-opacity-25`}>
          <p>
            Puntos Totales:{" "}
            <span className=" text-display-light ">
              {resultados.totalPoints}/100 {emoji}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultadosExam;
