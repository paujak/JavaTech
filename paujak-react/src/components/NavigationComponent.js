import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ServicesContext from "./ServicesContext"

const NavigationComponent = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/" onClick={!isNavCollapsed ? handleNavCollapse : null}>
          Photo Shop
        </Link>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={!isNavCollapsed ? handleNavCollapse : null}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={!isNavCollapsed ? handleNavCollapse : null}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin" onClick={!isNavCollapsed ? handleNavCollapse : null}>
                Admin Panel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help/alas" onClick={!isNavCollapsed ? handleNavCollapse : null}>
                Help
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/change-user" onClick={!isNavCollapsed ? handleNavCollapse : null}>
                Change user
              </Link>
            </li>
          </ul>
        </div>
        {/* <div>
          <ServicesContext.Consumer>
            {(value) => <span>Hello, {value.userName}</span>}
          </ServicesContext.Consumer>
        </div> */}
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
