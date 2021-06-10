import React from "react";
import "./BackArrow.css";
import { withRouter } from "react-router-dom";

const BackArrow = (props) => {
  const backPage = () => {
    props.history.push("/");

    setTimeout(() => {
      if (props.type === "works") {
        localStorage.setItem("indexSlide", JSON.stringify(1));
      } else {
        localStorage.setItem("indexSlide", JSON.stringify(2));
      }
    }, 800);
  };

  return (
    <div className="o-back-arrow" onClick={() => backPage()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="34"
        viewBox="0 0 67 34"
        style={{ transform: "translateX(0%)" }}
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="#FFF"
          strokeLinecap="round"
          transform="translate(2 1)"
        >
          <path strokeWidth="2" d="M0,15.5533333 L64,15.5533333"></path>
          <polyline
            strokeWidth="2"
            points="15.556 0 0 15.556 15.556 31.111"
          ></polyline>
        </g>
      </svg>
    </div>
  );
};

export default withRouter(BackArrow);
