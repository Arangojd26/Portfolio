import React from "react";
import Navbar from "../../Shared/Navbar/Navbar.component";
import "./Works.css";
import WorkDetail from "../../components/Works/WorkDetail/WorkDetail.component";
import { project_1, project_2, project_3 } from "../../consts/works";
import BackArrow from "../../Shared/BackArrow/BackArrow.component";

const Works = () => {
  return (
    <>
      <Navbar />
      <BackArrow />
      <div className="o-container-scroll">
        <div className="o-container-projects-details">
          {/* <div className="o-title-projects">Projects</div> */}
          <WorkDetail dataWork={project_1} />
          <WorkDetail dataWork={project_2} />
          <WorkDetail dataWork={project_3} />
        </div>
      </div>
    </>
  );
};

export default Works;
