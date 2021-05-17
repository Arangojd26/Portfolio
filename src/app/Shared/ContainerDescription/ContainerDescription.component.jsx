import React from "react";
import "./ContainerDescription.scss";

const ContainerDescription = (props) => {
  const { children } = props;
  return <div className="o-container-description">{children}</div>;
};

export default ContainerDescription;
