import React from "react";
import { useSpring } from "react-spring";
import CardParallax from "../CardParallax/CardParallax.component";
import StarsParallax from "../StarsParallax/StarsParallax.component";
import "./ContainerParallax.scss";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const ContainerParallax = ({ idPage, showPicture }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      className="o-container-home-parallax"
      onMouseMove={({ clientX: x, clientY: y }) =>
        set.start({ xy: calc(x, y) })
      }
    >
      <StarsParallax props={props} />
      {showPicture === 0 && idPage === 0 ? (
        <CardParallax props={props} />
      ) : null}
    </div>
  );
};

export default ContainerParallax;
