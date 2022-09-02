import React from "react";
import { AwardItem, AwardProject, ResumeHeading, ResumeSection } from "./resume";


export default function Awards() {
  return (
    <ResumeSection id="awards">
      <ResumeHeading>Awards</ResumeHeading>
      <AwardProject name="Pipilika Search Engine">
        <AwardItem year="2011">National Collegiate Software Contest (NCSC) | 1st Prize</AwardItem>
        <AwardItem year="2010">Digital Innovative Fair | 1st Prize</AwardItem>
      </AwardProject>
      <AwardProject name="Paperless Admission System">
        <AwardItem year="2010">mBillionth Award, South Asia</AwardItem>
      </AwardProject>
    </ResumeSection>
  )
}