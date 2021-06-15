import React from "react";
import "./Menu.css";
import { withRouter } from "react-router-dom";
import { NavbarContext } from "../../../context/NavbarProvider";

const Menu = (props) => {
  const { setScroll } = React.useContext(NavbarContext);
  const { setShowMenu } = props;

  const handleLink = (link) => {
    setShowMenu(false);
    setTimeout(() => {
      setShowMenu(true);
    }, 100);

    switch (link) {
      case "HOME":
        localStorage.setItem("indexSlide", JSON.stringify(0));
        props.history.push("/");
        setScroll(0);
        break;
      case "WORKS":
        localStorage.setItem("indexSlide", JSON.stringify(1));
        props.history.push("/works");
        setScroll(1);
        break;
      case "ABOUT ME":
        localStorage.setItem("indexSlide", JSON.stringify(2));
        props.history.push("/about");
        setScroll(2);
        break;
      case "CONTACT":
        localStorage.setItem("indexSlide", JSON.stringify(3));
        props.history.push("/");
        setScroll(3);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>
      <div className="wrapper">
        <div className="o-content-links">
          <h2 onClick={() => handleLink("HOME")}>HOME</h2>
          <h2 onClick={() => handleLink("WORKS")}>WORKS</h2>
          <h2 onClick={() => handleLink("ABOUT ME")}>ABOUT ME</h2>
          <h2 onClick={() => handleLink("CONTACT")}>CONTACT</h2>
        </div>
      </div>
    </>
  );
};

export default withRouter(Menu);
