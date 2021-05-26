import React from "react";
// import ButtonShow from "../../Shared/ButtonShow/ButtonShow.component";
import ContainerDescription from "../../Shared/ContainerDescription/ContainerDescription.component";
import ContainerParallax from "../Home/ContainerParallax/ContainerParallax.component";
import Description from "../Home/Description/Description.component";
import imgGetInTouch from "../../../assets/images/GetInTouch2.png";
import imgMan from "../../../assets/images/man.png";
import "./ContainerGetInTouch.scss";

const title = "Get In Touch";
const subtitle = (
  <>
    arangojd26@gmail.com <br /> Linkedin.
  </>
);

const ContainerGetInTouch = ({ idPage, showPicture }) => {
  return (
    <div className="o-container-profile">
      {idPage === 3 && (
        <ContainerDescription>
          <Description title={title} subtitle={subtitle} />
          {/* <ButtonShow /> */}
        </ContainerDescription>
      )}
      <div className="o-container-image-profile">
        <ContainerParallax idPage={idPage} showPicture={showPicture} />
        {idPage === 3 && (
          <div className="o-container-image-getintouch">
            <img className="o-img-getintouch" src={imgGetInTouch} alt="getintouch" />
            <img className="o-man-getintouch" src={imgMan} alt="man" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContainerGetInTouch;
