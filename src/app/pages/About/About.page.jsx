import React from "react";
import BackArrow from "../../Shared/BackArrow/BackArrow.component";
import reel from "../../../assets/videos/reel-v1.mp4";
import preview from "../../../assets/images/preview2.jpg";
import iconReact from "../../../assets/icons/react.svg";
import iconSass from "../../../assets/icons/sass.svg";
import iconHtml from "../../../assets/icons/html-5.svg";
import iconCss from "../../../assets/icons/css3.svg";
import iconBS from "../../../assets/icons/bootstrap.svg";
import iconGit from "../../../assets/icons/git.svg";
import iconJavascript from "../../../assets/icons/javascript.svg";
import CardSkills from "../../components/About/CardSkills/CardSkills.component";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="o-container-scroll">
        <div className="o-container-about-details">
          <BackArrow type={"about"} />
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
                  <br />I have two years of experience working with javascript
                  and 1 years with ReactJS
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
                      // preload={"preload"}
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
                  <CardSkills imgCard={iconJavascript} title={"Javascript"} />
                </div>
              </div>
            </div>
          </div>
          <footer className="o-footer">
            <a href="mailto:davidarango.ro@gmail.com">davidarango.ro@gmail.com</a>
            <a
              href="https://www.linkedin.com/in/juan-david-arango-rodr%C3%ADguez-9a769419a"
              target="_balnk"
            >
              Linkedin
            </a>
          </footer>
        </div>
      </div>
    </>
  );
};

export default About;
