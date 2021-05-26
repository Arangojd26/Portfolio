import React from "react";
import { FullPage, Slide } from "react-full-page";
import ContainerProfile from "../../components/Home/ContainerProfile/ContainerProfile.component";
import Navbar from "../../Shared/Navbar/Navbar.component";
import ContainerWorks from "../../components/Works/ContainerWorks/ContainerWorks.component";
import { controlsProps } from "../../consts/fullpage";
import ContainerAbout from "../../components/About/ContainerAbout/ContainerAbout.component";
import ContainerGetInTouch from "../../components/GetInTouch/ContainerGetInTouch.component";

const Home = () => {
  const [visibleSlide, setVisibleSlide] = React.useState(0);
  const [picture, setPicture] = React.useState(0);
  //   const [loadedContent, setLoadedContent] = React.useState(0);

  //   React.useEffect(() => {
  //     let timer = setTimeout(() => setLoadedContent(visibleSlide), 350);
  //     // console.log(visibleSlide);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [visibleSlide]);

  //   const renderPerPage = () => {
  //     switch (visibleSlide) {
  //       case 0:
  //         if (loadedContent === 0) {
  //           return <ContainerProfile idPage={visibleSlide} />;
  //         } else {
  //           break;
  //         }

  //       case 1:
  //         if (loadedContent === 1) {
  //           return <ContainerWorks />;
  //         } else {
  //           break;
  //         }
  //       default:
  //         break;
  //     }
  //   };

  return (
    <>
      <Navbar />
      <FullPage
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
    </>
  );
};

export default Home;
