import React from "react";
import { FullPage, Slide } from "react-full-page";
import ContainerProfile from "../../components/Home/ContainerProfile/ContainerProfile.component";
import Navbar from "../../Shared/Navbar/Navbar.component";
import ContainerWorks from "../../components/Works/ContainerWorks/ContainerWorks.component";
import { controlsProps } from "../../consts/fullpage";
import ContainerAbout from "../../components/About/ContainerAbout/ContainerAbout.component";
import ContainerGetInTouch from "../../components/GetInTouch/ContainerGetInTouch.component";
import ScrollDown from "../../Shared/ScrollDown/ScrollDown.component";
import PropTypes from "prop-types";

const CustomControls = (props) => {
  CustomControls.propTypes = {
    name: PropTypes.string,
    onNext: PropTypes.func.isRequired,
    scrollToSlide: PropTypes.func.isRequired,
    getCurrentSlideIndex: PropTypes.func.isRequired,
  };

  // CustomControls.defaultProps = {
  //   name: "SCROLLDOWN",
  // };

  const { scrollToSlide } = props;

  React.useEffect(() => {
    let timer = setTimeout(() => scrollToSlide(JSON.parse(localStorage.getItem("indexSlide"))), 800);
    return () => {
      clearTimeout(timer);
    };
  }, [scrollToSlide]);

  return (
    <ScrollDown
      onNext={props.onNext}
      scrollToSlide={scrollToSlide}
      getCurrentSlideIndex={props.getCurrentSlideIndex}
    />
  );
};

const Home = () => {
  const [visibleSlide, setVisibleSlide] = React.useState(0);
  const [picture, setPicture] = React.useState(0);

  // React.useEffect(() => {
  //   localStorage.setItem("indexSlide", 0);
  // }, [picture]);

  return (
    <>
      <Navbar />
      <FullPage
        controls={CustomControls}
        controlsProps={controlsProps}
        afterChange={(e) => setVisibleSlide(e.to)}
        beforeChange={(e) => setPicture(e.to)}
      >
        <Slide style={{ background: "#253237", display: "flex" }}>
          <ContainerProfile idPage={visibleSlide} showPicture={picture} />
        </Slide>
        <Slide style={{ background: "#253237", display: "flex" }}>
          <ContainerWorks idPage={visibleSlide} showPicture={picture} />;
        </Slide>
        <Slide style={{ background: "#253237", display: "flex" }}>
          <ContainerAbout idPage={visibleSlide} showPicture={picture} />;
        </Slide>
        <Slide style={{ background: "#253237", display: "flex" }}>
          <ContainerGetInTouch idPage={visibleSlide} showPicture={picture} />
        </Slide>
      </FullPage>
      {/* {visibleSlide !== 3 && <ScrollDown onNext={props.onNext} />} */}
    </>
  );
};

export default Home;
