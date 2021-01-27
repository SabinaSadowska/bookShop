import React from "react";
import { Link } from "react-router-dom";
import "./navigation.sass";

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/">
        Książki
      </Link>
      <Link className="navigation__link" to="/basket">
        Koszyk
      </Link>
      <Link className="navigation__link" to="/form">
        Formularz
      </Link>
    </nav>
  );
}

export default Navigation;
