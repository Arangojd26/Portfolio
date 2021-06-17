import React from "react";
import "./Navbar.scss";
import iconLinkedin from "../../../assets/icons/linkedin.svg";
import iconWhatsapp from "../../../assets/icons/whatsapp.svg";
import { withRouter } from "react-router-dom";
import Menu from "./Menu/Menu.component";
import { NavbarContext } from "../../context/NavbarProvider";

const Navbar = (props) => {
  const { setScroll } = React.useContext(NavbarContext);

  const [showMenu, setShowMenu] = React.useState(true);

  const goHome = () => {
    props.history.push("/");
    localStorage.setItem("indexSlide", JSON.stringify(0));
    setScroll(0);
  };

  return (
    <header className="o-container-navbar">
      <div className="o-name-navbar" onClick={() => goHome()}>
        David Arango
      </div>
      <div className="o-wrap">
        <div className="o-icons">
          <a
            href="https://www.linkedin.com/in/juan-david-arango-rodr%C3%ADguez-9a769419a"
            target="_balnk"
          >
            <img className="o-info-navbar" src={iconLinkedin} alt="linkedin" />
          </a>
          <a href="https://wa.me/573178822924" target="_balnk">
            <img className="o-info-navbar" src={iconWhatsapp} alt="whatsapp" />
          </a>
        </div>
        <div className="o-menu-navbar">
          {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}
        </div>
      </div>
    </header>
  );
};

export default withRouter(Navbar);
