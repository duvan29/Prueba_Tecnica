/** @format */

// ResolveExam.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResolveExam = () => {
  const [exam, setExam] = useState(null);
  const [answers, setAnswers] = useState({});
  const { studentId, examId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener el examen por su ID al cargar el componente
    axios
      .get(`http://localhost:3000/students/${studentId}/view-exam/${examId}`)
      .then((response) => {
        setExam(response.data);

        // Inicializar el estado de respuestas con valores predeterminados (por ejemplo, la primera opción de cada pregunta)
        const initialAnswers = {};
        response.data.questionsWithPoints.forEach((question) => {
          const questionId = question.question._id;
          const firstOptionId = question.question.options[0]._id;
          initialAnswers[questionId] = firstOptionId;
        });
        setAnswers(initialAnswers);
      })
      .catch((error) => {
        console.error("Error obteniendo datos del examen:", error);
      });
  }, [studentId, examId]);

  const handleAnswerChange = (questionId, selectedOptionId) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOptionId,
    }));
  };

  const handleSubmit = () => {
    // Verificar si todas las preguntas han sido respondidas
    const isEveryQuestionAnswered =
      Object.keys(answers).length === exam.questionsWithPoints.length;

    if (!isEveryQuestionAnswered) {
      alert("Asegúrate de responder todas las preguntas antes de enviar.");
      return;
    }

    // Obtener un array de objetos con questionId y selectedOptionId
    const answersArray = Object.keys(answers).map((questionId) => ({
      questionId,
      selectedOptionId: answers[questionId],
    }));

    // Enviar las respuestas al servidor
    axios
      .post(
        `http://localhost:3000/students/${studentId}/submitExam/${examId}`,
        { answers: answersArray }
      )
      .then((response) => {
        // Manejar la respuesta del servidor, por ejemplo, redirigir a una página de resultados
        console.log("Respuestas enviadas:", response.data);
        navigate(`/results/${studentId}/${examId}`);
      })
      .catch((error) => {
        console.error("Error al enviar respuestas:", error);
      });
  };

  if (!exam) {
    return <p>Cargando examen...</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between my-5 bg-blue-100 p-4 rounded-lg">
        <h1 className="text-4xl font-bold">Tests Disponibles</h1>
      </div>
      <form>
        {exam.questionsWithPoints.map((question, index) => (
          <div key={index}>
            <p className="font-bold text-large-light">
              {question.question.text}
            </p>
            {question.question.options.map((option, optionIndex) => (
              <label key={optionIndex}>
                <input
                  className="border-primary border-2 rounded-md mx-4 my-2"
                  type="radio"
                  name={`question-${index}`}
                  value={option.text}
                  checked={answers[question.question._id] === option._id}
                  onChange={() =>
                    handleAnswerChange(
                      question.question._id,
                      option._id // Cambiado para enviar el ID en lugar del valor
                    )
                  }
                />
                {option.text}
              </label>
            ))}
          </div>
        ))}
        <button
          className="bg-primary px-2 py-2 rounded-lg w-full text-medium-light font-semibold mt-5"
          type="button"
          onClick={handleSubmit}>
          Enviar Respuestas
        </button>
      </form>
    </div>
  );
};

export default ResolveExam;
