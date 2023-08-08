import React, { Fragment, useState } from "react";
import "./Navbar.css";
import Logo from "../../../assets/img/icons/logo.svg";
import NavbarBottom from "./Child/NavbarBottom";

const Navbar = () => {
  const toggleOpen = () => {
    let navBot = document.querySelector(".navbar-bottom");
    navBot.classList.remove("menu-closed");
    navBot.classList.add("menu-open");
  };
  return (
    <Fragment>
      <nav className="navbar navbar-transparent navbar-expand-lg navbar-left">
        <div className="container">
          <a className="navbar-brand" href="#hero">
            <img src={Logo} alt="Logo" />
            <span>Misbah</span>
          </a>
          <div className="toggle" onClick={() => toggleOpen()}>
            <i className="ri-menu-4-line"></i>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#hero">
                Home
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#services">
                Services
              </a>
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <NavbarBottom />
    </Fragment>
  );
};

export default Navbar;
