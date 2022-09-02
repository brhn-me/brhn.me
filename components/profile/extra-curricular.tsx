import React from "react";
import { ExtraCurricularDetails, ExtraCurricularItem, ResumeHeading, ResumeSection } from "./resume";


export default function ExtraCurricular() {
  return (
    <ResumeSection id="extra-curricular">
      <ResumeHeading>Extra Curricular</ResumeHeading>
      <ExtraCurricularItem title="CENTER FOR RESEARCH & CONSULTANCY (CRTC), SUST">
        <ExtraCurricularDetails duration="2007 - 2011">ASSISTANT SOFTWARE PROGRAMMER</ExtraCurricularDetails>
      </ExtraCurricularItem>
      <ExtraCurricularItem title="SUST OPEN SOURCE NETWORK, SUST">
        <ExtraCurricularDetails duration="2009 - 2010">ASSISTANT GENERAL SECRETARY</ExtraCurricularDetails>
      </ExtraCurricularItem>
      <ExtraCurricularItem title="CODESPRINT, BDOSN">
        <ExtraCurricularDetails duration="2008">PHONETIC BANGLA TYPING BROWSER PLUGIN</ExtraCurricularDetails>
      </ExtraCurricularItem>
      <ExtraCurricularItem title="WORKSHOPS CONDUCTED">
        <ExtraCurricularDetails duration="2009 - 2010">OBJECT ORIENTED PROGRAMMING (JAVA)</ExtraCurricularDetails>
        <ExtraCurricularDetails duration="2009 - 2010">WEB DEVELOPMENT (JAVASCRIPT, PHP)</ExtraCurricularDetails>
        <ExtraCurricularDetails duration="2009 - 2010">OPEN SOURCE AND LINUX</ExtraCurricularDetails>
        <ExtraCurricularDetails duration="2007 - 2008">Flash 2D Animation</ExtraCurricularDetails>
      </ExtraCurricularItem>
    </ResumeSection>
  )
}