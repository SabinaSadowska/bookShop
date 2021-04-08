import React from "react";
import { Link } from "react-router-dom";
import "./navigation.sass";

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/">
        Books
      </Link>
      <Link className="navigation__link" to="/basket">
        Cart
      </Link>
      <Link className="navigation__link" to="/form">
        Form
      </Link>
    </nav>
  );
}

export default Navigation;
