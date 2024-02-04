/** @format */

// /** @format */

// import { useState, useEffect } from "react";
// import axios from "axios";

// const ExamResultsTable = ({ professorId, examId }) => {
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchResults = async () => {
//       try {
//         const response = await axios.get(
//           `/professors/${professorId}/exams/${examId}/results`
//         );
//         setResults(response.data);
//       } catch (error) {
//         console.error("Error fetching exam results:", error);
//       }
//     };

//     fetchResults();
//   }, [professorId, examId]);

//   return (
//     <div>
//       <h2>Resultados del Examen</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Estudiante</th>
//             <th>Respuestas</th>
//             {/* Agrega más encabezados según sea necesario */}
//           </tr>
//         </thead>
//         <tbody>
//           {results.map((result) => (
//             <tr key={result._id}>
//               <td>{result.student.name}</td>
//               <td>
//                 {/* Muestra las respuestas según la estructura de tu modelo */}
//               </td>
//               {/* Agrega más columnas según sea necesario */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ExamResultsTable;
