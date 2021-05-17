import React from "react";
import { animated } from "react-spring";
import "./StarsParallax.scss";

const transformStars = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`;

const StarsParallax = ({ props }) => {

  return (
    <animated.div
      className="stars"
      style={({ transform: props.xy.to(transformStars) })}
    />
  );
};

export default StarsParallax;
