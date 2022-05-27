import React from "react";
import "./sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <form className="container-fluid justify-content-start">
        <Link to="/">
          <a className="btn btn-outline-success me-2" type="a">
            Employee
          </a>
        </Link>
        <Link to="/dep">
          <a className="btn btn-outline-success me-2" type="a">
            Department
          </a>
        </Link>
      </form>
    </nav>
  );
}

export default Sidebar;
