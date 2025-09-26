import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: 'Heart Attack Risk Calculator',
      description:
        'A simple yet powerful tool that estimates 10-year heart attack risk using scientifically backed metrics like age, BMI, cholesterol, blood pressure, diabetes, smoking, and sleep. Built with HTML, CSS & JavaScript — no backend required. Based on research from Framingham Heart Study, CDC, WHO, AHA, and UCI datasets, this calculator gives users categorized risk results (Low / Moderate / High), personalized health notes, and a downloadable PDF report.',
        button: {
          text: 'Visit Project',
          url: 'https://heart-attack-prediction-one.vercel.app'
          },
        button2: {
          text: 'GitHub',
          url: 'https://github.com/monilshah1409/Heart_attack_prediction'
        },
      },
    {
      title: 'VigrahaRakṣitā – AI-Driven Disaster Management System',
      description:
        'VigrahaRakṣitā is an intelligent disaster management solution that leverages AI to predict, detect, and respond to natural and man-made disasters in real-time. Designed to enhance emergency preparedness and resilience, the system offers early warning alerts, risk assessments, and strategic response coordination using geospatial data, machine learning, and real-time communication tools. Its goal is to safeguard lives and infrastructure through proactive, data-driven decision-making.',
        button: {
          text: 'Visit Project',
          url: 'https://vigrahrakhita.vercel.app'
        },
    },
    
    {
      title: 'Consumer Purchasing Behavior Analysis',
      description:
        'Analyzed 10,000 retail bills to identify product pairing patterns. Applied Apriori Algorithm and predictive models to forecast purchasing trends. Designed strategies for optimized shelf placement and cross-selling. Outcome: Enhanced retailer profits with targeted marketing campaigns.',
       
    },
    // {
    //   title: 'Financial Analytics',
    //   description:
    //     'Built Tableau dashboards to visualize revenue trends and expenses. Conducted predictive analysis for financial forecasting. Identified cost-saving opportunities and growth areas. Outcome: Provided actionable insights for strategic business decisions.',
    //     button3: {
    //       text: 'Visit Dashboard',
    //       url: 'https://public.tableau.com/views/FDA_17269313860500/Top5industrisesof2015-16?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    //     },
    // },
    {
      title: 'FDI Analytics',
      description:
        'Visualized FDI trends across sectors and regions. Performed correlation analysis between FDI and economic indicators. Highlighted key investment-attracting sectors. Outcome: Supported policymaking with global investment insights.',
        button3: {
          text: 'Visit Dashboard',
          url: 'https://public.tableau.com/views/FDA_17269313860500/Top5industrisesof2015-16?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
        },
    },
    {
      title: 'Entertainer Data Analytics',
      description:
        'Analyzed audience preferences using Tableau dashboards. Predicted trends for upcoming entertainment releases. Segmented consumers using clustering techniques. Outcome: Guided content production and marketing strategies.',
        button3: {
          text: 'Visit Dashboard',
          url: 'https://public.tableau.com/shared/CJ33K4M8D?:display_count=n&:origin=viz_share_link'
        },
    },
    {
      title: 'Crop Production Analysis',
      description:
        'Visualized crop yields and climatic patterns in Tableau. Conducted regression analysis to assess climate impact. Suggested region-specific strategies to boost productivity. Outcome: Improved agricultural policymaking and sustainability.',
        button3: {
          text: 'Visit Dashboard',
          url: 'https://public.tableau.com/views/Cropproductionanalysis_17282080507470/Story1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
        },
    },
    {
      title: 'Catalogue Website Development',
      description:
        'Designed and developed a responsive WordPress website. Showcased product catalog with user-friendly navigation. Outcome: Enhanced digital presence for the chemical business. Website Link: biorisechem.com',
         button3: {
          text: 'Visit Website',
          url: 'https://biorisechem.com/'
        },
    },
  ];

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className="projects-container">
      <div className="projects-content-box">
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header" onClick={() => toggleProject(index)}>
              <h2>{project.title}</h2>
              <button className="expand-button">
                <i className={`fas ${expandedProject === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </button>
            </div>
            <div className={`project-description ${expandedProject === index ? 'active' : ''}`}>
              <p>{project.description}</p>
              {project.button && (
                <button
                  onClick={() => window.open(project.button.url, '_blank', 'noopener,noreferrer')}
                  className="project-link-button"
                >
                  {project.button.text}
                </button>
              )}
              {project.button2 && (
                <button
                  onClick={() => window.open(project.button2.url, '_blank', 'noopener,noreferrer')}
                  className="project-link-button"
                >
                  {project.button2.text}
                </button>
              )}
              {project.button3 && (
                <button
                  onClick={() => window.open(project.button3.url, '_blank', 'noopener,noreferrer')}
                  className="project-link-button"
                >
                  {project.button3.text}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
