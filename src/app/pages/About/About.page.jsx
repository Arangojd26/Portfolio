import React from "react";
import BackArrow from "../../Shared/BackArrow/BackArrow.component";
import Navbar from "../../Shared/Navbar/Navbar.component";
import reel from "../../../assets/videos/reel-v1.mp4";
import preview from "../../../assets/images/preview2.jpg";
import iconReact from "../../../assets/icons/react.svg";
import iconSass from "../../../assets/icons/sass.svg";
import iconHtml from "../../../assets/icons/html-5.svg";
import iconCss from "../../../assets/icons/css3.svg";
import iconBS from "../../../assets/icons/bootstrap.svg";
import iconGit from "../../../assets/icons/git.svg";
import "./About.css";
import CardSkills from "../../components/About/CardSkills/CardSkills.component";

const About = () => {
  return (
    <>
      <Navbar />
      <BackArrow />
      <div className="o-container-scroll">
        <div className="o-container-about-details">
          <div className="o-content-about-details">
            <div className="o-who-left">
              <div className="o-content-num">
                <p className="heading-num">01</p>
                <p className="heading-top">WHO I AM</p>
              </div>
            </div>
            <div className="o-who-right">
              <div className="o-content-who">
                <p className="o-who-name">David Arango</p>
                <p className="o-who-text">
                  Hi, I'm Juan David Arango, Multimedia Engineer from the
                  Universidad Autónoma de Occidente, passionate about
                  interacting with technologies on multiple devices. My work
                  focuses on Frontend development, however, I also have a solid
                  background in the backend. As you will see in my professional
                  reel, I am passionate about the deployment of Multimedia
                  Systems that offer value, always with a user-centered design.
                  <br />
                  <br />I characterize myself for being a person with analytical
                  skills and always attentive to the multiple development trends
                  in technology.
                </p>
                <div className="o-who-video">
                  <div className="video-responsive">
                    <video
                      width="853"
                      height="480"
                      src={reel}
                      autoPlay={false}
                      type="video/mp4"
                      controls
                      preload={"preload"}
                      poster={preview}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="o-content-about-details">
            <div className="o-who-left">
              <div className="o-content-num">
                <p className="heading-num">02</p>
                <p className="heading-top">SKILLS</p>
              </div>
            </div>
            <div className="o-who-right">
              <div className="o-content-who">
                <p className="o-who-name">Skill Set</p>
                <div className="o-who-skill-grid">
                  <CardSkills imgCard={iconReact} title={"ReactJS"} />
                  <CardSkills imgCard={iconSass} title={"Sass"} />
                  <CardSkills imgCard={iconHtml} title={"HTML 5"} />
                  <CardSkills imgCard={iconCss} title={"CSS 3"} />
                  <CardSkills imgCard={iconBS} title={"Bootstrap"} />
                  <CardSkills imgCard={iconGit} title={"GIT"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
