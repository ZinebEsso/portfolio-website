import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import linkdlin from "../images/linkedin.png"
import github from "../images/github.png"
import email from "../images/email.png"
const Line = styled.div`
  width: 2.5em;
  background-color: white;
  height: 1px;
  transition: width 0.3s ease;
  @media screen and (max-width: 1035px) {
    transition: width 0.3s ease;
    width: 1.5em;
  }
`;

const Description = ({ isFixed }) => {
  const [active, setActive] = useState("about");
  const descriptionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const descriptionSection = descriptionRef.current;
      if (descriptionSection) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const { offsetTop, offsetHeight } = descriptionSection;

        const aboutSection = document.getElementById("about");
        const experienceSection = document.getElementById("experience");
        const projectsSection = document.getElementById("projects");

        const aboutOffsetTop = aboutSection.offsetTop;
        const experienceOffsetTop = experienceSection.offsetTop;
        const projectsOffsetTop = projectsSection.offsetTop;

        if (scrollTop >= offsetTop && scrollTop < offsetTop + offsetHeight/2.5) {
          setActive("about");
        } else if (scrollTop >= aboutOffsetTop && scrollTop < experienceOffsetTop) {
          setActive("experience");
        } else if (scrollTop >= experienceOffsetTop && scrollTop < projectsOffsetTop) {
          setActive("experience");
        } else if (scrollTop >= projectsOffsetTop) {
          setActive("projects");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <DescriptionStyle ref={descriptionRef}>
      <div>
        <h1>Essoussi Zineb</h1>
        <h2>4th Year Software Engineering student</h2>
       
<p>
Passionate about full-stack web development, task automation, and end-to-end testing. 
        </p>
        <div className="social-media">
        <a target="_blank" href="https://www.linkedin.com/in/zineb-essoussi-5301581b6/"><img src={linkdlin} alt="Linkdling" /></a>
        <a  target="_blank" href="https://github.com/DesignToWebsite"><img src={github} alt="Github" /></a>
        <a  target="_blank" href="mailto:esso.zineb@gmail.com"><img src={email} alt="Email" /></a>
      </div>
      </div>
      <div className={`nav ${isFixed ? 'fixed' : ''}`}>
        <ul>
          <li>
            <a
              onClick={() => setActive("about")}
              className={active === "about" ? "active" : ""}
              href="#about"
            >
              <Line />
              <span>ABOUT</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => setActive("experience")}
              className={active === "experience" ? "active" : ""}
              href="#experience"
            >
              <Line />
              <span>EXPERIENCE</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => setActive("projects")}
              className={active === "projects" ? "active" : ""}
              href="#projects"
            >
              <Line />
              <span>PROJECTS</span>
            </a>
          </li>
        </ul>
      </div>

      
    </DescriptionStyle>
  );
};

const DescriptionStyle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 50%;
  padding-left: 5em;
  padding-right: 5em;
  @media screen and (max-width: 1035px) {
    position: relative;
    width: 100%;
    flex-direction: column-reverse;
    padding: 2em;
  }
  h1 {
    font-size: 3em;
    font-weight: 700;
  }
  h2 {
    font-size: 1.5em;
    font-weight: 400;
  }
  p {
    margin: 15px 0;
  }
  .nav {
    position: relative;
    ul {
      @media screen and (max-width: 1035px) {
        display: flex;
        position: fixed;
        top: 0;
        z-index: 10;
        left: 0;
        background: #040c18;
        width: 100%;
        padding: 10px 15px 15px 0;
        justify-content: end;
        li{
          margin-right: 15px;
          a span{
            margin-left: 5px !important;
          }
        }
      }
      li {
        margin-top: 15px;
        a {
          display: flex;
          align-items: center;
          position: relative;
          span {
            margin-left: 10px;
          }
          &:hover,
          &.active {
            opacity: 1;
            ${Line} {
              width: 4em;
              @media screen and (max-width: 1035px) {
                width: 2.4em;
              }
            }
          }
        }
      }
    }
  }
  .social-media{
    a{
      opacity: 1;
      &:hover{
        opacity: .5;
      }
      margin-right: 15px;
    }
  }
`;

export default Description;
