import React from 'react';
import CvContact from './Contact';
import CvHeader from './Header';
import CvSkills from './Skills';
import CvExperience from './Experience';
function CvPreview({ formData }) {
  return (
    <div className="cv-preview-wrapper">
      <CvHeader personalInfo={formData.personalInfo} />
      <CvContact personalInfo={formData.personalInfo} />
      <CvSkills skills={formData.skills} />
      <CvExperience experience={formData.experience} />
    </div>
  );
}

export default CvPreview;
