import React from "react";
import { animated } from "react-spring";
import "./StarsParallax.scss";

const transformStars = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

const StarsParallax = ({ props }) => {

  return (
    <animated.div
      className="stars"
      style={({ transform: props.xy.to(transformStars) })}
    />
  );
};

export default StarsParallax;
