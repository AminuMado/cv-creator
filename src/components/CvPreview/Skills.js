import React from 'react';

function CvSkills({ skills }) {
  const skillsList = skills.map((skill, index) => <li key={index}>{skill}</li>);
  return (
    <div className="cv-skills-wrapper">
      <h1>Skills</h1>
      {skillsList}
    </div>
  );
}

export default CvSkills;
