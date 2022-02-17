import React from 'react';
function CvProfile({ personalInfo }) {
  return (
    <div className="cv-profile-wrapper">
      <div class="title-container">
        <h2>Profile</h2>
      </div>
      <div class="content-container">
        <p class="enlarge">{personalInfo.description}</p>
      </div>
    </div>
  );
}
export default CvProfile;
