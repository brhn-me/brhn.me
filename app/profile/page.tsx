// src/app/profile/page.tsx

import Badge from 'app/components/Badage';
import React from 'react';

export const metadata = {
  title: 'Profile',
  description: 'Profile of K H M Burhan Uddin',
};

export default function Profile() {
  return (
    <section>
      {/* Experiences Section */}
      <div className="mb-12">
        <h2 className="font-semibold text-2xl mb-4">Experiences</h2>
        {/* UBICOMP */}
        <div className="experience-block mb-8">
          <div className="block-header flex justify-between items-start">
            <div>
              <h3 className="font-semibold mb-1">Research Intern</h3>
              <p className="text-gray-700 font-semibold mb-2">UBICOMP, University of Oulu</p>
            </div>
            <div className="text-right text-sm text-gray-700">
              <p>2024</p>
            </div>
          </div>
          <ul className="list-disc ml-6 mb-3">
            <li>Knowledge distilation for multimodal data in UAV.</li>
            <li>Experiment with federated learning.</li>
          </ul>
          <div className="mb-3">
            <Badge>Knowledge Distilation</Badge>
            <Badge>Federated Learning</Badge>
            <Badge>Multimodal Data Fusion</Badge>
          </div>
        </div>
        {/* Goava AB Experience */}
        <div className="experience-block mb-8">
          <div className="block-header flex justify-between items-start">
            <div>
              <h3 className="font-semibold mb-1">Senior Software Engineer</h3>
              <p className="text-gray-700 font-semibold mb-2">Goava AB</p>
            </div>
            <div className="text-right text-sm text-gray-700">
              <p>2017 - 2020</p>
            </div>
          </div>
          <ul className="list-disc ml-6 mb-3">
            <li>Developed petabyte-scale ETL pipeline for data crawling and storage.</li>
            <li>Designed and maintained ElasticSearch cluster for data indexing.</li>
            <li>Reduced AWS Cloud billing by optimizing batch data processing.</li>
          </ul>
          <div className="mb-3">
            <Badge>ETL</Badge>
            <Badge>Big Data</Badge>
            <Badge>AWS</Badge>
            <Badge>Deep Learning</Badge>
            <Badge>Python</Badge>
          </div>
        </div>
        
        {/* Nilavo Technologies Experience */}
        <div className="experience-block mb-8">
          <div className="block-header flex justify-between items-start">
            <div>
              <h3 className="font-semibold mb-1">Software Engineer</h3>
              <p className="text-gray-700 font-semibold mb-2">Nilavo Technologies Limited</p>
            </div>
            <div className="text-right text-sm text-gray-700">
              <p>2011 - 2017</p>
            </div>
          </div>
          <ul className="list-disc ml-6 mb-3">
            <li>Developed high-performance file transfer libraries.</li>
            <li>Implemented secure file handling and encryption features.</li>
            <li>Designed and maintained enterprise-level Java applications.</li>
          </ul>
          <div className="mb-3">
            <Badge>Spring Boot</Badge>
            <Badge>JEE</Badge>
            <Badge>JavaScript</Badge>
            <Badge>Cyber Security</Badge>
            <Badge>Encryption</Badge>
          </div>
        </div>
      </div>
      {/* Academia Section */}
      <div className="mb-12">
        <h2 className="font-semibold text-2xl mb-4">Academia</h2>

        {/* University of Oulu */}
        <div className="academia-block mb-8">
          <div className="block-header flex justify-between items-start">
            <div>
              <h3 className="font-semibold mb-1">MS in Computer Science & Engineering</h3>
              <p className="text-gray-700 font-semibold mb-2">University of Oulu</p>
            </div>
            <div className="text-right text-sm text-gray-700">
              <p>2023 - 2025</p>
            </div>
          </div>
        </div>

        {/* Shahjalal University of Science and Technology */}
        <div className="academia-block mb-8">
          <div className="block-header flex justify-between items-start">
            <div>
              <h3 className="font-semibold mb-1">BS in Computer Science & Engineering</h3>
              <p className="text-gray-700 font-semibold mb-2">Shahjalal University of Science and Technology</p>
            </div>
            <div className="text-right text-sm text-gray-700">
              <p>2006 - 2011</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
