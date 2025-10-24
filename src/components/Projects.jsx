import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState(new Set());

  const projects = [
    {
      title: 'Heart Attack Risk Calculator',
      category: 'Web Development',
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
      category: 'Web Development',
      description:
        'VigrahaRakṣitā is an intelligent disaster management solution that leverages AI to predict, detect, and respond to natural and man-made disasters in real-time. Designed to enhance emergency preparedness and resilience, the system offers early warning alerts, risk assessments, and strategic response coordination using geospatial data, machine learning, and real-time communication tools. Its goal is to safeguard lives and infrastructure through proactive, data-driven decision-making.',
        button: {
          text: 'Visit Project',
          url: 'https://vigrahrakhita.vercel.app'
        },
    },
    {
      title: 'Consumer Purchasing Behavior Analysis',
      category: 'Data Analytics',
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
      category: 'Data Analytics',
      description:
        'Visualized FDI trends across sectors and regions. Performed correlation analysis between FDI and economic indicators. Highlighted key investment-attracting sectors. Outcome: Supported policymaking with global investment insights.',
        button3: {
          text: 'Visit Dashboard',
          url: 'https://public.tableau.com/views/FDA_17269313860500/Top5industrisesof2015-16?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
        },
    },
    {
      title: 'Entertainer Data Analytics',
      category: 'Data Analytics',
      description:
        'Analyzed audience preferences using Tableau dashboards. Predicted trends for upcoming entertainment releases. Segmented consumers using clustering techniques. Outcome: Guided content production and marketing strategies.',
        button3: {
          text: 'Visit Dashboard',
          url: 'https://public.tableau.com/shared/CJ33K4M8D?:display_count=n&:origin=viz_share_link'
        },
    },
    {
      title: 'Crop Production Analysis',
      category: 'Data Analytics',
      description:
        'Visualized crop yields and climatic patterns in Tableau. Conducted regression analysis to assess climate impact. Suggested region-specific strategies to boost productivity. Outcome: Improved agricultural policymaking and sustainability.',
        button3: {
          text: 'Visit Dashboard',
          url: 'https://public.tableau.com/views/Cropproductionanalysis_17282080507470/Story1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
        },
    },
    {
      title: 'Catalogue Website Development',
      category: 'Freelancing',
      description:
        'Designed and developed a responsive WordPress website. Showcased product catalog with user-friendly navigation. Outcome: Enhanced digital presence for the chemical business. Website Link: biorisechem.com',
         button3: {
          text: 'Visit Website',
          url: 'https://biorisechem.com/'
        },
    },
    {
      title: 'RESTART',
      category: 'Freelancing',
      description:
        'Developed Fully Functional website\n\nDeveloped a website for the online presence of a Mental health clinic. Where carefully considered the need of the client and hosted a free domain by using AI as a companion.',
    },
    {
      title: 'V K Engineers',
      category: 'Freelancing',
      description:
        'Developed Attendance and Payment management System\n\nDeveloped a staff management system for factory workers, simplifying attendance tracking and payment processing. The system also generates summary reports for efficient management overview.',
    },
    {
      title: 'Dr Shrey Desai',
      category: 'Freelancing',
      description:
        'Developed Fully Functional website\n\nHere is the revised description:\n\nCurrently developing a professional website for an orthopaedic surgeon with five years of field experience. The project involves designing, building, and optimizing the site to enhance their online presence and patient outreach.',
    },
  ];

  const toggleProject = (index) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
  };

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  // Define the order of categories
  const categoryOrder = ['Data Analytics', 'Freelancing', 'Web Development'];

  return (
    <div className="projects-container">
      <div className="projects-content-box">
        <h1>Projects</h1>
        {categoryOrder.map((category) => (
          groupedProjects[category] && (
            <div key={category} className="category-section">
              <h2 className="category-title">{category}</h2>
              {groupedProjects[category].map((project, index) => {
                const globalIndex = projects.findIndex(p => p === project);
                return (
                  <div key={globalIndex} className="project-card">
                    <div className="project-header" onClick={() => toggleProject(globalIndex)}>
                      <h3>{project.title}</h3>
                      <button className="expand-button">
                        <i className={`fas ${expandedProjects.has(globalIndex) ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                      </button>
                    </div>
                    <div className={`project-description ${expandedProjects.has(globalIndex) ? 'active' : ''}`}>
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
                );
              })}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Projects;
