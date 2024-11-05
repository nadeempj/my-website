// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <h1>Project Highlights</h1>
      <ul>
        <li><strong>Facial Video-Based Vitals Prediction:</strong> Contributed to developing an innovative system for predicting vitals using facial video, optimizing frame count and image quality.</li>
        <li><strong>Retail Health Underwriting Engine:</strong> Developed an efficient underwriting engine using unique algorithms, enhancing the speed and accuracy of medical condition assessments.</li>
        <li><strong>Cloud-Native Microservices Design:</strong> Designed and developed Kubernetes-based microservices to support multiple business functions.</li>
        <li><strong>Backend Systems Architecture:</strong> Led the design and implementation of scalable backend systems for cloud-deployed platforms, focusing on performance and reliability.</li>
        {/* Add remaining project highlights as list items */}
      </ul>
    </div>
  );
}

export default Projects;
