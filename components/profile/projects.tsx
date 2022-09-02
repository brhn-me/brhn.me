import React from "react";
import Project from "../../interfaces/project";
import { ProjectItem, ResumeHeading, ResumeSection } from "./resume";

type Props = {
  projects: Project[]
}



export default function Projects({ projects }: Props) {


  return (
    <ResumeSection id="projects">
      <ResumeHeading>Projects</ResumeHeading>
      <div className="container-fluid min-vh-100 d-flex flex-column p-0">
        <div className="projects row">
          {
            projects.map((project) => (
              <ProjectItem key={project.slug} project={project} />
            ))
          }
        </div>
      </div>

    </ResumeSection>
  )
}