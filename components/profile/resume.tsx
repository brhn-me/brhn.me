import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Project from "../../interfaces/project";
import Moment from "react-moment";

export function ResumeSection(props) {
  return <section className="resume-section p-3 p-lg-5 d-flex d-column flex-column" id={props.id}>
    <div className="my-auto">
      {props.children}
    </div>
  </section>;
}

export function ResumeTitle(props) {
  return <h1 className="resume-title">{props.children}</h1>;
}

export function ResumeHeading(props) {
  return <h2 className="mb-5">{props.children}</h2>;
}

export function ResumeSummary(props) {
  return <p className="mb-5">{props.children}</p>
}


export function KeyPoints(props) {
  return <ul className="key-points">{props.children}</ul>;
}

export function KeyPoint(props) {
  return <li className="key-point">{props.children}</li>;
}



export function Skills(props) {
  return <ul className="tags skills">{props.children}</ul>;
}

export function Skill(props) {
  return <li className="tag skill">{props.children}</li>
}

export function Employment(props) {
  return (
    <div className="employement resume-item d-flex flex-column flex-md-row mb-5">
      <div className="resume-content mr-auto">{props.children}</div>
    </div>)
}


export function ResearchItem(props) {
  return (
    <div className="research resume-item d-flex flex-column flex-md-row mb-5">
      <div className="resume-content mr-auto">{props.children}</div>
    </div>)
}

export function ResearchName(props) {
  return (
    <div className="research-name d-flex justify-content-between mb-3">
      <h3 className="research-title mb-0">{props.children}</h3>
      <div className="research-duration mb-0 d-none d-lg-block">{props.duration}</div>
    </div>

  )
}

export function Employee(props) {
  return (
    <div className="employee d-flex justify-content-between">

      <h3 className="employee-name mb-0">{props.children}</h3>
      <div className="employee-location mb-0 d-none d-lg-block"><FontAwesomeIcon className="icon" icon={faLocationDot} />{props.location}</div>
    </div>

  )
}



export function Positions(props) {
  return (
    <ul className="positions mb-3">{props.children}</ul>
  )
}

export function Position(props) {
  return (
    <li className="position d-flex justify-content-between">
      <div className="sub-heading">{props.children}</div>
      <div className="sub-heading duration d-none d-md-block">{props.duration}</div>
    </li>
  )
}

export function Contributions(props) {
  return (
    <ul className="contributions mb-3">{props.children}</ul>
  )
}

export function Contribution(props) {
  let title = null;
  if (props.title) {
    title = <strong>{props.title}: </strong>
  }
  return (
    <li className="contribution">
      {title}{props.children}
    </li>
  )
}

export function DevIcon(props) {
  return <li className="list-inline-item" title={props.title}>
    <i className={'devicons devicon-' + props.icon + '-plain'}></i>
  </li>
}

export function DevIcons(props) {
  return <ul className="tech-icons list-inline list-icons">{props.children}</ul>
}


export function RelatedLink(props) {
  return <li><a target="_blank" href={props.url}>{props.children}</a></li>
}

export function RelatedLinkButton(props) {
  let icon = null;
  if (props.icon) {
    icon = <FontAwesomeIcon className="icon" icon={props.icon} />
  }
  return (
    <a target="_blank" href={props.url} className="related-link-btn btn btn-outline-success">
      {props.children}
      {icon}
    </a>
  )

  return <li><a target="_blank" href={props.url}>{props.children}</a></li>
}

export function RelatedLinks(props) {
  return (
    <div className="mb-3">
      <h3 className="sub-heading mb-3">Related Links: </h3>
      <ul className="related-links">
        {props.children}
      </ul>
    </div>
  )
}

export function ProjectItem(props) {
  const { project } = props;
  return (
    <div className="col-md-6 p-3">
      <div className="project card">
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{ }</h6>
          <p className="card-text">{project.excerpt}</p>
          <Skills>
            {
              project.techs.map((tech) => (
                <Skill key={tech}>{tech}</Skill>
              ))
            }
          </Skills>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between">
          <span className="">
            <a target="_blank" href={project.repo} className="card-link text-muted">Repository</a>
          </span>
          <span className="project-date"><Moment fromNow>{project.date}</Moment></span>
        </div>
      </div>
    </div>
  )
}

export function EducationItem(props) {
  return (
    <div className="education resume-item mb-5">
      <div className="resume-content mr-auto">
        <div className="institute d-flex justify-content-between">
          <h3 className="mb-0">{props.institute}</h3>
          <div className="location mb-0 d-none d-lg-block"><FontAwesomeIcon className="icon" icon={faLocationDot} />{props.location}</div>
        </div>
        <div className="degree d-flex justify-content-between">
          <div className="sub-heading">{props.degree}</div>
          <div className="sub-heading duration d-none d-md-block">{props.duration}</div>
        </div>
      </div>
    </div>
  )
}


export function CertificationItem(props) {
  return (
    <div className="certification resume-item">
      <div className="resume-content mr-auto mb-2">
        <div className=" d-flex justify-content-between">
          <h3 className="certification-name mb-0">{props.name}</h3>
          <div className="duration mb-0 d-none d-lg-block">{props.duration}</div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="sub-heading">{props.description}</div>
        </div>
      </div>
    </div>
  )
}

export function AwardItem(props) {
  return (
    <div className="award-item d-flex justify-content-between mb-0">
      <div className="award-info sub-heading mb-0">{props.children}</div>
      <div className="award-year mb-0 d-none d-lg-block">{props.year}</div>
    </div>
  )
}

export function AwardProject(props) {
  return (
    <div className="award mb-5">
      <h3 className="award-project mb-0">{props.name}</h3>
      {props.children}
    </div>
  )
}

export function ExtraCurricularDetails(props) {
  return (
    <div className="extra-curricular-details d-flex justify-content-between mb-0">
      <div className="extra-curricular-info sub-heading mb-0">{props.children}</div>
      <div className="extra-curricular-duration mb-0 d-none d-lg-block">{props.duration}</div>
    </div>
  )
}

export function ExtraCurricularItem(props) {
  return (
    <div className="extra-curricular mb-5">
      <h3 className="extra-curricular-title mb-0">{props.title}</h3>
      {props.children}
    </div>
  )
}

