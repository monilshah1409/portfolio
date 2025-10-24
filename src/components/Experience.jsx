import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleItem = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const internships = [
    {
      title: 'Software Development Engineer Intern',
      details: 'Bluestock | 1 June 2025 - 31 July 2025\n\nDeveloped software solutions, collaborated on team projects, and gained hands-on experience in full-stack development.'
    },
    {
      title: 'Graphics & Web Design Intern',
      details: 'Unnati Informatics LLP | 5 June 2025 - 15 July 2025\n\nDesigned graphics and web interfaces, learned UI/UX principles, and assisted in client projects.'
    },
    {
      title: 'Data Analyst Intern',
      details: 'Unified Mentor | 15 July 2024 - 15 October 2024\n\nAnalyzed datasets, created visualizations, and provided insights for business decisions.'
    }
  ];

  const freelancing = [
    {
      title: 'RESTART (Mental Health Clinic Website)',
      details: 'Completed | 2025\n\nDeveloped a fully functional website for a mental health clinic, incorporating AI companion features and ensuring user-friendly design.'
    },
    {
      title: 'V K Engineers (Attendance & Payment Management System)',
      details: 'Completed | 2025\n\nBuilt a staff management system for factory workers, including attendance tracking, payment processing, and summary reports.'
    },
    {
      title: 'Dr Shrey Desai (Orthopaedic Surgeon Website)',
      details: 'Ongoing | 2025\n\nDesigning and developing a professional website for an orthopaedic surgeon to enhance online presence and patient outreach.'
    }
  ];

  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <div className="categories-wrapper">
        <div className="internships-category">
          <h2>Internships</h2>
          {internships.map((item, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header" onClick={() => toggleItem(`internship-${index}`)}>
                <h3>{item.title}</h3>
                <button className="expand-button">
                  <i className={`fas ${expandedItems.has(`internship-${index}`) ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button>
              </div>
              <div className={`experience-description ${expandedItems.has(`internship-${index}`) ? 'active' : ''}`}>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="freelancing-category">
          <h2>Freelancing Projects</h2>
          {freelancing.map((item, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header" onClick={() => toggleItem(`freelancing-${index}`)}>
                <h3>{item.title}</h3>
                <button className="expand-button">
                  <i className={`fas ${expandedItems.has(`freelancing-${index}`) ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button>
              </div>
              <div className={`experience-description ${expandedItems.has(`freelancing-${index}`) ? 'active' : ''}`}>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
