import React from 'react';

function CvSkills({ skills }) {
  const skillsList = skills.map((skill) => <li>{skill}</li>);
  return <div className="cv-skills-wrapper">{skillsList}</div>;
}

export default CvSkills;
