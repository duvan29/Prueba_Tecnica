/** @format */

import { Link } from "react-router-dom";
import Nav from "../components/Nav/Nav";
// import ExamResultsTable from "../components/componentsProfessor/ExamResultsTable";

function ProfessorDashboard() {
  return (
    <>
      <div className=" flex">
        <Nav />
        <div className=" flex flex-col container mx-auto">
          <div className="flex flex-row justify-between my-5 bg-blue-100 p-4 rounded-lg">
            <h1 className=" text-4xl font-bold">Resultados Test</h1>
          </div>
          <div className=" flex flex-wrap justify-center     xs:gap-10 gap-2 mt-2 xs:mt-5">
            <Link to="/createStudent">
              <div className="xs:w-[180px] xs:h-[180px] bg-primary hover:text-white h-[98px] w-[98px] xs:p-5 hover:text-aqua-400 justify-center items-center flex flex-col text-center  p-2 rounded-lg">
                {" "}
                <p className=" text-normal-light xs:text-large-light">
                  Crear Alumno
                </p>
              </div>
            </Link>
            <Link to="/createTest">
              <div className="xs:w-[180px] xs:h-[180px] bg-primary hover:text-white h-[98px] w-[98px] xs:p-5 hover:text-aqua-400 justify-center items-center flex flex-col text-center  p-2 rounded-lg">
                <p className=" text-normal-light xs:text-large-light">
                  Crear Test
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfessorDashboard;
