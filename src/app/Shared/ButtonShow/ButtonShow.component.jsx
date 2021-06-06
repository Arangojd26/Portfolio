import React from "react";
import "./ButtonShow.scss";
import { withRouter } from "react-router-dom";

const ButtonShow = (props) => {
  
  return (
    <div className="o-container-buttonShow">
      <button
        className="o-button-show"
        onClick={() => props.history.push(`/${props.category}`)}
      >
        Show me more
      </button>
    </div>
  );
};

export default withRouter(ButtonShow);
