import React, { Component } from "react";

const NavBar = ({ totalNumbers }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <span className="badge badge-pill badge-secondary">{totalNumbers}</span>
      </a>
    </nav>
  );
};

export default NavBar;
