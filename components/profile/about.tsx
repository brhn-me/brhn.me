import React from "react";
import SocialLinks from "./social-links";
import { KeyPoint, KeyPoints, ResumeSection, ResumeSummary, ResumeTitle } from "./resume";

export default function About() {
  return (
    <ResumeSection id="about">
      <ResumeTitle><span className="lite">K H M</span> BURHAN <span className="lite">UDDIN</span></ResumeTitle>
      <ResumeSummary>
        A full-stack software engineer. A continuous learner who loves to work on the edges of the latest technologies.
      </ResumeSummary>
      <KeyPoints>
        <KeyPoint>Built first-ever Bengali search engine during undergrad, 1M funding from multinational telecom (Telenor).</KeyPoint>
        <KeyPoint>Founding senior SWE at a high-growth AI startup, shipped products within 6 months.</KeyPoint>
        <KeyPoint>Experienced in developing enterprise java applications, data engineering, and ETL data pipelines from scratch.</KeyPoint>
        <KeyPoint>Worked with AWS cloud technologies and developed highly scalable microservices and APIs.</KeyPoint>
        <KeyPoint>Profound understanding of algorithms, data structures, OOP, design patterns, and system design.</KeyPoint>
      </KeyPoints>
      <SocialLinks />
    </ResumeSection>
  )
}