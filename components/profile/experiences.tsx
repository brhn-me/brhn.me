import React from "react";
import { Contribution, Contributions, Employee, Employment, ExperienceLetterButton, Position, Positions, ResumeHeading, ResumeSection, Skill, Skills } from "./resume";

export default function Experiences() {


  return (
    <ResumeSection id="experiences">
      <ResumeHeading>Experiences</ResumeHeading>
      <Employment>
        <Employee location="Dhaka, Bangladesh">Goava AB, Sweden</Employee>
        <Positions>
          <Position duration="April 2017 - Present">Senior Software Engineer (Data Engineering, Founding SWE)</Position>
        </Positions>
        <Skills>
          <Skill>AWS</Skill>
          <Skill>Deep Learning</Skill>
          <Skill>Elastic Search</Skill>
          <Skill>Java</Skill>
          <Skill>Python</Skill>
          <Skill>Spring Boot</Skill>
          <Skill>Microservices</Skill>
          <Skill>GraphQL</Skill>
        </Skills>
        <Contributions>
          <Contribution title="Data pipeline">
            Developed petabyte scale ETL pipeline for crawling and storing data from millions of sources. Designed
            architecture from scratch and led the project development (with 3 SWEs), served 1K customers within 6 months that
            helped the company secure EU grants.
          </Contribution>
          <Contribution title="Cloud crawler">
            Developed distributed crawler to crawl ten million websites every day.
          </Contribution>
          <Contribution title="ElasticSearch cluster">
            Developed and maintained the architecture for searching and indexing terabytes of data.
          </Contribution>
          <Contribution title="AWS cost optimization">
            Reduced AWS Cloud billing by about 50% by introducing batch data processing.
          </Contribution>
          <Contribution title="Recomendation system">
            Launched Goava Discover, a petabyte-scale recommender service for B2B sales.
          </Contribution>
          <Contribution title="Microservice and API development">
            Created scalable microservices and REST APIs for data pipeline.
          </Contribution>
          <Contribution title="Admin portal">
            Developed the full stack admin portal for automation of sales team using spring boot and react.
          </Contribution>
        </Contributions>
        <ExperienceLetterButton url="/experience-letters/goava" />
      </Employment>

      <Employment>
        <Employee location="Dhaka, Bangladesh">Nilavo Technologies Limited (Biscom Inc., Boston, U.S.A.)</Employee>
        <Positions>
          <Position duration="August 2015 - March 2017">Senior Software Engineer</Position>
          <Position duration="February 2013 - July 2015">Software Engineer</Position>
          <Position duration="April 2011 - January 2013">Junior Software Engineer</Position>
        </Positions>
        <Skills>
          <Skill>Spring</Skill>
          <Skill>Struts</Skill>
          <Skill>Java</Skill>
          <Skill>Java EE</Skill>
          <Skill>Hibernate</Skill>
          <Skill>JPA</Skill>
          <Skill>JavaScript</Skill>
          <Skill>AngularJS</Skill>
          <Skill>MySQL</Skill>
          <Skill>Postgres</Skill>
          <Skill>REST</Skill>
          <Skill>C#</Skill>
          <Skill>ASP.NET</Skill>
        </Skills>
        <Contributions>
          <Contribution title="Major technology upgrade in enterprise application">
            Created web-based cross-browser multi-threaded file transfer library to send files larger than 100+gb.
            It replaced the old java applet-based library that only supported megabytes of non-resumable transfer.
          </Contribution>
          <Contribution title="Introduced resumable file transfer in encrypted data">
            Implemented file download pause/resume support for encrypted files by implementing random access in the
            java input stream by using block-by-block decryption of AES.
          </Contribution>
          <Contribution title="High availability file system design">
            Developed (lead the product development with 2 other junior SWE) a hierarchical file system using SQL and
            java to support high availability. Developed complete file system frontend tree explorer user interface
            from scratch using AngularJS.
          </Contribution>
          <Contribution title="Large file compression">
            Implemented GZ file compression in java to compress large files in the server.
          </Contribution>
          <Contribution title="Audit logging">
            Developed architecture of audit logging module with log versioning support using reflection.
          </Contribution>
          <Contribution title="Security layer architecture">
            Added proper permission check and validation in business logic using template pattern.
          </Contribution>
        </Contributions>
        <ExperienceLetterButton url="/experience-letters/nilavo" />
      </Employment>

    </ResumeSection>
  )
}