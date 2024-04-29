import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Menu.css';

function Menu() {
  return (
    <>
      <nav className="menu flex justify-center">
        <ul className="flex">
          <li>
            <Link to="/" className="block p-5 text-white" title="Home">Home</Link>
          </li>
          <li>
            <Link to="/team" className="block p-5 text-white" title="Plantilla">Plantilla</Link>
          </li>
          <li>
            <Link to="/seasons" className="block p-5 text-white" title="Temporadas">Temporadas</Link>
          </li>
          <li>
            <Link to="/transfers" className="block p-5 text-white" title="Transferencias">Transferencias</Link>
          </li>
          <li>
            <Link to="/youths" className="block p-5 text-white" title="Cantera">Cantera</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Menu;