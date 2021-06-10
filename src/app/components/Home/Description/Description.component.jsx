import React from "react";

import "./Description.scss";

const Description = (props) => {
  //   const stylesName = useSpring({
  //     // loop: { reverse: true },
  //     config: { duration: 1000 },
  //     from: { x: -600 },
  //     to: { x: 0 },
  //   });

  //   const stylesDescription = useSpring({
  //     // loop: { reverse: true },
  //     config: { duration: 1200 },
  //     from: { x: -600 },
  //     to: { x: 0 },
  //   });

  return (
    <div className="o-container-name-description">
      <div className="o-name-description">{props.title}</div>
      <div className="o-description">{props.subtitle}</div>
    </div>
  );
};

export default Description;
