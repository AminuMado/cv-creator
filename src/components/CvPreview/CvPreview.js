import React from 'react';
import CvContact from './Contact';
import CvHeader from './Header';
import CvSkills from './Skills';

function CvPreview({ formData }) {
  return (
    <div className="cv-preview-wrapper">
      <CvHeader personalInfo={formData.personalInfo} />
      <CvContact personalInfo={formData.personalInfo} />
      <CvSkills skills={formData.skills} />
    </div>
  );
}

export default CvPreview;
