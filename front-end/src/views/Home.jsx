/** @format */

import { Link } from "react-router-dom";

// Home.jsx
function HomePage() {
  return (
    <div className=" flex flex-col justify-center items-center h-screen bg-[#72C0F5]">
      <img src="/LOGO.png" alt="logo" />
      <h1 className=" text-8xl text-white my-10 font-bold">Bienvenido</h1>
      <div className=" flex flex-wrap justify-between    xs:gap-5 gap-2 mt-2 xs:mt-5">
        {/* <Link to="/login/professor">
          <div className="xs:w-[180px] xs:h-[180px] hover:text-primary h-[98px] w-[98px] xs:p-5 hover:text-aqua-400 justify-center items-center flex flex-col text-center bg-white p-2 rounded-lg">
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h56 64 16c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64H576V256H384V224H320v48c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H243.1 177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
            </svg>
            <p className=" text-normal-light xs:text-large-light">
              Soy Maestro
            </p>
          </div>
        </Link> */}
        <Link to="/login/student">
          <div className="xs:w-[180px] xs:h-[180px] hover:text-primary h-[98px] w-[98px] xs:p-5 hover:text-aqua-400 justify-center items-center flex flex-col text-center bg-white p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
            </svg>
            <p className=" text-normal-light xs:text-large-light">
              Soy Estudiante
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
