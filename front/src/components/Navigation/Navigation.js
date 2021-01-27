import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Książki</Link>
      <Link to="/basket">Koszyk</Link>
      <Link to="/form">Formularz</Link>
    </nav>
  );
}

export default Navigation;
