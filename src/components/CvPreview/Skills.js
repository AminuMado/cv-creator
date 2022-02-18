import React from 'react';

function CvSkills({ skills }) {
  const skillsList = skills.map((skill, index) => <li key={index}>{skill}</li>);
  return (
    <div className="cv-skills-wrapper">
      <div className="title-container">
        <h2>Skills</h2>
      </div>
      <div className="content-container">
        <ul>{skillsList}</ul>
      </div>
    </div>
  );
}

export default CvSkills;
