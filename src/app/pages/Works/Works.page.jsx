import React from "react";
import "./Works.css";
import WorkDetail from "../../components/Works/WorkDetail/WorkDetail.component";
import { project_1, project_2, project_3 } from "../../consts/works";
import BackArrow from "../../Shared/BackArrow/BackArrow.component";

const Works = () => {
  return (
    <>
      <div className="o-container-scroll">
        <div className="o-container-projects-details">
          <BackArrow type={"works"} />
          <WorkDetail dataWork={project_1} />
          <WorkDetail dataWork={project_2} />
          <WorkDetail dataWork={project_3} />
        </div>
      </div>
    </>
  );
};

export default Works;
