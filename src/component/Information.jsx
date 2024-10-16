import styled from "styled-components";
import rightTopArrow from "../images/up-right-arrow.png";
import { data } from "../data/data";
import { useEffect, useState } from "react";
import pdfCV from "../data/Automation_cv.pdf"
const Information = () => {
  
  const [category, setCategory] = useState("all");
  const Initialprojects = data.project;
  const [projects, setProject] = useState(Initialprojects);
  useEffect(()=>{
    if(category== "all"){
      setProject(Initialprojects)
    }else{
      const filtredProjects = Initialprojects.filter((item)=> item.category.includes(category))
      setProject(filtredProjects)
    }
  },[category])
  return (
    <Informations>
      <section id="about">
        <p>
          I’m a software engineering student, I am passionate about{" "}
          <span className="bold"> full-stack web development, task
          automation, and end-to-end testing.</span>
        </p>
        <p>
          Currently learning RPA, my enthusiasm and willingness to explore new
          solutions illustrate my commitment to innovation in the field of
          computer science.
        </p>
      </section>
      <section id="experience">
        <a href="#" className="item">
          <div className="year">
            <p>7</p>
            <span className="line"></span>
            <p>9/2023</p>
          </div>
          <div className="description">
            <h3 className="jobName">
              Automation of the migration process for Protractor tests to
              Cypress.
              <span className="company">HPS, Casablanca</span>
            </h3>
            <p className="jobDescription">
              Developed a program automating the seamless migration of
              Protractor tests to Cypress, significantly streamlining the
              process, enhancing test quality, and facilitating a smooth
              transition to Cypress.
            </p>
            <div className="languages">
              <ul>
                <li>Javascript</li>
                <li>Cypress</li>
                <li>Java</li>
              </ul>
            </div>
          </div>
        </a>
        <a href="#" className="item">
          <div className="year">
            <p>7</p>
            <span className="line"></span>
            <p>10/2024</p>
          </div>
          <div className="description">
            <h3 className="jobName">
              Development of a vehicle fleet management application
              <span className="company">AnotherBot, Casablanca</span>
            </h3>
            <p className="jobDescription">
              Automation of vehicle management within companies, facilitating the tracking of assignments, maintenance, and location. The application also optimizes the management of drivers, fines, and associated services.
            </p>
            <div className="languages">
              <ul>
                <li>React</li>
                <li>Refine</li>
                <li>ant design</li>
                <li>Spring Boot</li>
                <li>Cypress</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </a>
        <a target="_black" href={pdfCV} className="resume link">
          View Full Résumé
          <span className="arrow">
            <img src={rightTopArrow} alt="" />
          </span>
        </a>
      </section>
      <section id="projects">
        <div className="filter">
          <ul>
            <li onClick={()=>{setCategory("all")}} className={category=="all"? "selected" : ""}>All</li>
            <li onClick={()=>{setCategory("front-end")}} className={category=="front-end"? "selected" : ""}>Front-end</li>
            <li onClick={()=>{setCategory("full-stack")}} className={category=="full-stack"? "selected" : ""}>Full-stack</li>
            <li onClick={()=>{setCategory("testing")}} className={category=="testing"? "selected" : ""}>Testing</li>
            <li onClick={()=>{setCategory("rpa")}} className={category=="rpa"? "selected" : ""}>RPA</li>
          </ul>
        </div>
        {projects.map((project) => {
          return (
            <a target="_blank" href={project.github} className="item">
              <div className="cover">
                <img src={project.image} alt="cover" />
                <div className="status">
                  <p className={project.status == "Completed"? "completed" : ""}>
                    {project.status}
                    </p>
                </div>
              </div>
              <div className="description">
                <h3>
                  {project.name}{" "}
                  <span className="arrow">
                    <img src={rightTopArrow} alt="" />
                  </span>
                </h3>
                <p>{project.description}</p>
                <div className="languages">
                  <ul>
                    {project.languages.split(",").map((language) => {
                      return <li>{language}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </a>
          );
        })}
        
      </section>
    </Informations>
  );
};

const Informations = styled.div`
  grid-column: 2 / 3;
  position: relative;

  span.bold {
    color: rgb(226 232 240);
    font-weight: 500;
  }
  .arrow {
    position: relative;
    &:hover {
      color: #71e5ff;
    }
    img {
      width: 15px;
      margin-left: 10px;
    }
  }
  .link {
    &:hover {
      color: #71e5ff;
      .arrow img {
        position: absolute;
        top: 0;
        width: 10px;
        transition: all 0.3s ease;
      }
    }
  }
  a.item {
    opacity: 1;
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding: 10px;
    border-radius: 10px;
    color: rgb(148 163 184);
    .year {
      margin-right: 20px;
      display: flex;
      align-items: center;
      height: fit-content;
      span.line {
        width: 15px;
        margin: 0 5px;
        height: 1px;
        background-color: rgb(148, 163, 184);
      }
    }
    .description {
      h3 {
        font-weight: 600;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        opacity: 1;
      }
      p {
        margin: 10px 0;
      }
      .languages {
        ul {
          display: flex;
          margin: 20px 0;
          flex-wrap: wrap;
          li {
            color: rgb(94 234 212);
            background: #2dd4bf1a;
            padding: 4px 12px;
            margin-right: 10px;
            margin-bottom: 15px;
            border-radius: 30px;
            font-weight: 500;
          }
        }
      }
    }
    &:hover {
      background: rgba(148, 163, 184, 0.1);
      h3 {
        color: #71e5ff;
      }
      .arrow {
        img {
          position: absolute;
          top: -10px;
          width: 10px;
          transition: all 0.3s ease;
        }
      }
    }
  }
  #about {
    padding: 4em 1em;
  }
  #experience {
    padding: 4em 1em;
  }
  #projects {
    padding: 4em 1em;
    .cover img {
      width: 90%;
    }
  }
  .filter{
    ul {
          display: flex;
          margin: 20px 0;
          flex-wrap: wrap;
          li {
            cursor: pointer;
            color: rgb(94 234 212);
            background: #2dd4bf1a;
            padding: 4px 12px;
            margin-right: 10px;
            margin-bottom: 15px;
            border-radius: 30px;
            font-weight: 500;
            &.selected{
              color:#01241f;
              font-weight: 600;
              background: #2dd4be;
            }
          }
        }
  }
  .status {
    
    p{
    font-weight: 700;
    font-size: 10px;
    text-align: center;
    
  }}
`;

export default Information;
