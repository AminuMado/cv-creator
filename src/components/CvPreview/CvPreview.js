import React from 'react';
import CvContact from './Contact';
import CvHeader from './Header';
import CvSkills from './Skills';
import CvExperience from './Experience';
import CvEducation from './Education';
import CvProfile from './Profile';
import './CvPreview.css';
function CvPreview({ formData }) {
  return (
    <>
      <CvHeader personalInfo={formData.personalInfo} />
      <div className="main">
        <CvEducation education={formData.education} />
        <CvSkills skills={formData.skills} />
        <CvProfile personalInfo={formData.personalInfo} />
        <CvExperience experience={formData.experience} />
      </div>
    </>
  );
}

export default CvPreview;
