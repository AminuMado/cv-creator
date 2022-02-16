import React from 'react';

function CvExperience({ experience }) {
  const experienceItem = experience.map((experienceItem, index) => {
    const jobResponsibilities = experienceItem.jobResponsibilities.map(
      (jobResponsibility, index) => {
        return <li key={index}>{jobResponsibility}</li>;
      }
    );
    return (
      <div className="experience-item-wrapper" key={index}>
        <h2 className="experience-name">{experienceItem.companyName}</h2>
        <h2 className="experience-title">{experienceItem.jobTitle}</h2>
        <h2 className="experience-location">{experienceItem.jobLocation}</h2>
        <div className="experience-period">
          {experienceItem.startDate} - {experienceItem.endDate}
        </div>
        <h2 className="experience-responsibilities">{jobResponsibilities}</h2>
      </div>
    );
  });
  return (
    <div className="cv-experience-wrapper">
      <h1>Work Experience</h1>
      {experienceItem}
    </div>
  );
}
export default CvExperience;
