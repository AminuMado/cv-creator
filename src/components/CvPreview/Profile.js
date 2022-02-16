import React from 'react';
function CvProfile({ personalInfo }) {
  return (
    <div className="cv-profile-wrapper">
      <h1>Profile</h1>
      <p>{personalInfo.description}</p>
    </div>
  );
}
export default CvProfile;
