/** @format */

import { useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";

const CrearExamenFormulario = () => {
  const [title, setTitle] = useState("");
  const [questionsWithPoints, setQuestionsWithPoints] = useState([
    {
      question: {
        text: "",
        options: [
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
        ],
      },
      points: 0,
    },
  ]);

  const handleAddQuestion = () => {
    if (questionsWithPoints.length < 10) {
      setQuestionsWithPoints((prevQuestions) => [
        ...prevQuestions,
        {
          question: {
            text: "",
            options: [
              { text: "", isCorrect: false },
              { text: "", isCorrect: false },
              { text: "", isCorrect: false },
              { text: "", isCorrect: false },
            ],
          },
          points: 0,
        },
      ]);
    }
  };

  const handleQuestionTextChange = (index, value) => {
    const updatedQuestions = [...questionsWithPoints];
    updatedQuestions[index].question.text = value;
    setQuestionsWithPoints(updatedQuestions);
  };

  const handleOptionChange = (index, optionIndex, value) => {
    const updatedQuestions = [...questionsWithPoints];
    updatedQuestions[index].question.options[optionIndex].text = value;
    setQuestionsWithPoints(updatedQuestions);
  };

  const handlePointsChange = (index, value) => {
    const updatedQuestions = [...questionsWithPoints];
    updatedQuestions[index].points = value;
    setQuestionsWithPoints(updatedQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Verificar que haya exactamente 10 preguntas
      if (questionsWithPoints.length !== 10) {
        console.error("Debe haber exactamente 10 preguntas.");
        return;
      }

      // Verificar que la suma total de puntos no sea superior a 100
      const totalPoints = questionsWithPoints.reduce(
        (sum, q) => sum + q.points,
        0
      );
      if (totalPoints > 100) {
        console.error("La suma total de puntos no puede ser superior a 100.");
        return;
      }

      // Crear la solicitud al backend para crear el examen
      const response = await axios.post("http://localhost:3000/exams/create", {
        title,
        questionsWithPoints,
      });

      console.log(response.data);
      // Manejar la respuesta del servidor como sea necesario
    } catch (error) {
      console.error("Error al crear el examen:", error.message);
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    }
  };

  return (
    <div className=" flex">
      <Nav />
      <form
        className=" container mx-auto p-10  flex flex-col overflow-y-auto"
        onSubmit={handleSubmit}>
        <div className=" flex flex-col">
          <label className=" font-bold text-large-light">
            Título del Examen:
          </label>
          <input
            className=" border-primary border-2 rounded-md px-4 py-2 "
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <h3>Preguntas con Puntos:</h3>
        {questionsWithPoints.map((q, index) => (
          <div className=" flex flex-col" key={index}>
            <label>Texto de la Pregunta:</label>
            <input
              className=" border-primary border-2 rounded-md px-4 py-2 "
              type="text"
              value={q.question.text}
              onChange={(e) => handleQuestionTextChange(index, e.target.value)}
            />

            {q.question.options.map((option, optionIndex) => (
              <div className=" flex flex-col" key={optionIndex}>
                <label>Opción {optionIndex + 1}</label>
                <input
                  className=" border-primary border-2 rounded-md px-4 py-2 "
                  type="text"
                  value={option.text}
                  onChange={(e) =>
                    handleOptionChange(index, optionIndex, e.target.value)
                  }
                />
              </div>
            ))}
            <div className=" flex flex-col">
              <label>Puntos:</label>
              <input
                className=" border-primary border-2 rounded-md px-4 py-2 "
                type="number"
                value={q.points}
                onChange={(e) =>
                  handlePointsChange(index, parseInt(e.target.value, 10))
                }
              />
            </div>
          </div>
        ))}
        <div className=" flex gap-5 justify-center">
          <button
            className=" bg-primary w-full mt-2 px-2 py-2"
            type="button"
            onClick={handleAddQuestion}>
            Agregar Pregunta
          </button>

          <button className=" bg-primary w-full mt-2 px-2 py-2" type="submit">
            Crear Examen
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearExamenFormulario;
