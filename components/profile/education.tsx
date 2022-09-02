import React from "react";
import { EducationItem, ResumeHeading, ResumeSection } from "./resume";


export default function Education() {
  return (
    <ResumeSection id="education">
      <ResumeHeading>Education</ResumeHeading>
      <EducationItem
        institute="Shahjalal University of Science and Technology (SUST)"
        location="Sylhet, Bangladesh"
        degree="BS in Computer Science &amp; Engineering"
        duration="November 2006 - March 2011"
      />

    </ResumeSection>
  )
}

