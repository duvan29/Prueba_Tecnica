/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function StudentDashboard() {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { studentId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/students/${studentId}`)
      .then((response) => {
        setStudentData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error obteniendo datos del estudiante:", error);
        setLoading(false);
      });
  }, [studentId]);

  console.log(studentData);

  return (
    <div className="flex flex-col container mx-auto">
      <div className="flex flex-row justify-between my-5 bg-blue-100 p-4 rounded-lg">
        <h1 className="text-4xl font-bold">Tests Disponibles</h1>
      </div>
      {!loading && studentData?.exams.length > 0 && (
        <div>
          <ul className="w-[400px] rounded-lg bg-secondary bg-opacity-25 hover:opacity-none cursor-pointer p-10 mt-5">
            {studentData.exams.map((exam) => (
              <li key={exam._id}>
                <Link
                  className="flex gap-10 text-large-light"
                  to={`/resolveExam/${studentData._id}/${exam}`}>
                  {/* Aquí colocas el contenido del enlace */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-12">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                  Resolver Test
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {loading && <p>Cargando...</p>}

      {!loading && !studentData?.exams.length && (
        <p>Aún no tienes asignados tests.</p>
      )}

      <div className="flex flex-row justify-between my-5 bg-blue-100 p-4 rounded-lg">
        <h1 className="text-4xl font-bold">Resultados Disponibles</h1>
      </div>

      {!loading && !studentData?.answers.length && (
        <p>Aún no has proporcionado respuestas a los tests asignados.</p>
      )}

      {!loading && studentData?.answers.length > 0 && (
        <div>
          <h3>Respuestas proporcionadas:</h3>
          <ul>
            {studentData.answers.map((answer) => (
              <li key={answer._id}>{answer.text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;
