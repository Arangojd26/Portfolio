import React from "react";
import ButtonShow from "../../../Shared/ButtonShow/ButtonShow.component";
import ContainerDescription from "../../../Shared/ContainerDescription/ContainerDescription.component";
import ContainerParallax from "../../Home/ContainerParallax/ContainerParallax.component";
import Description from "../../Home/Description/Description.component";
import imgAbout from "../../../../assets/images/AboutMe.png";
import { useSpring, animated } from "react-spring";
import "./ContainerAbout.scss";

const title = "About Me";
const subtitle = (
  <>
    I love technology, design, <br /> and science.
  </>
);

const ContainerAbout = ({ idPage, showPicture }) => {
  const stylesAstronaut = useSpring({
    loop: { reverse: true },
    config: { duration: 1300 },
    from: { y: 0 },
    to: { y: 15 },
  });

  return (
    <div className="o-container-profile">
      {idPage === 2 && (
        <ContainerDescription>
          <Description title={title} subtitle={subtitle} />
          <ButtonShow />
        </ContainerDescription>
      )}
      <div className="o-container-image-profile">
        <ContainerParallax idPage={idPage} showPicture={showPicture} />
        {idPage === 2 && (
          <animated.div
            className="o-container-image-about"
            style={stylesAstronaut}
          >
            <img className="o-img-about" src={imgAbout} alt="about" />
          </animated.div>
        )}
      </div>
    </div>
  );
};

export default ContainerAbout;
