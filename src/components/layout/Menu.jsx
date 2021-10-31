import React from "react";

import { Link } from "react-router-dom";

import "./Menu.css";

const Menu = (props) => {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/param/Diogo">Param #01</Link>
          </li>
          <li>
            <Link to="/param/Mayara">Param #02</Link>
          </li>
          <li>
            <Link to="/fundaments">Fundaments</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
