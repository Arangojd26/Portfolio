import React from "react";
import ButtonProject from "../ButtonProject/ButtonProject.component";
import "./WorkDetail.css";

const WorkDetail = ({ dataWork }) => {
  const [Colour, setColour] = React.useState(dataWork.color);
  return (
    <div
      className="o-content-project"
      //   style={
      //     dataWork.title === "Lowbeat" ? { flexDirection: "row-reverse" } : null
      //   }
    >
      <div className="o-description-project-detail">
        <h2>{dataWork.title}</h2>
        <p>{dataWork.description}</p>
        <div className="o-container-btn-project">
          <ButtonProject type={dataWork.siteProject} />
          <ButtonProject type={dataWork.codeProject} />
        </div>
      </div>
      <div className="o-container-image-project">
        <div className="grid">
          <figure
            className="effect-sadie"
            onMouseEnter={() => {
              setColour("#fff");
            }}
            onMouseLeave={() => {
              setColour(dataWork.color);
            }}
          >
            <img src={dataWork.imgCard} alt="img12" />
            <figcaption>
              <h2 className="o-span-card" style={{ color: Colour }}>
                {dataWork.spanCard}
              </h2>
              <p>{dataWork.descriptionCard}</p>
              <a href={dataWork.url} target="_blank" rel="noopener noreferrer">
                View more
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;