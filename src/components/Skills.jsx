import React, { useState } from 'react';
import '../App.css';

const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [debug, setDebug] = useState(false);

  const toggleCategory = (category) => {
    console.log('Toggling category:', category);
    console.log('Previous state:', expandedCategories);
    
    setExpandedCategories(prev => {
      const newState = {
        ...prev,
        [category]: !prev[category]
      };
      console.log('New state:', newState);
      return newState;
    });
  };

  const skills = {
    technicalSkills: [
      { name: 'Python', level: 80, icon: 'fab fa-python' },
      { name: 'SQL', level: 50, icon: 'fas fa-database' },
      { name: 'Scikit-Learn', level: 50, icon: 'fas fa-brain' },
      { name: 'Power BI', level: 75, icon: 'fas fa-chart-pie' },
      { name: 'Tableau', level: 90, icon: 'fas fa-chart-bar' },
      { name: 'Data Visualization', level: 95, icon: 'fas fa-chart-line' },
      { name: 'Data Interpretation', level: 80, icon: 'fas fa-search' },
      { name: 'Data Modeling', level: 80, icon: 'fas fa-project-diagram' }
    ],
    dataManipulation: [
      { name: 'Data Wrangling', level: 85, icon: 'fas fa-tools' },
      { name: 'Data Munging', level: 85, icon: 'fas fa-filter' },
      { name: 'Data Cleaning', level: 90, icon: 'fas fa-broom' },
      { name: 'Data Validation', level: 85, icon: 'fas fa-check-circle' }
    ],
    mlAi: [
      { name: 'Machine Learning Algorithms', level: 80, icon: 'fas fa-microchip' },
      { name: 'Artificial Intelligence', level: 70, icon: 'fas fa-robot' },
      { name: 'Generative AI Tools', level: 75, icon: 'fas fa-magic' },
      { name: 'Scikit-Learn', level: 80, icon: 'fas fa-brain' }
    ],
    analyticalSkills: [
      { name: 'Statistical Testing', level: 85, icon: 'fas fa-square-root-alt' },
      { name: 'Quantitative Analytics', level: 85, icon: 'fas fa-calculator' },
      { name: 'Pattern Recognition', level: 80, icon: 'fas fa-puzzle-piece' },
      { name: 'Microsoft Excel', level: 80, icon: 'fas fa-file-excel' },
      { name: 'UML', level: 55, icon: 'fas fa-project-diagram' },
      { name: 'Optimization', level: 80, icon: 'fas fa-chart-line' }
    ],
    softSkills: [
      { name: 'Communication Skills', level: 90, icon: 'fas fa-comments' },
      { name: 'Analytical Thinking', level: 85, icon: 'fas fa-brain' },
      { name: 'Problem Solving', level: 90, icon: 'fas fa-lightbulb' },
      { name: 'Attention to Detail', level: 85, icon: 'fas fa-search' },
      { name: 'Team Collaboration', level: 95, icon: 'fas fa-users' }
    ],
    dataAnalytics: [
      { name: 'Business Analysis', level: 80, icon: 'fas fa-chart-pie' },
      { name: 'Data Storytelling', level: 75, icon: 'fas fa-book' },
      { name: 'Reporting', level: 85, icon: 'fas fa-file-alt' }
    ],
    // businessSkills: [
    //   { name: 'Project Management', level: 80, icon: 'fas fa-tasks' },
    //   { name: 'Agile Methodologies', level: 75, icon: 'fas fa-running' },
    //   { name: 'Stakeholder Management', level: 70, icon: 'fas fa-handshake' }
    // ]
  };

  const renderSkillList = (skillList, category) => {
    if (!skillList) {
      console.log('No skills found for category:', category);
      return null;
    }
    
    const isExpanded = expandedCategories[category];
    console.log('Category:', category, 'isExpanded:', isExpanded);
    
    const displaySkills = isExpanded ? skillList : skillList.slice(0, 5);
    const hasMoreSkills = skillList.length > 5;

    console.log('Displaying skills:', displaySkills);
    console.log('Has more skills:', hasMoreSkills);

    return (
      <>
        <ul className="skill-list">
          {displaySkills.map((skill, index) => {
            console.log('Rendering skill:', skill.name, 'at index:', index);
            return (
              <li key={`${category}-${index}`} className="skill-item">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
                <div className="skill-level">
                  <div className="skill-level-bar" style={{ width: `${skill.level}%` }}></div>
                </div>
              </li>
            );
          })}
        </ul>
        {hasMoreSkills && (
          <button 
            className="show-more-btn"
            onClick={() => {
              console.log('Show more/less clicked for category:', category);
              toggleCategory(category);
            }}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </>
    );
  };

  return (
    <div className="skills-container">
      <div className="skills-content-box">
        <h1>Skills & Expertise</h1>
        <button onClick={() => {
          setDebug(!debug);
          console.log('Debug mode:', !debug);
        }}>
          Toggle Debug Mode
        </button>
        <div className="skills-grid">
          <div className="skill-category">
            <h2><i className="fas fa-laptop-code"></i> Technical Skills</h2>
            {renderSkillList(skills.technicalSkills, 'technicalSkills')}
          </div>

          <div className="skill-category">
            <h2><i className="fas fa-database"></i> Data Manipulation</h2>
            {renderSkillList(skills.dataManipulation, 'dataManipulation')}
          </div>

          <div className="skill-category">
            <h2><i className="fas fa-robot"></i> ML & AI</h2>
            {renderSkillList(skills.mlAi, 'mlAi')}
          </div>

          <div className="skill-category">
            <h2><i className="fas fa-chart-line"></i> Analytical Skills</h2>
            {renderSkillList(skills.analyticalSkills, 'analyticalSkills')}
          </div>

          <div className="skill-category">
            <h2><i className="fas fa-users"></i> Soft Skills</h2>
            {renderSkillList(skills.softSkills, 'softSkills')}
          </div>

          <div className="skill-category">
            <h2><i className="fas fa-chart-pie"></i> Data & Analytics</h2>
            {renderSkillList(skills.dataAnalytics, 'dataAnalytics')}
          </div>

          {/* <div className="skill-category">
            <h2><i className="fas fa-briefcase"></i> Business Skills</h2>
            {renderSkillList(skills.businessSkills, 'businessSkills')}
          </div> */}
        </div>
        {debug && (
          <div className="debug-info">
            <pre>
              {JSON.stringify({expandedCategories, skills}, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
