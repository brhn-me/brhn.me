
import Badge from 'app/components/Badge';
import React from 'react';


export const metadata = {
  title: 'Profile',
  description: 'Profile of K H M Burhan Uddin',
};


function Details({ details }) {
  return (
    <ul className="list-disc ml-6 mb-3">
      {details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  );
}


function Date({ date }) {
  return (
    <div className="text-sm text-gray-700 dark:text-neutral-400 mb-2 sm:ml-4">
      <p>{date}</p>
    </div>
  );
}


function Experience({ title, company, date, details, skills }) {
  return (
    <div className="experience-block mb-8">
      <div className="block-header flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-gray-700 font-semibold mb-2 dark:text-neutral-200">{company}</p>
        </div>
        <Date date={date} />
      </div>
      <Details details={details} />
      <div className="mb-3">
        {skills.map((skill, index) => (
          <Badge key={index}>{skill}</Badge>
        ))}
      </div>
    </div>
  );
}


function Academic({ degree, institution, date }) {
  return (
    <div className="academia-block mb-8">
      <div className="block-header flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h3 className="font-semibold mb-1">{degree}</h3>
          <p className="text-gray-700 font-semibold mb-2 dark:text-neutral-200">{institution}</p>
        </div>
        <Date date={date} />
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <section>
      {/* Experiences Section */}
      <div className="mb-12">
        <h2 className="font-semibold text-2xl mb-4">Experiences</h2>
        <Experience
          title="Research Intern"
          company="UBICOMP, University of Oulu"
          date="2024"
          details={[
            'Knowledge distillation for multimodal data in UAV.',
            'Experiment with federated learning.'
          ]}
          skills={['Knowledge Distillation', 'Federated Learning', 'Multimodal Data Fusion']}
        />
        <Experience
          title="Senior Software Engineer"
          company="Goava AB"
          date="2017 - 2020"
          details={[
            'Developed petabyte-scale ETL pipeline for data crawling and storage.',
            'Designed and maintained ElasticSearch cluster for data indexing.',
            'Reduced AWS Cloud billing by optimizing batch data processing.'
          ]}
          skills={['ETL', 'Big Data', 'AWS', 'Deep Learning', 'Python']}
        />
        <Experience
          title="Software Engineer"
          company="Nilavo Technologies Limited"
          date="2011 - 2017"
          details={[
            'Developed high-performance file transfer libraries.',
            'Implemented secure file handling and encryption features.',
            'Designed and maintained enterprise-level Java applications.'
          ]}
          skills={['Spring Boot', 'JEE', 'JavaScript', 'Cyber Security', 'Encryption']}
        />
      </div>
      {/* Academia Section */}
      <div className="mb-12">
        <h2 className="font-semibold text-2xl mb-4">Academia</h2>
        <Academic
          degree="MS in Computer Science & Engineering"
          institution="University of Oulu"
          date="2023 - 2025"
        />
        <Academic
          degree="BS in Computer Science & Engineering"
          institution="Shahjalal University of Science and Technology"
          date="2006 - 2011"
        />
      </div>
    </section>
  );
}
