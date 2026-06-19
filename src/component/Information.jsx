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
  I am a software engineering graduate specializing in software quality assurance, test automation, robotic process automation (RPA), and full-stack development. I have hands-on experience in designing and implementing automated tests for both UI and API layers.
</p>

<p>
  I work with technologies such as Cypress and Mocha to ensure application reliability, and I actively contribute to validating complex systems in the banking and payment domain, including tokenization and card processing flows.
</p>

<p>
  Passionate about development, automation, and quality engineering, I am continuously improving my skills in building scalable applications, RPA workflows, and robust automated testing solutions within Agile environments.
</p>
      </section>
      <section id="experience">
        <a href="#" className="item">
    <div className="year">
      <p>2025</p>
      <span className="line"></span>
      <p>Now</p>
    </div>

    <div className="description">
      <h3 className="jobName">
        QA Automation Engineer
        <span className="company">HPS, Casablanca</span>
      </h3>

      <p className="jobDescription">
        Designed, executed, and maintained manual and automated functional tests to ensure application quality.
        Developed UI and API automated tests with validation of responses, events, and database data.
        Analyzed nightly test executions to detect regressions and investigate failures.
        Participated in regression testing campaigns and contributed to feature validation in the payment and banking domain.
      </p>

      <div className="languages">
        <ul>
          <li>Cypress</li>
          <li>Mocha</li>
          <li>JavaScript</li>
          <li>Postman</li>
          <li>Kafka</li>
        </ul>
      </div>
    </div>
  </a>
  <a href="#" className="item">
    <div className="year">
      <p>2025</p>
      <span className="line"></span>
      <p>Feb - Aug</p>
    </div>

    <div className="description">
      <h3 className="jobName">
        Test Automation Intern – POWERCARD V4
        <span className="company">HPS, Casablanca</span>
      </h3>

      <p className="jobDescription">
        Designed and executed automated tests for the POWERCARD V4 project.
        Validated APIs, business flows, and application events.
        Participated in regression testing and analyzed results to ensure system stability and reliability.
      </p>

      <div className="languages">
        <ul>
          <li>Cypress</li>
          <li>Mocha</li>
          <li>Kafka</li>
          <li>Postman</li>
        </ul>
      </div>
    </div>
  </a>

  <a href="#" className="item">
    <div className="year">
      <p>2024</p>
      <span className="line"></span>
      <p>Jul - Oct</p>
    </div>

    <div className="description">
      <h3 className="jobName">
        Full Stack Developer Intern
        <span className="company">AnotherBot, Casablanca</span>
      </h3>

      <p className="jobDescription">
        Developed a vehicle fleet management application.
        Implemented both frontend and backend functionalities to manage vehicles, drivers, maintenance, and related services.
        Implemented automated tests to ensure application quality and reliability.
      </p>

      <div className="languages">
        <ul>
          <li>React</li>
          <li>Refine</li>
          <li>Spring Boot</li>
          <li>Ant Design</li>
          <li>Cypress</li>
          <li>Postman</li>
        </ul>
      </div>
    </div>
  </a>
        <a href="#" className="item">
  <div className="year">
    <p>2023</p>
    <span className="line"></span>
    <p>Sep</p>
  </div>

  <div className="description">
    <h3 className="jobName">
      Automation of Protractor to Cypress Test Migration
      <span className="company">HPS, Casablanca</span>
    </h3>

    <p className="jobDescription">
      Developed an automation solution to migrate existing Protractor test suites to Cypress, streamlining the migration process, improving test reliability, and ensuring a smooth transition between testing frameworks.
    </p>

    <div className="languages">
      <ul>
        <li>JavaScript</li>
        <li>Cypress</li>
        <li>Java</li>
      </ul>
    </div>
  </div>
</a>
{/*         <a target="_black" href={pdfCV} className="resume link">
          View Full Résumé
          <span className="arrow">
            <img src={rightTopArrow} alt="" />
          </span>
        </a> */}
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
