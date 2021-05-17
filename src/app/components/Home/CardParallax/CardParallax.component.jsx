import React from "react";
import { animated } from "react-spring";
import "./CardParallax.scss";

const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 20}px,${y / 4 - 180}px,0)`;

const CardParallax = ({ props }) => {
  return (
    <>
      <animated.div
        className="card1"
        style={{ transform: props.xy.to(trans1) }}
      />
      <animated.div
        className="card2"
        style={{ transform: props.xy.to(trans2) }}
      />
    </>
  );
};

export default CardParallax;
