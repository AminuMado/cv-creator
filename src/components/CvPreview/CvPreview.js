import React from 'react';
import CvContact from './Contact';
import CvHeader from './Header';
import CvSkills from './Skills';
import CvExperience from './Experience';
import CvEducation from './Education';
import CvProfile from './Profile';
function CvPreview({ formData }) {
  return (
    <div className="cv-preview-wrapper">
      <CvHeader personalInfo={formData.personalInfo} />
      <div className="cv-left-column-wrapper">
        <CvContact personalInfo={formData.personalInfo} />
        <CvSkills skills={formData.skills} />
        <CvEducation education={formData.education} />
      </div>
      <div className="cv-right-column-wrapper">
        <CvProfile personalInfo={formData.personalInfo} />
        <CvExperience experience={formData.experience} />
      </div>
    </div>
  );
}

export default CvPreview;
