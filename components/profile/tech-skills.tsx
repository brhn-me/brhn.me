import React from "react";
import { DevIcon, DevIcons, ResumeHeading, ResumeSection } from "./resume";

export default function TechSkills() {


  return (
    <ResumeSection id="skills">
      <ResumeHeading>Skills</ResumeHeading>
      <ul className="tech-skills mb-3">
        <li><strong>Languages: </strong>Java, Python, JavaScript, NodeJS, SQL, C#</li>
        <li><strong>Databases: </strong>Relational (MySQL, Postgres, MSSQL), NoSQL (MongoDB, DynamoDB)</li>
        <li><strong>Fundamentals: </strong>Algorithms and Data Structures, Design Patterns, OOP, Event-Driven Architecture</li>
        <li><strong>Cloud, Library & Frameworks: </strong>AWS, Spring Boot, Hibernate, ElasticSearch, Microservices, CQRS, Redis, Hadoop</li>
        <li><strong>Machine Learning: </strong>Deep learning, PyTorch, NumPy, Pandas, Tensorflow, Jupyter</li>
        <li><strong>API Development: </strong>Rest, GraphQL, gRPC, Web Services</li>
        <li><strong>Frontend: </strong>React, NextJS, AngularJS, BootStrap, HTML, CSS</li>
        <li><strong>DevOps: </strong>Docker, Git, Linux, Bash, CI-CD, Jenkins</li>
      </ul>
      <div className="sub-heading mb-3">Most Frequently used</div>
      <DevIcons>
        <DevIcon icon="java" title="Java" />
        <DevIcon icon="javascript" title="JavaScript" />
        <DevIcon icon="python" title="Python" />
        <DevIcon icon="spring" title="Spring" />
        <DevIcon icon="aws" title="AWS" />
        <DevIcon icon="nodejs" title="NodeJS" />
        <DevIcon icon="react" title="React" />
        <DevIcon icon="mysql" title="MySQL" />
        <DevIcon icon="mongodb" title="MongoDB" />
        <DevIcon icon="git" title="Git" />
      </DevIcons>
    </ResumeSection>
  )
}