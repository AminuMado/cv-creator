import React from 'react';
function CvProfile({ personalInfo }) {
  return (
    <div className="cv-profile-wrapper">
      <div className="title-container">
        <h2>Profile</h2>
      </div>
      <div className="content-container">
        <p className="enlarge">{personalInfo.description}</p>
      </div>
    </div>
  );
}
export default CvProfile;
