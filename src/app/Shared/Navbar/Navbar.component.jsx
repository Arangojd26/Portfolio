import React from "react";
import "./Navbar.scss";
import iconLinkedin from "../../../assets/icons/linkedin.svg";
import iconWhatsapp from "../../../assets/icons/whatsapp.svg";

const Navbar = () => {
  return (
    <header className="o-container-navbar">
      <div className="o-name-navbar">David Arango</div>
      <div className="o-wrap">
        <div className="o-icons">
          <a
            href="https://www.linkedin.com/in/juan-david-arango-rodr%C3%ADguez-9a769419a"
            target="_balnk"
          >
            <img className="o-info-navbar" src={iconLinkedin} alt="linkedin" />
          </a>
          <img className="o-info-navbar" src={iconWhatsapp} alt="whatsapp" />
        </div>
        <div className="o-menu-navbar">Menu</div>
      </div>
    </header>
  );
};

export default Navbar;
