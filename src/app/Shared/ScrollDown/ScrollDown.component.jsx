import React from "react";
import "./Scrolldown.css";

const ScrollDown = ({ onNext, scrollToSlide, getCurrentSlideIndex }) => {
  const currentSlideIndex = getCurrentSlideIndex();

  React.useEffect(() => {
    // console.log(currentSlideIndex);
    localStorage.setItem("indexSlide", currentSlideIndex)
  }, [currentSlideIndex]);

  return (
    <p
      className="o-scrollDown"
      onClick={currentSlideIndex !== 3 ? onNext : () => scrollToSlide(0)}
    >
      {currentSlideIndex !== 3 ? "SCROLLDOWN" : "HOME"}
    </p>
  );
};

export default ScrollDown;
