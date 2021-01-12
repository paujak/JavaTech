import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationComponent = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/" onClick={!isNavCollapsed ? handleNavCollapse : null}>
          Švenčių registras
        </Link>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={!isNavCollapsed ? handleNavCollapse : null}>
                Pradžia
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sventes" onClick={!isNavCollapsed ? handleNavCollapse : null}>
                Visos šventės
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin" onClick={!isNavCollapsed ? handleNavCollapse : null}>
                Švenčių administravimas
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div>{props.children}</div>
    </div>
  );
};

export default NavigationComponent;
