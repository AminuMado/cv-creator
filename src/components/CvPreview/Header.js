import React from 'react';

function CvHeader({ personalInfo }) {
  const { fullName, title } = personalInfo;

  return (
    <div className="cv-header-wrapper">
      <h1>{fullName}</h1>
      <p>{title}</p>
    </div>
  );
}

export default CvHeader;
