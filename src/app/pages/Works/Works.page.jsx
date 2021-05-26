import React from "react";
import Navbar from "../../Shared/Navbar/Navbar.component";
import "./Works.css";
import WorkDetail from "../../components/Works/WorkDetail/WorkDetail.component";
import { project_1, project_2 } from "../../consts/works";

const Works = () => {
  return (
    <>
      <Navbar />
      <div className="o-container-scroll-projects">
        <div className="o-container-projects-details">
          {/* <div className="o-title-projects">Projects</div> */}
          <WorkDetail dataWork={project_1} />
          <WorkDetail dataWork={project_2} />
        </div>
      </div>
    </>
  );
};

export default Works;
