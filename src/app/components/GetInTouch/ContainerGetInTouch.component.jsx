import React from "react";
// import ButtonShow from "../../Shared/ButtonShow/ButtonShow.component";
import ContainerDescription from "../../Shared/ContainerDescription/ContainerDescription.component";
import ContainerParallax from "../Home/ContainerParallax/ContainerParallax.component";
import Description from "../Home/Description/Description.component";
import imgGetInTouch from "../../../assets/images/GetInTouch2.png";
import imgMan from "../../../assets/images/man.png";
import iconLinkedin from "../../../assets/icons/linkedin.svg";
import iconWhatsapp from "../../../assets/icons/whatsapp.svg";
import "./ContainerGetInTouch.scss";

const title = "Get In Touch";
const subtitle = (
  <>
    <a href="mailto:kuon609@gmail.com">arangojd26@gmail.com</a>
  </>
);

const ContainerGetInTouch = ({ idPage, showPicture }) => {
  return (
    <div className="o-container-profile">
      {idPage === 3 && (
        <ContainerDescription>
          <Description title={title} subtitle={subtitle} />
          <div className="o-icons-getintouch">
            <a href="https://www.linkedin.com/in/juan-david-arango-rodr%C3%ADguez-9a769419a" target="_balnk">
              <img className="o-info-get" src={iconLinkedin} alt="linkedin" />
            </a>
            <img className="o-info-get" src={iconWhatsapp} alt="whatsapp" />
          </div>
        </ContainerDescription>
      )}
      <div className="o-container-image-profile">
        <ContainerParallax idPage={idPage} showPicture={showPicture} />
        {idPage === 3 && (
          <div className="o-container-image-getintouch">
            <img
              className="o-img-getintouch"
              src={imgGetInTouch}
              alt="getintouch"
            />
            <img className="o-man-getintouch" src={imgMan} alt="man" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContainerGetInTouch;
