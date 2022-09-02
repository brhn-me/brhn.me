import React from "react";
import { CertificationItem, ResumeHeading, ResumeSection } from "./resume";


export default function Certifications() {
  return (
    <ResumeSection id="certifications">
      <ResumeHeading>Certifications and Tests</ResumeHeading>
      <CertificationItem
          name="Deep Learning Nanodegree"
          certificate="https://graduation.udacity.com/confirm/EUZD5XY2"
          description="Udacity"
          duration="May 2022"
        />
      <CertificationItem
          name="Scalability & System Design for Developers"
          certificate="https://www.educative.io/verify-certificate/JZmo10CggKJRX58ZJFKZnAJ2EYk3F3"
          description="Educative"
          duration="May 2022"
        />
        <CertificationItem
          name="IELTS"
          certificate="https://www.educative.io/verify-certificate/JZmo10CggKJRX58ZJFKZnAJ2EYk3F3"
          description="7.0 (READING: 7.5, LISTENING: 6.5, WRITING: 6.5, SPEAKING: 7.5)"
          duration="January 2020"
        />

    </ResumeSection>
  )
}

