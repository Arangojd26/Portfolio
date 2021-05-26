import React from "react";

const ButtonProject = ({ type }) => {
  let urlA;
  let classnameA;
  let titleA;

  const urlLowbeat = "https://lowbeat-12107.web.app/";
  const urlLowbeatCode = "https://github.com/Arangojd26/Lowbeat";
  const urlCheeseR = "https://cheese-rescue.netlify.app/";
  const urlCRCode = "https://github.com/Arangojd26/Cheese-Rescue";
  const classBtnSide = "o-btn-site";
  const classBtnCode = "o-btn-code";
  const titleSite = "Visit site";
  const titleCode = "See code";

  const INDEX_BUTTON = {
    "Lowbeat-site": () => urlButton(urlLowbeat, classBtnSide, titleSite),
    "Lowbeat-code": () => urlButton(urlLowbeatCode, classBtnCode, titleCode),
    "Cheese-Rescue-site": () => urlButton(urlCheeseR, classBtnSide, titleSite),
    "Cheese-Rescue-code": () => urlButton(urlCRCode, classBtnCode, titleCode),
  };

  const urlButton = (url, classname, title) => {
    urlA = url;
    classnameA = classname;
    titleA = title;
  };

  INDEX_BUTTON[type]();

  return (
    <a
      className={classnameA}
      href={urlA}
      target="_blank"
      rel="noopener noreferrer"
    >
      {titleA}
    </a>
  );
};

export default ButtonProject;
