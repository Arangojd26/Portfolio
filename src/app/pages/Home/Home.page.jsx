import React from "react";
import { FullPage, Slide } from "react-full-page";
import ContainerProfile from "../../components/Home/ContainerProfile/ContainerProfile.component";
import ContainerWorks from "../../components/Works/ContainerWorks/ContainerWorks.component";
import { controlsProps } from "../../consts/fullpage";
import ContainerAbout from "../../components/About/ContainerAbout/ContainerAbout.component";
import ContainerGetInTouch from "../../components/GetInTouch/ContainerGetInTouch.component";
import ScrollDown from "../../Shared/ScrollDown/ScrollDown.component";
import PropTypes from "prop-types";
import { NavbarContext } from "../../context/NavbarProvider";

const CustomControls = (props) => {
  const { scroll, setScroll } = React.useContext(NavbarContext);

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
    // console.log(scroll);
    let timer = setTimeout(() => scrollToSlide(scroll), 0);
    return () => {
      clearTimeout(timer);
    };
  }, [scrollToSlide, scroll]);

  return (
    <ScrollDown
      onNext={props.onNext}
      scrollToSlide={setScroll}
      getCurrentSlideIndex={props.getCurrentSlideIndex}
    />
  );
};

const Home = () => {
  const { setScroll } = React.useContext(NavbarContext);
  const [visibleSlide, setVisibleSlide] = React.useState(0);
  const [picture, setPicture] = React.useState(0);

  const handleChange = (index) => {
    setPicture(index);
    setScroll(index);
  };

  return (
    <>
      <FullPage
        controls={CustomControls}
        controlsProps={controlsProps}
        afterChange={(e) => setVisibleSlide(e.to)}
        beforeChange={(e) => handleChange(e.to)}
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
    </>
  );
};

export default Home;
