import React from "react";
import "../Navbar.css";

const NavbarBottom = () => {
  // const toggleClose = () => {
  //   const navBot = document.querySelector(".navbar-bottom");
  //   navBot.classList.remove("menu-open");
  //   navBot.classList.add("menu-closed");
  // };

  const handleClick = () => {
    const navBot = document.querySelector(".navbar-bottom");
    navBot.classList.remove("menu-open");
    navBot.classList.add("menu-closed");
  };

  return (
    <div className="navbar-bottom menu-closed">
      <div className="box">
        <a
          className="nav-link active"
          aria-current="page"
          href="#hero"
          onClick={() => handleClick()}
        >
          <i className="ri-home-line"></i>
          Home
        </a>
        <a className="nav-link" href="#about" onClick={() => handleClick()}>
          <i className="ri-user-3-line"></i>
          About
        </a>
        <a className="nav-link" href="#services" onClick={() => handleClick()}>
          <i className="ri-briefcase-line"></i>
          Services
        </a>
        <a className="nav-link" href="#portfolio" onClick={() => handleClick()}>
          <i className="ri-image-line"></i>
          Portfolio
        </a>
        <a className="nav-link" href="#contact" onClick={() => handleClick()}>
          <i className="ri-chat-3-line"></i>
          Contact
        </a>
      </div>
      <div className="toggle-close" onClick={() => handleClick()}>
        <i className="ri-close-line"></i>
      </div>
    </div>
  );
};

export default NavbarBottom;
