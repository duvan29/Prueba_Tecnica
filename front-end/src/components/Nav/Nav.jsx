/** @format */

import { Link, useLocation, useParams } from "react-router-dom";

const Nav = () => {
  const [inactiveLink, activeLink] = [
    "flex gap-2 p-1 hover:bg-white hover:px-5 hover:py-4 hover:ml-[-20px] text-black hover:rounded-lg",
    "flex gap-2 p-1 px-5 py-4 ml-[-30px] text-black rounded-lg bg-white",
  ];

  const location = useLocation();
  const pathname = location.pathname;
  const username = useParams().username;

  return (
    <aside className="top-0 text-gray-500 h-screen bg-blue-100  z-10 lg:h-screen w-full lg:static lg:w-[300px] transition-all">
      <div className=" lg:bg-blue-100 bg-opacity-50 lg:min-w-[250px] xl:w-[300px] lg:w-[300px] px-10 h-full">
        <nav className="flex flex-col justify-between gap-8 pt-52 md:pt-32 ">
          <img src="/LOGO.png" alt="logo" />
          <Link
            to="/dashboard/professor"
            className={
              pathname === `/dashboard/professor/${username}`
                ? activeLink
                : inactiveLink
            }>
            Panel de control
          </Link>
          <Link
            to="/records"
            className={pathname === "/records" ? activeLink : inactiveLink}>
            Estudiantes
          </Link>
          <Link
            to="/products"
            className={
              pathname && pathname.includes("/products")
                ? activeLink
                : inactiveLink
            }>
            Test
          </Link>
          <div className=" ">
            <Link
              to="/"
              className={pathname === "/" ? activeLink : inactiveLink}>
              Cerrar Sesión
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Nav;
