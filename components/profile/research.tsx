import React from "react";
import { Contribution, Contributions, RelatedLink, RelatedLinkButton, RelatedLinks, ResearchItem, ResearchName, ResumeHeading, ResumeSection, Skill, Skills } from "./resume";
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Research() {


  return (
    <ResumeSection id="research">
      <ResumeHeading>Research</ResumeHeading>
      <ResearchItem>
        <ResearchName duration="December 2008 - April 2013">Pipilika Search Engine</ResearchName>
        <Skills>
          <Skill>Hadoop</Skill>
          <Skill>Lucene</Skill>
          <Skill>Java</Skill>
          <Skill>Java</Skill>
          <Skill>Crawling</Skill>
          <Skill>Indexing</Skill>
          <Skill>Searching</Skill>
          <Skill>Distributed Systems</Skill>
        </Skills>
        <Contributions>
          <Contribution>
            Proposed and developed a prototype as an undergrad thesis for the first-ever Bangla search engine named ”Pipilika”.
          </Contribution>
          <Contribution>
            Conducted R&D on web crawling, indexing of joint Bangla alphabets, and integrated distributed systems (Hadoop). 
            Proposed and developed a generic content parser with 80% accuracy.
          </Contribution>
          <Contribution>
            Pitched and demonstrated the product on several occasions and received several awards. Upon receiving 1M funding
            from Telenor, we launched it to production in 2013. Our work has been featured in several national news media.
          </Contribution>
          <Contribution>
            Since then it has served as a data platform for researchers at SUST, leading to several NLP research publications.
          </Contribution>
        </Contributions>
        <RelatedLinks>
          <RelatedLink url="https://en.wikipedia.org/wiki/Pipilika">Pipilika - Wikipedia</RelatedLink>
          <RelatedLink url="https://www.thedailystar.net/news/first-bangla-search-engine-pipilika-takes-off">First Bangla search engine Pipilika takes off - The Daily Star</RelatedLink>
          <RelatedLink url="https://archive.dhakatribune.com/uncategorized/2013/04/16/first-ever-bangla-search-engine-goes-into-operation">First-ever Bangla search engine goes into operation - The Dhaka Tribune</RelatedLink>
          <RelatedLink url="https://bdnews24.com/bangladesh/pipilika-starts-journey">Pipilika starts journey - The BDNews24</RelatedLink>
        </RelatedLinks>
        <div className="mb-3">
          <RelatedLinkButton icon={faSquareArrowUpRight} url="https://drive.google.com/file/d/1pBILjGHjVw5GwApzW10mvYUgrbqGf1Yx/view?usp=sharing">Thesis Report</RelatedLinkButton>
        </div>
      </ResearchItem>

      <ResearchItem>
        <ResearchName duration="2009 - 2010">Paperless Admission System</ResearchName>
        <Skills>
          <Skill>Automation</Skill>
          <Skill>Digitalization</Skill>
        </Skills>
        <Contributions>
          <Contribution>
            Automated and digitalized admission of SUST. For students, it reduced traveling across the country and filling redundant
            forms to simply sending an SMS. At university, it reduced error-prone paperwork from 30 days to less than a second.
          </Contribution>
          <Contribution>
            As our work reduced carbon emissions, our project was inaugurated by the prime minister of Bangladesh herself. It 
            revolutionized admission processing in the entire country as all the universities followed our model later.
          </Contribution>
          <Contribution>
            SUST received funding for building a high-rise ICT complex from the education ministry of Bangladesh for this project.
          </Contribution>
        </Contributions>
        <RelatedLinks>
          <RelatedLink url="https://www.thedailystar.net/news-detail-154679">SUST makes admission paperless</RelatedLink>
          <RelatedLink url="https://www.mbillionth.in/2010/07/24/paperless-admission-system-sust/">Paperless Admission System (SUST) - mBillionth Award, South Asia</RelatedLink>
        </RelatedLinks>
      </ResearchItem>
    </ResumeSection>
  )
}