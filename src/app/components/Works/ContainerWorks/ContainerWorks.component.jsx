import React from "react";
import ContainerDescription from "../../../Shared/ContainerDescription/ContainerDescription.component";
import ContainerParallax from "../../Home/ContainerParallax/ContainerParallax.component";
import Description from "../../Home/Description/Description.component";
import ButtonShow from "../../../Shared/ButtonShow/ButtonShow.component";
import imgProjects from "../../../../assets/images/Projects2.png";
import "./ContainerWorks.scss";

const title = "Projects";
const subtitle = "web applications";

const ContainerWorks = ({ idPage, showPicture }) => {
  return (
    <div className="o-container-profile">
      {idPage === 1 && (
        <ContainerDescription>
          <Description title={title} subtitle={subtitle} />
          <ButtonShow />
        </ContainerDescription>
      )}
      <div className="o-container-image-profile">
        <ContainerParallax idPage={idPage} showPicture={showPicture} />
        {idPage === 1 && (
          <div className="o-container-image-projects">
            <img className="o-img-projects" src={imgProjects} alt="projects" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContainerWorks;
