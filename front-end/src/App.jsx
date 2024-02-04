/** @format */

// App.jsx
import { Navigate, Route, Routes } from "react-router-dom";
import StudentLogin from "./components/Login/StudentLogin";
import HomePage from "./views/Home";
import "./App.css";
import RegistroEstudianteFormulario from "./components/Login/RegistroEstudianteFormulario";
import StudentDashboard from "./views/StudentDashboard";
import ResolveExam from "./components/componetsStudent/ResolveExam";
import ResultadosExam from "./components/componetsStudent/ResultadosExam";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route
          path="/register/student"
          element={<RegistroEstudianteFormulario />}
        />
        <Route
          path="/dashboard/student/:studentId"
          element={<StudentDashboard />}
        />
        <Route
          path="/resolveExam/:studentId/:examId"
          element={<ResolveExam />}
        />
        <Route
          path="/results/:studentId/:examId"
          element={<ResultadosExam />}
        />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
