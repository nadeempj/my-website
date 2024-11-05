// src/components/Experience.js
import React from 'react';

function Experience() {
  return (
    <div className="experience">
      <h1>Career Glimpse</h1>
      <h2>Software Engineer II, McKinsey Global Capabilities and Services India Pvt Ltd</h2>
      <p>July 2022 - Present</p>
      <ul>
        <li>Designed and developed cloud-native Kubernetes-based microservices to support multiple business functions.</li>
        <li>Architected and optimized backend systems for cloud-deployed platforms, ensuring scalability and performance.</li>
        {/* Add remaining job details as list items */}
      </ul>

      <h2>Senior Full Stack Developer, Fedo Health Technologies Pvt Ltd</h2>
      <p>July 2018 - July 2022</p>
      <ul>
        <li>Developed a quote management system and other key features, demonstrating rapid skill acquisition and problem-solving.</li>
        <li>Contributed to a facial video-based vitals prediction system, optimizing frame count and image quality.</li>
        {/* Add remaining job details as list items */}
      </ul>
      
      <h2>Junior Software Engineer Intern, Geojit Financial Technologies Pvt Ltd</h2>
      <p>February 2018 – June 2018</p>
      <ul>
        <li>Troubleshooted, debugged, and maintained existing systems.</li>
        <li>Deployed programs and ensured software were updated with the latest features.</li>
        {/* Add remaining job details as list items */}
      </ul>
    </div>
  );
}

export default Experience;
